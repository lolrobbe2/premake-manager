---@meta

--#region project

---@alias projectArchitecture
---| '"universal"' #The universal binaries supported by iOS and macOS
---| '"x86"'
---| '"x86_64"'
---| '"ARM"'
---| '"ARM64"'
---| '"RISCV64"'
---| '"loongarch64"'
---| '"ppc"'
---| '"ppc64"'
---| '"wasm32"'
---| '"wasm64"'
---| '"e2k"'
---| '"mips64el"'
---| '"armv5"' #Only supported in VSAndroid projects
---| '"armv7"' #Only supported in VSAndroid projects
---| '"aarch64"' #Only supported in VSAndroid projects
---| '"mips"' #Only supported in VSAndroid projects
---| '"mips64"' #Only supported in VSAndroid projects

---<h1><a href="https://premake.github.io/docs/architecture">architecture</a></h1>
---Specifies the system architecture to be targeted by the configuration.
---
---<h2>Example</h2>
---
---@example
--[[
Set up 32- and 64-bit Windows builds.
```lua
workspace "MyWorkspace"
   configurations { "Debug32", "Release32", "Debug64", "Release64" }

   filter "configurations:*32"
      architecture "x86"

   filter "configurations:*64"
      architecture "x86_64"
```
]]
---
---@param arch projectArchitecture
function architecture(arch) end

---@alias cDialect
---| '"Default"' #the default C dialect for the toolset
---| '"C89"' #ISO C89
---| '"C90"' #ISO C90
---| '"C99"' #ISO C99
---| '"C11"' #ISO C11
---| '"C17"' #ISO C17
---| '"C23"' #ISO C23
---| '"gnu89"' #GNU dialect of ISO C89
---| '"gnu90"' #GNU dialect of ISO C90
---| '"gnu99"' #GNU dialect of ISO C99
---| '"gnu11"' #GNU dialect of ISO C11
---| '"gnu17"' #GNU dialect of ISO C17
---| '"gnu23"' #GNU dialect of ISO C23

---<h1><a href="https://premake.github.io/docs/cdialect">cdialect</a></h1>
---cdialect to use for the project
---@param dialect cDialect
function cdialect(dialect) end

---@alias cppDialect
---| '"Default"'      # the default C++ dialect for the toolset
---| '"C++latest"'    # the latest C++ dialect for the toolset or action where available, otherwise the latest C++ dialect supported by Premake
---| '"C++98"'        # ISO C++98
---| '"C++0x"'        # ISO C++11 Draft
---| '"C++11"'        # ISO C++11
---| '"C++1y"'        # ISO C++14 Draft
---| '"C++14"'        # ISO C++14
---| '"C++1z"'        # ISO C++17 Draft
---| '"C++17"'        # ISO C++17
---| '"C++2a"'        # ISO C++20 Draft
---| '"C++20"'        # ISO C++20
---| '"C++2b"'        # ISO C++23 Draft
---| '"C++23"'        # ISO C++23
---| '"gnu++98"'      # GNU dialect of ISO C++98
---| '"gnu++0x"'      # GNU dialect of ISO C++11 Draft
---| '"gnu++11"'      # GNU dialect of ISO C++11
---| '"gnu++1y"'      # GNU dialect of ISO C++14 Draft
---| '"gnu++14"'      # GNU dialect of ISO C++14
---| '"gnu++1z"'      # GNU dialect of ISO C++17 Draft
---| '"gnu++17"'      # GNU dialect of ISO C++17
---| '"gnu++2a"'      # GNU dialect of ISO C++20 Draft
---| '"gnu++20"'      # GNU dialect of ISO C++20
---| '"gnu++2b"'      # GNU dialect of ISO C++23 Draft
---| '"gnu++23"'      # GNU dialect of ISO C++23

---<h1><a href="https://premake.github.io/docs/cppdialect">cppdialect</a></h1>
---cppdialect to use in the project
---@param dialect cppDialect
function cppdialect(dialect) end

---<h1><a href="https://premake.github.io/docs/csversion">csversion</a></h1>
---Specifies the C# language level.
---@param version string
function csversion(version) end

---@alias dotnetframeworkVersion
---| '"1.0"' # .NET Framework 1.0
---| '"1.1"' # .NET Framework 1.1
---| '"2.0"' # .NET Framework 2.0
---| '"3.0"' # .NET Framework 3.0
---| '"3.5"' # .NET Framework 3.5
---| '"4.0"' # .NET Framework 4.0
---| '"4.5"' # .NET Framework 4.5
---| '"4.6"' # .NET Framework 4.6

---<h1><a href="https://premake.github.io/docs/dotnetframework">dotnetframework</a></h1>
---Selects a .NET framework version.
---@param version dotnetframeworkVersion
function dotnetframework(version) end


---@alias dotnetSdk
---| '"Default"'        # the default .NET SDK target
---| '"Web"'            # ASP.NET Core Web SDK
---| '"Razor"'          # Razor SDK
---| '"Worker"'         # Worker Service SDK
---| '"Blazor"'         # Blazor SDK
---| '"WindowsDesktop"' # Windows Desktop SDK
---| '"MSTest"'         # MSTest SDK (requires a version be specified)

---<h1><a href="https://premake.github.io/docs/dotnetsdk">dotnetsdk</a></h1>
---Selects a .NET SDK
---@param sdk dotnetSdk
function dotnetsdk(sdk) end
--#endregion