import re
from typing import List

from seetag import SeeTag

class SeeTagConv:
    """
    Converts a line of Markdown links into multiple SeeTag instances.
    """

    def __init__(self, text: str) -> None:
        self.text = text
        self.see_tags: List[SeeTag] = self._split_links()

    def _split_links(self) -> List[SeeTag]:
        """
        Split the input text into individual Markdown links and wrap them as SeeTag instances.
        """
        # Matches all [name](link) entries
        links = re.findall(r"\[[^\]]+\]\([^)]+\)", self.text)
        return [SeeTag(link) for link in links if " " not in link and not link[0].isupper()]

    def convert_all(self) -> List[str]:
        """
        Convert all SeeTag instances into @see strings.
        """
      
        return [tag.convert() for tag in self.see_tags]

    def as_string(self, separator: str = " ") -> str:
        """
        Return all @see tags as a single string separated by the given separator.
        """
        if len(self.see_tags)==0:
            return "---"
        return separator.join(self.convert_all())