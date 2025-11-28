---@meta

---Filters are always made up of two parts: a prefix that specifies which field is being filtered against, and a pattern that specifies which values of that field should be accepted.
---
---<h2>Example</h2>
---
---@example
--[[
```lua
"configurations:Debug"
```
]]
---@alias PremakeFilter string

---<h1><a href="https://premake.github.io/docs/Filters">filter</a></h1>
---
---Premake's filter system allows you target build settings to the exact configurations in which you want them to appear.
---You can filter by specific build configurations or platforms, operating system, target actions, and more.
---@param filter PremakeFilter
---
---<h2>Example</h2>
---
---@example
--[[
```lua
filter "configurations:Debug"
    defines { "DEBUG" }
```
]]
function filter(filter) end
