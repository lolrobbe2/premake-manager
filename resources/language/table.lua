---@meta

table = {}
--#region table.arraycopy


---<h1><a href="https://premake.github.io/docs/table/table.arraycopy">table.arraycopy</a></h1>
---Make a copy of the indexed elements of the table.
---
--[[
```lua
copy = table.arraycopy(tbl)
```
]]
---
---
---@param tbl table is the table to be copied.
---
---
function table.arraycopy(tbl) end

--#endregion table.arraycopy
--#region table.contains


---<h1><a href="https://premake.github.io/docs/table/table.contains">table.contains</a></h1>
---Determines if an array contains a particular value.
---
--[[
```lua
table.contains(arr, value)
```
]]
---
---
---@param arr any 
---@param value table `arr` is a table containing indexed elements.
---
---
function table.contains(arr, value) end

--#endregion table.contains
--#region table.deepcopy


---<h1><a href="https://premake.github.io/docs/table/table.deepcopy">table.deepcopy</a></h1>
---Make a complete copy of a table, including any child tables it contains.
---
--[[
```lua
copy = table.deepcopy(tbl)
```
]]
---
---
---@param tbl table is the table to be copied.
---
---
function table.deepcopy(tbl) end

--#endregion table.deepcopy
--#region table.extract


---<h1><a href="https://premake.github.io/docs/table/table.extract">table.extract</a></h1>
---Enumerates an array of objects and returns a new table containing only the value of one particular field.
---
---
--[[
```lua
table.extract(arr, "key")
```
]]
---
---
---@param arr any 
---@param key string `arr` is an array of tables.
---
---
function table.extract(arr, key) end

--#endregion table.extract
--#region table.filterempty


---<h1><a href="https://premake.github.io/docs/table/table.filterempty">table.filterempty</a></h1>
---Removes empty strings or nil values from an array, in place.
---
--[[
```lua
table.filterempty(arr)
```
]]
---
---
---@param arr table `arr` is the array of values to be filtered.
---
---
function table.filterempty(arr) end

--#endregion table.filterempty
--#region table.flatten


---<h1><a href="https://premake.github.io/docs/table/table.flatten">table.flatten</a></h1>
---Flattens a hierarchy of arrays into a single array containing all of the values.
---
--[[
```lua
table.flatten(arr)
```
]]
---
---
---@param arr table `arr` is an table containing indexed values, which may themselves also contain indexed values.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns { "A", "B", "C", "D" }
flat = table.flatten { "A", { "B", "C", { "D" } } }
```
]]
function table.flatten(arr) end

--#endregion table.flatten
--#region table.fold


---<h1><a href="https://premake.github.io/docs/table/table.fold">table.fold</a></h1>
---Merge two lists into an array of objects containing pairs of values, one from each list.
---
---
--[[
```lua
table.fold(arr1, arr2)
```
]]
---
---
---@param arr1 any 
---@param arr2 table `arr1` and `arr2` are tables containing indexed values.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns { {"A","X"}, {"B","Y"}, {"C","Z"} }
table.fold({ "A", "B", "C" }, { "X", "Y", "Z" })

-- returns { {"A","X"}, {"B","Y"}, {"C"} }
table.fold({ "A", "B", "C" }, { "X", "Y" })
```
]]
function table.fold(arr1, arr2) end

--#endregion table.fold
--#region table.foreachi


---<h1><a href="https://premake.github.io/docs/table/table.foreachi">table.foreachi</a></h1>
---Walk the elements of an array and call the specified function for each non-nil element.
---
--[[
```lua
table.foreachi(arr, fn)
```
]]
---
---
---@param arr any 
---@param fn table `arr` is an table containing indexed values.
---
---
function table.foreachi(arr, fn) end

--#endregion table.foreachi
--#region table.implode


---<h1><a href="https://premake.github.io/docs/table/table.implode">table.implode</a></h1>
---Merges an array of items into a single, formatted string.
---
--[[
```lua
table.implode(arr, "before", "after", "between")
```
]]
---
---
---@param arr any 
---@param before any 
---@param after any 
---@param between number `arr` is the array to be converted into a string.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns "[A],[B],[C]"
table.implode({ "A", "B", "C"}, "[", "]", ",")
```
]]
function table.implode(arr, before, after, between) end

--#endregion table.implode
--#region table.indexof


---<h1><a href="https://premake.github.io/docs/table/table.indexof">table.indexof</a></h1>
---Returns the key or index of a value within a table.
---
--[[
```lua
table.indexof(arr, value)
```
]]
---
---
---@param arr any 
---@param value table `arr` is a table containing indexed elements.
---
---
function table.indexof(arr, value) end

--#endregion table.indexof
--#region table.insertafter


---<h1><a href="https://premake.github.io/docs/table/table.insertafter">table.insertafter</a></h1>
---Insert a new value into a table at the index after the specified existing value. If the specified value does not exist in the table, the new value is appended to the end of the table.
---
---
--[[
```lua
table.insertafter(arr, after, value)
```
]]
---
---
---@param arr any 
---@param after any 
---@param value table `arr` is a table containing indexed elements.
---
---
function table.insertafter(arr, after, value) end

--#endregion table.insertafter
--#region table.insertflat


---<h1><a href="https://premake.github.io/docs/table/table.insertflat">table.insertflat</a></h1>
---Inserts a value of array of values into a table. If the value is itself a table, its contents are enumerated and added instead.
---
--[[
```lua
table.insertflat(arr, values)
```
]]
---
---
---@param arr any 
---@param values table `arr` is a table containing indexed elements.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns { "x", "y" }
table.insertflat({ "x" }, "y")

-- returns { "x", "y", "z" }
table.insertflat({ "x" }, { "y", { "z" } })
```
]]
function table.insertflat(arr, values) end

--#endregion table.insertflat
--#region table.isempty


---<h1><a href="https://premake.github.io/docs/table/table.isempty">table.isempty</a></h1>
---Returns true if the table is empty, and contains no indexed or keyed values.
---
---
--[[
```lua
table.isempty(tbl)
```
]]
---
---
---@param tbl table `tbl` is the table to be tested.
---
---
function table.isempty(tbl) end

--#endregion table.isempty
--#region table.join


---<h1><a href="https://premake.github.io/docs/table/table.join">table.join</a></h1>
---Adds the values from one array to the end of another and returns the result.
---
---
--[[
```lua
table.join(arr1, arr2, ...)
```
]]
---
---
---@param table table `arr1` contains the elements to be placed at the front of the result, followed by the elements of `arr2` and so on.
---@see table.merge
---
function table.join(table) end

--#endregion table.join
--#region table.keys


---<h1><a href="https://premake.github.io/docs/table/table.keys">table.keys</a></h1>
---Return an array of all keys used in a table.
---
--[[
```lua
table.keys(tbl)
```
]]
---
---
---@param tbl table `tbl` is the table to be enumerated.
---
---
function table.keys(tbl) end

--#endregion table.keys
--#region table.merge


---<h1><a href="https://premake.github.io/docs/table/table.merge">table.merge</a></h1>
---Adds the key-value associations from one table into another and returns the resulting merged table.
---
--[[
```lua
table.merge(tbl1, tbl2, ...)
```
]]
---
---
---@param table table One or more tables to be merged.
---@see table.join
---
function table.merge(table) end

--#endregion table.merge
--#region table.replace


---<h1><a href="https://premake.github.io/docs/table/table.replace">table.replace</a></h1>
---Replace all instances of `value` with `replacement` in an array. Array elements are modified in place.
---
--[[
```lua
table.replace(tbl, value, replacement)
```
]]
---
---
---@param tbl any 
---@param value any 
---@param replacement table `tbl` is the table to be modified.
---
---
function table.replace(tbl, value, replacement) end

--#endregion table.replace
--#region table.tostring


---<h1><a href="https://premake.github.io/docs/table/table.tostring">table.tostring</a></h1>
---Converts the contents of a table to a formatted string.
---
--[[
```lua
table.tostring(tbl, recurse)
```
]]
---
---
---@param tbl any 
---@param recurse number - `tbl` is the table to be formatted.
---
---
function table.tostring(tbl, recurse) end

--#endregion table.tostring
--#region table.translate


---<h1><a href="https://premake.github.io/docs/table/table.translate">table.translate</a></h1>
---Translates the values contained in array, using the specified translation table, and returns the results in a new array.
---
--[[
```lua
table.translate(arr, translation)
```
]]
---
---
---@param arr any 
---@param translation table `arr` is the array of values to be translated.
---
---<h2>examples</h2>
---
--[[
```lua
-- returns { "X", "Y" }
table.translate({ "A", "B", "C"}, { A = "X", C = "Y"})

-- returns { 2, 3, 4 }
table.translate({ 1, 2, 3}, function(value) return value + 1 end)
```
]]
function table.translate(arr, translation) end

--#endregion table.translate