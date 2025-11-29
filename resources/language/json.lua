---@meta
--#region json

---@class PremakeJsonAPI
---
---class containing json helper methods
---@see json.decode
---@see json.encode
json={}
_G.json = json

---<h1><a href="https://premake.github.io/docs/json/json.decode">json.decode</a></h1>
---Decodes a JSON string into a table.
---@param s string is the string to decode.
---@return table result is the resulting table, or `nil` on failure
---@return string | nil err is the error message if there is one available, always set to `nil` on success
function json.decode(s) end

---<h1><a href="json.encode">json.encode</a></h1>
---Encodes a table to JSON.
---@param tbl table is the table to encode
---@return string result is the resulting string, or `nil` on failure
---@return string | nil err is the error message if there is one available, always set to `nil` on success
function json.encode(tbl) end
--#endregion