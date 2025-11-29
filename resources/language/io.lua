---@meta
--#region io

---@class PremakeIoAPI
---
---class containing IO helper methods
---@see io.readfile
---@see io.utf8
---@see io.writefile
io={}
_G.io = io


---<h1><a href="https://premake.github.io/docs/io.readfile">io.readfile</a></h1>
---read a file's contents as a string.
---
--[[
```lua
io.readfile(filename)
```
]]
---
---get the individual file lines using string.explode
---@param filename string a path to a filename.
function io.readfile(filename) end

---<h1><a href="https://premake.github.io/docs/io.utf8">io.utf8</a></h1>
---Output a UTF-8 encoding sequence ('\239\187\191') to the current output stream.
function io.utf8() end

---<h1><a href="https://premake.github.io/docs/io.writefile">io.writefile</a></h1>
---
---write `content` to the file at `filename`, which may or may not exist.
--[[
```lua
io.writefile(filename, content)
```
]]
---
---@param filename string string name of a file which need not exist.
---@param content string string containing data to put in `filename`.
function io.writefile(filename, content) end
--#endregion
