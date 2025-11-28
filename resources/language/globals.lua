---@meta
---<h1><a href="https://premake.github.io/docs/globals/_ARGS">_ACTION</a></h1>
---
---The `_ACTION` global variable stores the name of the action to be performed on this execution run.
---As an example, if this command line was used to launch Premake:
---
---`$premake5 vs2022`
---
---<h2>Example</h2>
---
---@type string
---@example
--[[
```lua
if _ACTION = "vs2022" then
    ---do something
end
```
]] _ACTION = "_ACTION"

---<h1><a href="https://premake.github.io/docs/globals/_ARGS">_ARGS</a></h1>
---
---The `_ARGS` global variable stores any arguments to the current action.
---As an example, if this command line was used to launch Premake:
---
---`$ premake5 vs2012 alpha beta`
---
---...then `_ARGS[1]` will be set to "alpha" and `_ARGS[2]` to "beta". If there are no arguments this array will be empty.
---
---<h2>Example</h2>
---
---@type table<number, string>
---@example
--[[
```lua
if _ARGS[1] == "alpha" then
    --do something
end
```
]]
_ARGS = {[1] = "_ARGS"}

---<h1><a href="https://premake.github.io/docs/globals/_OPTIONS">_OPTIONS</a></h1>
---
---The `_OPTIONS` global variable lists the current set of command line options and their values, if any. For more information, see [Command Line Arguments](https://premake.github.io/docs/Command-Line-Arguments).
---
---<h2>Example</h2>
---
---@type table<string, string>
---@example
--[[
```lua
-- use an option value in a configuration
targetdir(_OPTIONS["outdir"] or "out")
```
]]
_OPTIONS = {["OUTDIR"] = "dir"}
