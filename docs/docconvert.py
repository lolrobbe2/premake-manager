from classconv import classconv
from markconv import MarkConv
from premakedocs import PremakeDocs
import os
import shutil

print("starting")

def main():
    # Default repo is premake-core
    files={}
    #shutil.rmtree("res")
    #convert all the different groups
    with PremakeDocs() as docs:
        current_group= None
        current_functions=[]
        for path, group, content in docs:
            if current_group == None:
                current_group = group
                current_functions.append("---@meta\n")
            if current_group != group:
                files[current_group]="\n".join(current_functions)
                current_functions=[]
                current_functions.append("---@meta\n")
                current_group = group
                if current_group != '.':
                    current_functions.append(f"{group.split("/")[-1]} = {{}}")
            conv = None
            if "-" in os.path.basename(path):
                conv = classconv(path, group, content)
            else:
                conv = MarkConv(path, group, content)
            print(f"converting: {conv.get_name()}")
            current_functions.append(conv.convert())

            
    for group, text in files.items():
        if group == ".":
            group = "root"
        filename = f"res/{group}.lua"
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        with open(filename, "w", encoding="utf-8") as f:
            f.write(text)

if __name__ == "__main__":
    main()
