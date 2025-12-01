import os
import re
from typing import List, Tuple, Optional

from param import Params

class markconv:
    def __init__(self, path: str, group: str, content: str) -> None:
        """
        Container for a single Markdown document.
        :param path: relative file path under docs_subdir
        :param group: directory/group name (relative to docs_subdir)
        :param content: file contents as string
        """
        self.path = path
        self.group = group
        self.content = content
        params = self.get_region_name("parameters")
        if params != None:
            self.params = Params(params)
        else:
            self.params = None

    def __repr__(self) -> str:
        return f"<markconv group={self.group} path={self.path}>"

    def get_name(self) -> str:
        """
        Return the filename without extension.
        Example: "filters.md" -> "filters"
        """
        return os.path.splitext(os.path.basename(self.path))[0]

    def get_signature(self) -> str:
        """
        Return a Lua-style function signature using the filename.
        Example: "filters.md" -> "function filters() end"
        """
        if self.params != None:
            return f"function {self.get_name()}({self.params.get_list()}) end"
        else:
            return f"function {self.get_name()}() end"

    def get_regions(self) -> List[Tuple[str, str]]:
        """
        Split the Markdown content into regions.
        Each region is (heading, body).
        If there is text before the first heading, it becomes a special 'root' region.
        """
        regions: List[Tuple[str, str]] = []
        current_heading = None
        current_body = []
        root_body = []

        for line in self.content.splitlines():
            heading_match = re.match(r"^(#+)\s+(.*)", line)
            if heading_match:
                # save root text if this is the first heading
                if current_heading is None and root_body:
                    regions.append(("root", "\n".join(root_body).strip()))
                    root_body = []

                # save previous region
                if current_heading is not None:
                    regions.append((current_heading, "\n".join(current_body).strip()))
                    current_body = []

                raw_heading = heading_match.group(2).strip()
                current_heading = raw_heading.strip("#£ ").strip()
            else:
                if current_heading is None:
                    root_body.append(line)
                else:
                    current_body.append(line)

        # save last region
        if current_heading is not None:
            regions.append((current_heading, "\n".join(current_body).strip()))
        elif root_body:  # only root text, no headings at all
            regions.append(("root", "\n".join(root_body).strip()))

        return regions

    def get_region_name(self, name: str) -> Optional[str]:
        for heading, body in self.get_regions():
            if heading.lower() == name.lower():
                return body
        return None

    def get_header(self)->str:
        if self.path == '.':
            return f"<h1><a href=\"https://premake.github.io/docs/{self.get_name()}\">{self.get_name()}</a></h1>"
        else:
            return f'<h1><a href="https://premake.github.io/{self.group}/{self.get_name()}">{self.get_name()}</a></h1>'

    def __repr__(self) -> str:
        return f"<markconv group={self.group} name={self.get_name()}>"

    def to_lua_comment(self, str) ->str:
        return f"---{str}"

    def to_lua_tag(self, tag, str) ->str:
        return f"---@{tag} {str}"

    def region_start(self) ->str:
        return f"--#region {self.get_name()}"

    def region_end(self) -> str:
        return f"--#endregion {self.get_name()}"
    
    def get_description(self) -> str:
        return self.to_lua_comment(self.get_region_name("root"))

    def convert(self) -> str:
        """
        Build a formatted string by composing header, body, footer.
        """
        parts = [
            self.region_start(),
            self.to_lua_comment(self.get_header()),
            self.get_description(),
            self.params.
            self.get_signature(),
            self.region_end()
        ]
        return "\n".join(parts)
