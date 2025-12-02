import os
import re
from typing import List, Tuple, Optional


class ClassMeta:
    """
    Stores class-like metadata extracted from a Markdown file.
    """
    def __init__(self, group: str, name: str) -> None:
        self.group = group
        self.name = name

        self.title: Optional[str] = None
        self.fields: List[Tuple[str, str]] = []   # (name, description)
        self.sections: List[Tuple[str, str]] = [] # (heading, body)

        self.raw_md: str = ""


class classconv:
    """
    Markdown → Lua class metadata converter.
    Mirrors the structure of your markconv, but for class-type files like:
       HTTP-Options.md
       Net-Socket.md
    """

    FIELD_RE = re.compile(r"^\s*\*\s*`([^`]+)`\s*(.*)$")
    FRONT_TITLE_RE = re.compile(r"^title:\s*(.*)$")
    FILENAME_RE = re.compile(r"^([A-Za-z0-9]+)-([A-Za-z0-9_]+).*\.md$")
    TYPE_KEYWORDS = {
        "integer": "number",
        "int": "number",
        "float": "number",
        "double": "number",
        "number": "number",
        "string": "string",
        "text": "string",
        "name": "string",
        "path": "string",
        "file": "string",
        "directory": "string",
        "folder": "string",
        "boolean": "boolean",
        "true": "boolean",
        "false": "boolean",
        "flag": "boolean",
        "elements": "table",
        "values" : "table",
        "table" : "table"
    }
    def __init__(self, path: str, group: str, content: str) -> None:
        self.path = path
        self.group = group
        self.content = content

        # detect class name from "<GROUP>-<NAME>.md"
        match = self.FILENAME_RE.match(os.path.basename(path))
        if not match:
            raise ValueError(f"{path} does not match <GROUP>-<NAME>.md class rule")

        self.meta = ClassMeta(group, match.group(2))
        self.meta.raw_md = content

        # parse now
        self._parse_frontmatter()
        self._parse_regions_and_fields()

    def __repr__(self) -> str:
        return f"<classconv group={self.group} name={self.meta.name}>"

    # ------------------------------------------
    #  FRONT MATTER
    # ------------------------------------------
    def _parse_frontmatter(self) -> None:
        lines = self.content.splitlines()
        if not lines or lines[0].strip() != "---":
            return

        for idx in range(1, len(lines)):
            if lines[idx].strip() == "---":
                return
            m = self.FRONT_TITLE_RE.match(lines[idx])
            if m:
                self.meta.title = m.group(1).strip()

    # ------------------------------------------
    #  REGION SPLITTING (same architecture as markconv)
    # ------------------------------------------
    def _parse_regions_and_fields(self) -> None:
        regions = self.get_regions()

        for heading, body in regions:
            # extract bullet options
            for line in body.splitlines():
                f = self.FIELD_RE.match(line)
                if f:
                    name = f.group(1).strip()
                    desc = f.group(2).strip()
                    self.meta.fields.append((name, desc))

            # store whole region
            self.meta.sections.append((heading, body))

    def get_name(self) -> str:
        return os.path.splitext(os.path.basename(self.path))[0].split('-')[1]

    def get_type(self,description: str) -> str:
        """
        Determine the type of this parameter.
        - If it has values, return the alias name (e.g. 'visibilityTypes').
        - Otherwise, infer from description keywords.
        """

        desc_lower = description.lower()
        for keyword, inferred in self.TYPE_KEYWORDS.items():
            if keyword in desc_lower:
                return inferred

        return "any"  # fallback if no keyword matched

    def get_regions(self) -> List[Tuple[str, str]]:
        regions: List[Tuple[str, str]] = []
        current_heading = None
        current_body = []
        root_body = []
        skip_regions = {"availability"}
        for line in self.content.splitlines():
            heading_match = re.match(r"^(#+)\s+(.*?)(\s+#+)?$", line)
            if heading_match:
                if current_heading is None and root_body:
                    regions.append(("root", "\n".join(root_body).strip()))
                    root_body = []

                if current_heading is not None:
                    regions.append((current_heading, "\n".join(current_body).strip()))
                    current_body = []

                current_heading = heading_match.group(2).strip()
            else:
                if current_heading is None:
                    root_body.append(line)
                else:
                    current_body.append(line)

        if current_heading is not None and current_heading.lower() not in skip_regions:
            regions.append((current_heading, "\n".join(current_body).strip()))
        elif root_body:
            regions.append(("root", "\n".join(root_body).strip()))

        return regions

    # ------------------------------------------------------------
    # Header
    # ------------------------------------------------------------

    def get_header(self) -> str:
        """
        Create a hyperlink header to the docs.
        """
        base = "https://premake.github.io/docs"
        if self.path == '.':
            return f"<h1><a href=\"{base}/{self.get_name()}\">{self.get_name()}</a></h1>"
        else:
            return f"<h1><a href=\"{base}/{self.group}/{self.get_name()}\">{self.get_name()}</a></h1>"
    # ------------------------------------------
    #  LUA COMMENT CONVERSION (copied from markconv)
    # ------------------------------------------
    def to_lua_comment(self, text: str) -> str:
        def repl(match: re.Match) -> str:
            code = match.group(1).strip()
            return f"--[[\n{code}\n]]"

        processed = re.sub(r"```lua\s*(.*?)```", repl, text, flags=re.DOTALL)
        lines = []
        comment_block = False

        for line in processed.splitlines():
            if line.startswith("--[["):
                comment_block = True
                lines.append(f"{line}\n```lua")
                continue
            if line.startswith("]]"):
                comment_block = False
                lines.append(f"```\n{line}")
                continue
            if comment_block:
                lines.append(line)
            else:
                lines.append(f"---{line}")

        return "\n".join(lines).rstrip()

    def to_lua_tag(self, tag, value) -> str:
        return f"---@{tag} {value}"

    def region_start(self) -> str:
        return f"--#region {self.meta.name}\n"

    def region_end(self) -> str:
        return f"\n--#endregion {self.meta.name}"

    # ------------------------------------------
    #  DESCRIPTION (root region only)
    # ------------------------------------------
    def get_description(self) -> str:
        root = None
        for heading, body in self.meta.sections:
            if heading.lower() == "root":
                root = body
                break

        if root is None:
            return ""

        root = re.sub(r":::caution\s+([\s\S]*?):::", r'<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;">\1</div>', root)
        root = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", root)
        root = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", root)
        return self.to_lua_comment(root)
    
    def get_region_text(self, name: str) -> Optional[str]:
        """Return body text of a region heading by name."""
        for heading, body in self.get_regions():
            if heading.lower() == name.lower():
                return body
        return None
    
    # ------------------------------------------
    #  FINAL LUA EMITTER
    # ------------------------------------------
    def convert(self) -> str:
        """
        Builds Lua:
        - region
        - header
        - description
        - field list
        - additional sections
        """

        lua_fields = []
        for name, desc in self.meta.fields:
            lua_fields.append(f"---@field {name} {self.get_type(desc)} {desc}")

        section_comments = []
        self.meta.sections.pop(0)
        for head, body in self.meta.sections:
            if head.lower() == "root":
                continue
            section_comments.append(f"---\n--- {head}\n{self.to_lua_comment(body)}")

        
        parts = [
            self.region_start(),
            f"---@class {self.group}{self.get_name().capitalize()}",
            self.to_lua_comment(self.get_header()),
            self.get_description(),
            "\n".join(lua_fields),
            self.region_end()
        ]

        return "\n".join(p for p in parts if p.strip())
