import re

class SeeTag:
    """
    Converts a single Markdown link into a Lua @see tag.
    """

    def __init__(self, text: str) -> None:
        self.text = text

    def convert(self) -> str:
        """
        Return a single @see tag for the Markdown link.
        """
        match = re.search(r"\[([^\]]+)\]\([^)]+\)", self.text)
        return f"---@see {match.group(1)}" if match else ""
