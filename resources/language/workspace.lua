---@meta
---<h1><a href="https://premake.github.io/docs/Workspaces-and-Projects/#workspaces">workspace</a></h1>
---Workspaces define a common set of build configurations and platforms to be used across all of the contained projects. You may also specify additional build settings (defines, include paths, etc.) at this level which will be similarly inherited by the projects.
---
---<h2>Example</h2>
---
---@param name string is a unique name for the workspace. If a workspace with the given name already exists, it is made active and returned.
---@example
--[[
```lua
workspace "MyWorkspace"
```
]] function workspace(name) end

---@alias PremakeConfiguration string | "Debug" | "Release"
-- | "Debug" #debug configuration
-- | "Release" #release configuration

---<h1><a href="https://premake.github.io/docs/Configurations-and-Platforms/#platforms">configurations</a></h1>
---A configuration is a collection of settings to apply to a build, including flags and switches, header file and library search directories, and more. 
---Each workspace defines its own list of configuration names; 
---the default provided by most IDEs is "Debug" and "Release".
---
---<h2>Example</h2>
---
---@param configurations PremakeConfiguration[]
---@example
--[[
```lua
workspace "MyWorkspace"
    configurations { "Debug", "Release" }
```
]]
function configurations(configurations) end

