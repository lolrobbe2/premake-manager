from markconv import markconv
from premakedocs import PremakeDocs

print("starting")

def main():
    # Default repo is premake-core
    with PremakeDocs() as docs:
        for path, group, content in docs:
            conv = markconv(path, group, content)
            print(f"converting: {conv.get_name()}")
            print(f"signature: {conv.get_signature()}")

if __name__ == "__main__":
    main()
