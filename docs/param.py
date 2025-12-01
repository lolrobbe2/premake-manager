import re
from typing import List


class ParamValue:
    def __init__(self, name: str, description: str, parent: str) -> None:
        self.name = name
        self.description = description
        self.parent = parent

    def to_alias_entry(self) -> str:
        return f"---| '\"{self.name}\"' # {self.description}"

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
        }
    def to_alias(self) -> str:
        """Generate a full alias block for all values of this parameter."""
        if not self.values:
            return ""
        lines = [f"---@alias {self.name}Types"]
        for val in self.values:
            lines.append(val.to_alias_entry())
        return "\n".join(lines)

    def to_tag(self) -> str:
        """generate a full param tag"""
        if not self.values:
            return f"---@param {self.name} {self.get_type()} {self.description}"
        else:
            return f"---@param {self.name} {self.get_type()} {self.description}"
    def __repr__(self) -> str:
        return f"<Param {self.name}: {len(self.values)} values>"

    def get_type(self) -> str:
        """
        Determine the type of this parameter.
        - If it has values, return the alias name (e.g. 'visibilityTypes').
        - Otherwise, infer from description keywords.
        """
        if self.values:
            return f"{self.name}Types"

        desc_lower = self.description.lower()
        for keyword, inferred in self.TYPE_KEYWORDS.items():
            if keyword in desc_lower:
                return inferred

        return "any"  # fallback if no keyword matched

class Params:
    def __init__(self, text: str) -> None:
        """
        Parse the Markdown 'Parameters' region into Param objects.
        :param text: Markdown body text containing parameters and values
        """
        self.text = text
        self.params: List[Param] = self._parse(text)

    def _parse(self, text: str) -> List[Param]:
        params: List[Param] = []
        current_param: Param | None = None
        current_value: ParamValue | None = None

        for raw in text.splitlines():
            line = raw.strip()
            if not line:
                continue

            # Match a parameter definition: `param` description
            param_match = re.match(r"^`([^`]+)`\s*(.*)$", line)
            if param_match:
                name, desc = param_match.groups()
                current_param = Param(name.strip(), desc.strip())
                params.append(current_param)
                current_value = None  # reset value context
                continue

            # Match a possible value: * `Value` - description
            value_match = re.match(r"^\*\s*`([^`]+)`\s*[-–]\s*(.*)$", line)
            if value_match and current_param:
                val_name, val_desc = value_match.groups()
                current_value = ParamValue(val_name.strip(), val_desc.strip(), parent=current_param.name)
                current_param.values.append(current_value)
                continue

            # If no match, treat as continuation of description
            if current_value is not None:
                # Append to the last value description
                current_value.description += " " + line
            elif current_param is not None:
                # Append to the parameter description
                current_param.description += " " + line

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
        return ", ".join(p.name for p in self.params)
    
    def is_valid(self) -> bool:
        """
        Return True if at least one parameter was parsed.
        """
        return len(self.params) > 0
    def __iter__(self):
        return iter(self.params)

    def __repr__(self) -> str:
        return f"<Params {len(self.params)} parameters>"
    
    def convert() -> str:
        return ""
