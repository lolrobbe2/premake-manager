import re
import os
from typing import List, Optional

class ParamValue:
    def __init__(self, name: str, description: str, parent: str) -> None:
        self.name = name
        self.description = description
        self.parent = parent

    def to_alias_entry(self) -> str:
        return f"---| '\"{self.name.replace("`","")}\"' # {self.description}"

    def __repr__(self) -> str:
        return f"<ParamValue {self.name}: {self.description}>"


class Param:
    def __init__(   
        self, name: str, description: str, values: List[ParamValue] | None = None
    ) -> None:
        """
        Represents a single parameter and its possible values.
        :param name: The parameter name (e.g. 'visibility')
        :param description: The parameter description
        :param values: Optional list of ParamValue objects
        """
        self.name = name
        self.description = description
        self.values = values or []
        self.TYPE_KEYWORDS = {
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
            "table" : "table",
            "list" : "table",
        }
    def to_alias(self,name: str) -> str:
        """Generate a full alias block for all values of this parameter."""
        if not self.values:
            return ""
        lines = [f"---@alias {name}{self.name.capitalize()}Types"]
        for val in self.values:
            lines.append(val.to_alias_entry())
        return "\n".join(lines)

    def to_tag(self, name: str) -> str:
        """generate a full param tag"""
        brace_match = re.match(r'^\{\s*(.+?)\s*\}$', self.name)
        match = re.match(r'^(.*?[:.])\s', self.description + " ")
        description = self.description
        if match:
            description = match.group(1).strip()
        

        if brace_match:
            return f"---@param {brace_match.group(1)} {self.get_type(name)} {description}"
        if not self.values:
            return f"---@param {self.name} {self.get_type(name)} {description}"
        else:
            return f"---@param {self.name} {self.get_type(name)} {description}"
    def __repr__(self) -> str:
        return f"<Param {self.name}: {len(self.values)} values>"

    def get_type(self,name: str) -> str:
        """
        Determine the type of this parameter.
        - If it has values, return the alias name (e.g. 'visibilityTypes').
        - Otherwise, infer from description keywords.
        """
        if self.values:
            return f"{name}{self.name.capitalize()}Types"

        if name in self.TYPE_KEYWORDS.items():
            return name

        brace_match = re.match(r'^\{\s*(.+?)\s*\}$', self.name)
        if brace_match:
            return f"{name.split(".")[0]}{brace_match.group(1).capitalize()}"
        desc_lower = self.description.lower()
        for keyword, inferred in self.TYPE_KEYWORDS.items():
            if keyword in desc_lower:
                return inferred

        return "any"  # fallback if no keyword matched

class Params:
    def __init__(self, text: str, name: str, root: str) -> None:
        """
        Parse the Markdown 'Parameters' region into Param objects.
        :param text: Markdown body text containing parameters and values
        :param name: Root function/command name
        :param root: Markdown text potentially containing a Lua code block
        """
        self.name = name
        self.text = text
        self.params: List[Param] = self._parse(text, root)

    def process_value_match(self, value: re.Match, name:str):
        val_name, val_desc = value.groups()
        if val_name.startswith("-"):
            return
        lua_entry_match = re.match(r'^\[\s*"([^"]+)"\s*\]\s*=\s*".*"$', val_name)
        if lua_entry_match:
            val_name = "entry"
        current_value = {
            "name": val_name.strip(),
            "description": val_desc.strip(),
            "parent": name
        }
        return current_value

    def _parse(self, text: str, root: str) -> List[Param]:
        params: List[Param] = []
        current_param: dict | None = None
        current_value: dict | None = None
        temp_params: list[dict] = []

        # --- Step 1: extract root signature ---
        codeblock_match = re.search(r"```lua\s+([\s\S]+?)```", root)
        root_clean = codeblock_match.group(1).strip() if codeblock_match else root.strip()

        sig_match = re.match(r"^(\w+)\s*\(\s*(.*)\s*\)$", root_clean)
        table_match = re.match(r"^(\w+)\s*\{\s*(.*)\s*\}$", root_clean)
        brace_match = re.match(r"^(\w+(?:\.\w+)*)\s*\(\s*(.*?)\s*\)\s*\{\s*(.*?)\s*\}$", root_clean)


        # Match dotted names and capture all args inside parentheses
        sig_match = re.match(r"^\s*['\"]?(\w+(?:\.\w+)*)['\"]?\s*\(\s*(.*?)\s*\)\s*$", root_clean)

        # Optional: also keep your table-style form
        table_match = re.match(r"^\s*['\"]?(\w+(?:\.\w+)*)['\"]?\s*\{\s*(.*?)\s*\}\s*$", root_clean)

        raw_params = None
        if sig_match:
            func_name = sig_match.group(1)
            raw_params = sig_match.group(2)              # -> "url, file, { options }"
        elif table_match:
            func_name = table_match.group(1)
            raw_params = table_match.group(2)


        if self.name == "endian":
            print("hello")
        if raw_params:
            if re.match(r'^\s*"(?:[^"]+)"\s*(?:,\s*"(?:[^"]+)")+\s*$', raw_params):
                raw_params = "list"
            elif re.match(r'^\s*[^,\s]+(?:\s*,\s*[^,\s]+)*\s*,\s*\.\.\.\s*$', raw_params):
                raw_params = "table"
                


            prefix_match = re.match(r'^\s*"([^":]+):([^"]+)"\s*$', raw_params)
            if prefix_match:
                raw_params =  self.name
            for pname in re.split(r"\s*,\s*", raw_params):
                pname = pname.strip().strip('"').strip('"')
                if pname:
                    base, _ = os.path.splitext(pname)

                    entry_match = re.match(r'^\[\s*"([^"]+)"\s*\]\s*=\s*"([^"]*)"?$', base)
                    if entry_match:
                        base = "entry"

                    temp_params.append({"name": base, "description": "", "values": []})

        # --- Step 2: parse Markdown block ---
        table_match = False
        for raw in text.splitlines():
            
            line = raw.strip()
            if not line:
                continue
            if line.lower().startswith("none"):
                return
            
            # If no signature params, parse inline param definitions
            if not temp_params:
                param_match = re.match(r"^`([^`]+)`\s*(.*)$", line)
                if param_match:
                    name, desc = param_match.groups()
                    base, _ = os.path.splitext(name.strip())
                    if desc == 'one of:':
                        desc=''
                    else:
                        desc=re.sub(
                            r"---:::caution\s+([\s\S]*?)---:::",
                            r'<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;">\1</div>',
                            desc,
                        )
                        desc = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", desc)

                    lua_entry_match = re.match(r'^\[\s*"([^"]+)"\s*\]\s*=\s*".*"$', name)
                    if lua_entry_match:
                        name = "entry"

                    current_param = {"name": base, "description": desc.strip(), "values": []}
                    temp_params.append(current_param)
                    current_value = None
                    continue
            else:
                if current_param is None and temp_params:
                    current_param = temp_params[-1]

            # Match a possible value: * `Value` - description          
            value_match = re.match(r"^\s*\*\s*`([^`]+)`\s*(?::|[-–—])?\s*(.*)$", line)
            if not value_match and current_param:
                value_match = re.match(r"^\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|?$", line)
                if value_match and table_match == False:
                    table_match = True
                    continue
                elif not value_match:
                    value_match = re.match(r"^\*\s*\*\*([^*]+)\*\*\s*(?::|[-–—])?\s*(.*)$", line)
                

            if value_match and current_param:
                value = self.process_value_match(value_match,current_param["name"])
                if value:
                    current_param["values"].append(value)
            

            # Continuation lines
            if current_value is not None:
                current_value["description"] += " " + line
            elif current_param is not None and table_match == False:
                current_param["description"] += " " + line
            else:
                continue

        table_match = False
        # --- Step 3: finalize into Param objects ---
        for p in temp_params:
            param_obj = Param(p["name"], p["description"])
            for v in p["values"]:
                val_obj = ParamValue(v["name"], v["description"], parent=p["name"])
                param_obj.values.append(val_obj)
            params.append(param_obj)

        return params

    def get(self, name: str) -> Param | None:
        for p in self.params:
            if p.name.lower() == name.lower():
                return p
        return None

    def get_list(self) -> str:
        """
        Return a comma-separated list of all parameter names.
        Example: "visibility, optimization, system"
        """
        if self.params == None:
            return ""
        cleaned_names = []
        for p in self.params:
            name = p.name.strip()
            # Remove surrounding braces if present
            if name.startswith("{") and name.endswith("}"):
                name = name[1:-1].strip()
            cleaned_names.append(name)
        
        return ", ".join(cleaned_names)
    
    def is_valid(self) -> bool:
        """
        Return True if at least one parameter was parsed.
        """

        return self.params != None and len(self.params) > 0
    def __iter__(self):
        return iter(self.params)

    def __repr__(self) -> str:
        return f"<Params {len(self.params)} parameters>"
    
    def convert(self) -> str:
        lines = []
        lines.append("---")
        if self.params == None:
            return ""
        for param in self.params:
            lines.append(param.to_tag(self.name))

        return "\n".join(lines)
    
    def convert_alias(self) -> str:
        lines = []
        if self.params == None:
            return ""
        
        if self.is_valid() == False:
            return "--TODO invalid MARKDOWN"
        
        #first create the aliases
        for param in self.params:
           alias = param.to_alias(self.name)
           if alias != "":
               lines.append("")
               lines.append(alias)
        
        lines.append("")
        return "\n".join(lines)
