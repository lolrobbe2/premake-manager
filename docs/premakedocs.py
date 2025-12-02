import os
import shutil
import subprocess
import tempfile
from typing import Iterator, Tuple


class PremakeDocs:
    """
    Context manager + iterator for Premake documentation files.
    - Clones the repo into a temporary directory
    - Iterates over Markdown docs
    - Cleans up (removes the repo) when done
    """

    def __init__(
        self,
        repo_url: str = "https://github.com/premake/premake-core.git",
        docs_subdir: str = "website\\docs",
        ext: str = ".md",
    ) -> None:
        self.repo_url = repo_url
        self.docs_subdir = docs_subdir
        self.ext = ext
        self.tempdir = tempfile.mkdtemp(prefix="premake_repo_")
        self.repo_dir = os.path.join(self.tempdir, "premake-core")
        self.docs_dir = os.path.join(self.repo_dir, docs_subdir)

    def __enter__(self):
        # Clone into tempdir
        print(f"Cloning {self.repo_url} into {self.repo_dir}...")
        subprocess.run(
            ["git", "clone", "--depth=1", self.repo_url, self.repo_dir], check=True
        )
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Cleanup
        print(f"Removing {self.tempdir}...")
        shutil.rmtree(self.tempdir, ignore_errors=True)

    def __iter__(self) -> Iterator[Tuple[str, str, str]]:
        """
        Iterate over docs and yield (path, directory, content).
        - path: full file path
        - directory: relative directory under docs_dir (used as group/filename)
        - content: file contents
        """
        for dirpath, _, filenames in os.walk(self.docs_dir):
            for fname in filenames:
                hascapital = any(char.isupper() for char in fname)
                if fname.endswith(self.ext) and hascapital == False:
                    fullpath = os.path.join(dirpath, fname)
                    # derive relative directory name (group)
                    rel_dir = os.path.relpath(dirpath, self.docs_dir)
                    with open(fullpath, encoding="utf-8") as f:
                        yield fullpath, rel_dir, f.read()

    def list_files(self) -> list[str]:
        """Return all matching file paths without reading contents."""
        files = []
        for dirpath, _, filenames in os.walk(self.docs_dir):
            for fname in filenames:
                if fname.endswith(self.ext):
                    files.append(os.path.join(dirpath, fname))
        return files
