import os
import re
from typing import List, Tuple, Optional

from seetagconv import SeeTagConv
from param import Params


class MarkConv:
    """
    Converts a single Markdown file into Lua documentation regions.
    Handles:
     - region splitting (# heading)
     - parameter extraction
     - signature generation
     - header generation
     - Markdown → Lua comments
     - description formatting
    """

    def __init__(self, path: str, group: str, content: str) -> None:
        self.path: str = path
        self.group: str = group
        self.content: str = content

        see_text = self.get_region_text("see also")
        if see_text != None:
            self.seetags = SeeTagConv(see_text)
        else:
            self.seetags = SeeTagConv("")

        # capture region text once
        parameters_text = self.get_region_text("parameters")
        root_text = self.get_region_text("root")
        if parameters_text == None:
            self.params = []
            return
        # Try to initialise Params in a robust way; do not let it break the whole converter.
        self.params: Params = Params(parameters_text, self.get_name(), root_text)


       

    # ------------------------------------------------------------
    # Utility
    # ------------------------------------------------------------

    def __repr__(self) -> str:
        return f"<MarkConv group={self.group} name={self.get_name()}>"

    def get_name(self) -> str:
        """Return the file name without extension."""
        return os.path.splitext(os.path.basename(self.path))[0]

    # ------------------------------------------------------------
    # Region Parsing
    # ------------------------------------------------------------

    def get_regions(self) -> List[Tuple[str, str]]:
        """
        Split Markdown into (heading, body) tuples.
        Text before first heading becomes region 'root'.
        """
        regions: List[Tuple[str, str]] = []
        current_heading: Optional[str] = None
        current_body: List[str] = []
        root_body: List[str] = []

        for line in self.content.splitlines():
            match = re.match(r"^(#+)\s+(.*?)(\s+#+)?$", line)
            # Heading detected
            if match:
                # flush pending root block
                if current_heading is None and root_body:
                    regions.append(("root", "\n".join(root_body).strip()))
                    root_body = []

                # flush previous heading block
                if current_heading is not None:
                    regions.append((current_heading, "\n".join(current_body).strip()))
                    current_body = []

                current_heading = match.group(2).strip()
                continue

            # Normal line
            if current_heading is None:
                root_body.append(line)
            else:
                current_body.append(line)

        # flush last
        if current_heading is not None:
            regions.append((current_heading, "\n".join(current_body).strip()))
        elif root_body:
            regions.append(("root", "\n".join(root_body).strip()))

        return regions

    def get_region_text(self, name: str) -> Optional[str]:
        """Return body text of a region heading by name."""
        for heading, body in self.get_regions():
            if heading.lower() == name.lower():
                return body
        return None

    # ------------------------------------------------------------
    # Header
    # ------------------------------------------------------------

    def get_header(self) -> str:
        """
        Create a hyperlink header to the docs.
        """
        base = "https://premake.github.io/docs"
        if self.group == '.':
            return f"<h1><a href=\"{base}/{self.get_name()}\">{self.get_name()}</a></h1>"
        else:
            return f"<h1><a href=\"{base}/{self.group}/{self.get_name()}\">{self.get_name()}</a></h1>"
        
    def get_deprecated(self) -> str:
        if "deprecated" in self.get_region_text("root"):
            return "---@deprecated"
        else:
            return "---"

    # ------------------------------------------------------------
    # Markdown → Lua Comments
    # ------------------------------------------------------------

    def to_lua_comment(self, text: str) -> str:
        """
        Convert Markdown into Lua doc comments.
        Converts fenced code blocks to --[[ ... ]].
        Lines outside code blocks get prefixed with ---.
        """

        def code_repl(match: re.Match) -> str:
            code = match.group(1).strip()
            return f"--[[\n{code}\n]]"

        processed = re.sub(
            r"```lua\s*(.*?)```",
            code_repl,
            text,
            flags=re.DOTALL
        )

        lines: List[str] = []
        in_block = False

        for line in processed.splitlines():
            if line.startswith("--[["):
                in_block = True
                lines.append(f"{line}\n```lua")
                continue

            if line.startswith("]]"):
                in_block = False
                lines.append(f"```\n{line}")
                continue

            if in_block:
                lines.append(line)
            else:
                lines.append(f"---{line}")

        return "\n".join(lines).rstrip()

    def to_lua_tag(self, tag: str, value: str) -> str:
        return f"---@{tag} {value}"

    # ------------------------------------------------------------
    # Lua Region wrappers
    # ------------------------------------------------------------

    def region_start(self) -> str:
        return f"--#region {self.get_name()}\n"

    def region_end(self) -> str:
        return f"\n--#endregion {self.get_name()}"

    # ------------------------------------------------------------
    # Description
    # ------------------------------------------------------------

    def get_description(self) -> str:
        desc = self.get_region_text("root") or ""

        # admonitions
        desc = re.sub(
            r":::caution\s+([\s\S]*?):::",
            r'<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;">\1</div>',
            desc,
        )

        # strip Markdown links
        desc = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", desc)

        # bold → <strong>
        desc = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", desc)

        return self.to_lua_comment(desc)

    # ------------------------------------------------------------
    # Signature (only for function files)
    # ------------------------------------------------------------

    def get_signature(self) -> str:
        """Generate the final Lua signature."""
        if self.params:
            return f"function {self.get_name()}({self.params.get_list()}) end"
        return f"function {self.get_name()}() end"

    # ------------------------------------------------------------
    # Final conversion
    # ------------------------------------------------------------

    def convert(self) -> str:
        """
        Build final output block exactly like your original converter.
        """
        header_comment = self.to_lua_comment(self.get_header())
        description_comment = self.get_description()

        parts: List[str] = [self.region_start()]

        examples: str = "---"

        example_text = self.get_region_text("examples")
        if example_text:
            examples = f"---<h2>examples</h2>\n---\n{self.to_lua_comment(example_text)}"

        if self.params:
            parts.append(self.params.convert_alias())
            parts.append(header_comment)
            parts.append(description_comment)
            parts.append(self.get_deprecated())
            parts.append(self.params.convert())
            parts.append(self.seetags.as_string("\n"))
            parts.append(examples)
            parts.append(self.get_signature())
        else:
            parts.append(header_comment)
            parts.append(description_comment)
            parts.append(self.get_deprecated())
            parts.append(self.seetags.as_string("\n"))
            parts.append(examples)
            parts.append(self.get_signature())

        parts.append(self.region_end())

        return "\n".join(parts)
