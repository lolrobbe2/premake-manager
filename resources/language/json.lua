---@meta

json = {}
--#region json.decode


---<h1><a href="https://premake.github.io/docs/json/json.decode">json.decode</a></h1>
---Decodes a JSON string into a table.
---
--[[
```lua
result, err = json.decode("s")
```
]]
---
---
---@param s string is the string to decode.
---@see json.encode
---
function json.decode(s) end

--#endregion json.decode
--#region json.encode


---<h1><a href="https://premake.github.io/docs/json/json.encode">json.encode</a></h1>
---Encodes a table to JSON.
---
--[[
```lua
result, err = json.encode(tbl)
```
]]
---
---
---@param tbl table is the table to encode.
---@see json.decode
---
function json.encode(tbl) end

--#endregion json.encode