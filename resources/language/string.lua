---@meta

string = {}
--#region string.capitalized


---<h1><a href="https://premake.github.io/docs/string/string.capitalized">string.capitalized</a></h1>
---Capitalizes the first letter of a string.
---
--[[
```lua
s = string.capitalized("s")
```
]]
---
---
---@param s string is the string value to be capitalized.
---
---
function string.capitalized(s) end

--#endregion string.capitalized
--#region string.contains


---<h1><a href="https://premake.github.io/docs/string/string.contains">string.contains</a></h1>
---Returns true if the string contains the specified substring.
---
--[[
```lua
string.contains("haystack", "needle")
```
]]
---
---
---@param list string `haystack` is the string to be tested.
---
---
function string.contains(list) end

--#endregion string.contains
--#region string.endswith


---<h1><a href="https://premake.github.io/docs/string/string.endswith">string.endswith</a></h1>
---Returns true if the given string ends with the provided sequence.
---
--[[
```lua
string.endswith("haystack", "needle")
```
]]
---
---
---@param list string `haystack` is the string to check.
---@see string.startswith
---
function string.endswith(list) end

--#endregion string.endswith
--#region string.escapepattern


---<h1><a href="https://premake.github.io/docs/string/string.escapepattern">string.escapepattern</a></h1>
---Escapes the string for use in Lua patterns. Escapes the following characters `( ) . % + - * ? [ ] ^ $` with `%`.
---
--[[
```lua
escaped = string.escapepattern("s")
```
]]
---
---
---@param s string is the string to escape.
---
---<h2>examples</h2>
---
--[[
```lua
local match = filename:match(string.escapepattern("boost_filesystem-vc140.1.61.0.0"))
```
]]
function string.escapepattern(s) end

--#endregion string.escapepattern
--#region string.explode


---<h1><a href="https://premake.github.io/docs/string/string.explode">string.explode</a></h1>
---Returns an array of strings, each of which is a substring formed by splitting on the provided pattern.
---
--[[
```lua
parts = string.explode("str", "pattern")
```
]]
---
---
---@param str string is the string to be split.
---@see string.startswith
---<h2>examples</h2>
---
--[[
```lua
e = "a\nmulti\nline\nstring\n"
> for k,v in next, string.explode(e, "\n") do print(k, v) end
1	a
2	multi
3	line
4	string
5
```
]]
function string.explode(str) end

--#endregion string.explode
--#region string.findlast


---<h1><a href="https://premake.github.io/docs/string/string.findlast">string.findlast</a></h1>
---Finds the last instance of a pattern within a string.
---
--[[
```lua
string.findlast("str", "pattern", plain)
```
]]
---
---
---@param str any 
---@param pattern any 
---@param plain string `str` is the string to be searched.
---
---
function string.findlast(str, pattern, plain) end

--#endregion string.findlast
--#region string.hash


---<h1><a href="https://premake.github.io/docs/string/string.hash">string.hash</a></h1>
---Returns a DBJ2 hash of a string value.
---
--[[
```lua
string.hash("value")
```
]]
---
---
---@param value string `value` is the string value to be hashed.
---@see string.sha1
---
function string.hash(value) end

--#endregion string.hash
--#region string.lines


---<h1><a href="https://premake.github.io/docs/string/string.lines">string.lines</a></h1>
---Returns the number of lines of text contained by the string.
---
--[[
```lua
string.lines("str")
```
]]
---
---
---@param str string `str` is the string to be tested.
---
---
function string.lines(str) end

--#endregion string.lines
--#region string.plural


---<h1><a href="https://premake.github.io/docs/string/string.plural">string.plural</a></h1>
---Returns a plural version of the provided string.
---
--[[
```lua
pl = string.plural("str")
```
]]
---
---
---@param str string is the string to be made plural.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns "projects"
pl = string.plural("project")

-- returns "stories"
pl = string.plural("story")
```
]]
function string.plural(str) end

--#endregion string.plural
--#region string.sha1


---<h1><a href="https://premake.github.io/docs/string/string.sha1">string.sha1</a></h1>
---Returns a SHA-1 hash of a string value.
---
--[[
```lua
string.sha1("value")
```
]]
---
---
---@param value string `value` is the string value to be hashed.
---@see string.hash
---
function string.sha1(value) end

--#endregion string.sha1
--#region string.startswith


---<h1><a href="https://premake.github.io/docs/string/string.startswith">string.startswith</a></h1>
---Returns true if the given string starts with the provided sequence.
---
--[[
```lua
string.startswith("haystack", "needle")
```
]]
---
---
---@param list string `haystack` is the string to check.
---@see string.endswith
---
function string.startswith(list) end

--#endregion string.startswith