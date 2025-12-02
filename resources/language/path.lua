---@meta

path = {}
--#region path.getabsolute


---<h1><a href="https://premake.github.io/docs/path/path.getabsolute">path.getabsolute</a></h1>
---Converts a relative path to an absolute path.
---
--[[
```lua
p = path.getabsolute("path", "relativeTo")
```
]]
---
---
---@param path string is the relative path to be converted.
---@see path.isabsolute
---
function path.getabsolute(path) end

--#endregion path.getabsolute
--#region path.getbasename


---<h1><a href="https://premake.github.io/docs/path/path.getbasename">path.getbasename</a></h1>
---Returns the base file portion of a path, with the directory and file extension removed.
---
--[[
```lua
p = path.getbasename("path")
```
]]
---
---
---@param path string is the file system path to be split.
---@see path.getdirectory
---@see path.getdrive
---@see path.extension
---@see path.getname
---
function path.getbasename(path) end

--#endregion path.getbasename
--#region path.getdirectory


---<h1><a href="https://premake.github.io/docs/path/path.getdirectory">path.getdirectory</a></h1>
---Returns the directory portion of a path, with any file name removed.
---
--[[
```lua
p = path.getdirectory("path")
```
]]
---
---
---@param path string is the file system path to be split.
---@see path.getbasename
---@see path.getdrive
---@see path.extension
---@see path.getname
---
function path.getdirectory(path) end

--#endregion path.getdirectory
--#region path.getdrive


---<h1><a href="https://premake.github.io/docs/path/path.getdrive">path.getdrive</a></h1>
---Returns the drive letter portion of a path, if present.
---
--[[
```lua
p = path.getdrive("path")
```
]]
---
---
---@param path string is the file system path to be split.
---@see path.getbasename
---@see path.getdirectory
---@see path.extension
---@see path.getname
---
function path.getdrive(path) end

--#endregion path.getdrive
--#region path.getextension


---<h1><a href="https://premake.github.io/docs/path/path.getextension">path.getextension</a></h1>
---Returns the file extension portion of a path.
---
--[[
```lua
p = path.getextension("path")
```
]]
---
---
---@param path string is the file system path to be split.
---@see path.getbasename
---@see path.getdirectory
---@see path.getdrive
---@see path.getname
---
function path.getextension(path) end

--#endregion path.getextension
--#region path.getname


---<h1><a href="https://premake.github.io/docs/path/path.getname">path.getname</a></h1>
---Returns the file name and extension, with any directory information removed.
---
--[[
```lua
p = path.getname("path")
```
]]
---
---
---@param path string is the file system path to be split.
---@see path.getbasename
---@see path.getdirectory
---@see path.getdrive
---@see path.getextension
---
function path.getname(path) end

--#endregion path.getname
--#region path.getrelative


---<h1><a href="https://premake.github.io/docs/path/path.getrelative">path.getrelative</a></h1>
---The <strong>path.getrelative</strong> function computes a relative path from one directory to another.
---
--[[
```lua
p = path.getrelative("src", "dest")
```
]]
---
---
---@param src string is the originating directory, `dest` is the target directory.
---
---
function path.getrelative(src) end

--#endregion path.getrelative
--#region path.hasextension


---<h1><a href="https://premake.github.io/docs/path/path.hasextension">path.hasextension</a></h1>
---Returns true if a file system path has the given file extension.
---
--[[
```lua
path.hasextension("path", "ext")
```
]]
---
---
---@param list string `path` is the file system path to be tested.
---@see path.getextension
---@see path.iscfile
---@see path.iscppfile
---@see path.iscppheader
---@see path.isframework
---@see path.islinkable
---@see path.isobjectfile
---@see path.isresourcefile
---
function path.hasextension(list) end

--#endregion path.hasextension
--#region path.isabsolute


---<h1><a href="https://premake.github.io/docs/path/path.isabsolute">path.isabsolute</a></h1>
---Determines if a given file system path is absolute.
---
--[[
```lua
path.isabsolute("path")
```
]]
---
---
---@param path string `path` is the file system path to check.
---@see path.getabsolute
---@see path.getrelative
---
function path.isabsolute(path) end

--#endregion path.isabsolute
--#region path.iscfile


---<h1><a href="https://premake.github.io/docs/path/path.iscfile">path.iscfile</a></h1>
---Returns true if the specified path represents a C source code file, based on its file extension.
---
--[[
```lua
path.iscfile("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscppfile
---@see path.iscppheader
---@see path.isframework
---@see path.islinkable
---@see path.isobjectfile
---@see path.isresourcefile
---
function path.iscfile(path) end

--#endregion path.iscfile
--#region path.iscppfile


---<h1><a href="https://premake.github.io/docs/path/path.iscppfile">path.iscppfile</a></h1>
---Returns true if the specified path represents a C++ source code file, based on its file extension.
---
--[[
```lua
path.iscppfile("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscfile
---@see path.iscppheader
---@see path.isframework
---@see path.islinkable
---@see path.isobjectfile
---@see path.isresourcefile
---
function path.iscppfile(path) end

--#endregion path.iscppfile
--#region path.iscppheader


---<h1><a href="https://premake.github.io/docs/path/path.iscppheader">path.iscppheader</a></h1>
---Returns true if the specified path represents a C++ header file, based on its file extension.
---
--[[
```lua
path.iscppheader("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscfile
---@see path.iscppfile
---@see path.isframework
---@see path.isobjectfile
---@see path.isresourcefile
---
function path.iscppheader(path) end

--#endregion path.iscppheader
--#region path.isframework


---<h1><a href="https://premake.github.io/docs/path/path.isframework">path.isframework</a></h1>
---Returns true if the specified path represents a Cocoa framework bundle, based on its file extension.
---
--[[
```lua
path.isframework("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscfile
---@see path.iscppfile
---@see path.iscppheader
---@see path.islinkable
---@see path.isobjectfile
---@see path.isresourcefile
---
function path.isframework(path) end

--#endregion path.isframework
--#region path.islinkable


---<h1><a href="https://premake.github.io/docs/path/path.islinkable">path.islinkable</a></h1>
---Returns true if the specified path represents a file that can be linked against, based on its file extension.
---
--[[
```lua
path.islinkable("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscfile
---@see path.iscppfile
---@see path.iscppheader
---@see path.isframework
---@see path.isobjectfile
---@see path.isresourcefile
---
function path.islinkable(path) end

--#endregion path.islinkable
--#region path.isobjectfile


---<h1><a href="https://premake.github.io/docs/path/path.isobjectfile">path.isobjectfile</a></h1>
---Returns true if the specified path represents an object file, based on its file extension.
---
--[[
```lua
path.isobjectfile("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscfile
---@see path.iscppfile
---@see path.iscppheader
---@see path.isframework
---@see path.islinkable
---@see path.isresourcefile
---
function path.isobjectfile(path) end

--#endregion path.isobjectfile
--#region path.isresourcefile


---<h1><a href="https://premake.github.io/docs/path/path.isresourcefile">path.isresourcefile</a></h1>
---Returns true if the specified path represents a Windows resource file, based on its file extension.
---
--[[
```lua
path.isresourcefile("path")
```
]]
---
---
---@param path string `path` is the file system path to be tested.
---@see path.getextension
---@see path.hasextension
---@see path.iscfile
---@see path.iscppfile
---@see path.iscppheader
---@see path.isframework
---@see path.islinkable
---@see path.isobjectfile
---
function path.isresourcefile(path) end

--#endregion path.isresourcefile
--#region path.join


---<h1><a href="https://premake.github.io/docs/path/path.join">path.join</a></h1>
---Joins two path portions together into a single path.
---
--[[
```lua
path.join("leading", "trailing", ...)
```
]]
---
---If trailing is an absolute path, then the leading portion is ignored, and the absolute path is returned instead (see below for examples).
---
---
---@param table string `leading` is the beginning portion of the path; `trailing` is a portion to be merged.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns "MyWorkspace/MyProject"
p = path.join("MyWorkspace", "MyProject")

-- returns "/usr/bin", because the trailing path is absolute
p = path.join("MyWorkspace", "/usr/bin")

-- tokens are assumed to be absolute; this returns "$(ProjectDir)"
p = path.join("MyWorkspace", "$(ProjectDir)")
```
]]
function path.join(table) end

--#endregion path.join
--#region path.normalize


---<h1><a href="https://premake.github.io/docs/path/path.normalize">path.normalize</a></h1>
---Tries to create a clean file system representation of a path.
---
--[[
```lua
path.normalize("path")
```
]]
---
---Normalization includes removing duplicate and trailing slashes, leading "./" sequences, and filtering out "../" sequences where possible.
---
---
---@param path string `path` is the path to be normalized.
---
---
function path.normalize(path) end

--#endregion path.normalize
--#region path.rebase


---<h1><a href="https://premake.github.io/docs/path/path.rebase">path.rebase</a></h1>
---Takes a path which is relative to one location and makes it relative to another location instead.
---
--[[
```lua
path.rebase("relative_path", "old_base", "new_base")
```
]]
---
---
---@param list string `relative_path` is a file system path, specified relative to `old_base`, which is to be rebased.
---@see path.getabsolute
---@see path.getrelative
---
function path.rebase(list) end

--#endregion path.rebase
--#region path.replaceextension


---<h1><a href="https://premake.github.io/docs/path/path.replaceextension">path.replaceextension</a></h1>
---Replace the file extension.
---
--[[
```lua
path.replaceextension("path", "new_extension")
```
]]
---
---
---@param list string `path` is the file system path on which the extension should be replaced.
---@see path.getextension
---@see path.hasextension
---
function path.replaceextension(list) end

--#endregion path.replaceextension
--#region path.translate


---<h1><a href="https://premake.github.io/docs/path/path.translate">path.translate</a></h1>
---Converts the file separators in a path.
---
--[[
```lua
path.translate("path", "newsep")
```
]]
---
---
---@param list string `path` is the file system path to translate; `newsep` is the new path separator.
---
---
function path.translate(list) end

--#endregion path.translate
--#region path.wildcards


---<h1><a href="https://premake.github.io/docs/path/path.wildcards">path.wildcards</a></h1>
---Converts from Premake's simple wildcard syntax to a corresponding Lua pattern.
---
--[[
```lua
p = path.wildcards("pattern")
```
]]
---
---
---@param pattern string is a file system path which may contain one more `\*` (shallow match) or `\*\*` (recursive match) sequences.
---@see os.matchdirs
---@see os.matchfiles
---
function path.wildcards(pattern) end

--#endregion path.wildcards