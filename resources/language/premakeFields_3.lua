---Selects the compiler, linker, etc.
---
---[docs](https://premake.github.io/docs/toolset/)
---
---@param value string
local function toolset(value) end
_G.toolset=toolset

---Selects the tools version which is used to build a project.
---
---[docs](https://premake.github.io/docs/toolsversion/)
---
---@param value string
local function toolsversion(value) end
_G.toolsversion=toolsversion

---Removes preprocessor or compiler symbols from a project.
---
---[docs](https://premake.github.io/docs/undefines/)
---
---@param value string[]
local function undefines(value) end
_G.undefines=undefines

---Force sign of `char`
---
---[docs](https://premake.github.io/docs/unsignedchar/)
---
---@param value Boolean
local function unsignedchar(value) end
_G.unsignedchar=unsignedchar

---Turn on/off full paths usage in diagnostics
---
---[docs](https://premake.github.io/docs/usefullpaths/)
---
---@param value Boolean
local function usefullpaths(value) end
_G.usefullpaths=usefullpaths

---Specifies which usage blocks a project should consume.
---
---[docs](https://premake.github.io/docs/uses/)
---
---@param value string[]
local function uses(value) end
_G.uses=uses

---@alias usestandardpreprocessorAllowed
---| "On"
---| "Off"
---| "Off"
---| "On"


---Enables a token-based preprocessor conforming to C99, C++11, and later standards.
---
---[docs](https://premake.github.io/docs/usestandardpreprocessor/)
---
---@param value usestandardpreprocessorAllowed
local function usestandardpreprocessor(value) end
_G.usestandardpreprocessor=usestandardpreprocessor

---Specifies the file search paths for `using` statements.
---
---[docs](https://premake.github.io/docs/usingdirs/)
---
---@param value string[]
local function usingdirs(value) end
_G.usingdirs=usingdirs

---Sets the [Universally Unique Identifier](http://en.wikipedia.org/wiki/UUID) (UUID) for a project.
---
---[docs](https://premake.github.io/docs/uuid/)
---
---@param value string
local function uuid(value) end
_G.uuid=uuid

---@alias vectorextensionsAllowed
---| "Default"
---| "AVX"
---| "AVX2"
---| "IA32"
---| "SSE"
---| "SSE2"
---| "SSE3"
---| "SSSE3"
---| "SSE4.1"
---| "SSE4.2"
---| "ALTIVEC"
---| "NEON"
---| "MXU"
---| "SSE2"
---| "Default"
---| "SSE3"
---| "SSSE3"
---| "IA32"
---| "SSE"
---| "SSE4.1"
---| "ALTIVEC"
---| "MXU"
---| "NEON"
---| "SSE4.2"
---| "AVX"
---| "AVX2"


---Specifies the level of vector processing extensions to enable while compiling the target configuration.
---
---[docs](https://premake.github.io/docs/vectorextensions/)
---
---@param value vectorextensionsAllowed
local function vectorextensions(value) end
_G.vectorextensions=vectorextensions

---@alias visibilityAllowed
---| "Default"
---| "Hidden"
---| "Internal"
---| "Protected"
---| "Protected"
---| "Internal"
---| "Hidden"
---| "Default"


---Sets the default visibility for exported symbols in a shared object library.
---
---[docs](https://premake.github.io/docs/visibility/)
---
---@param value visibilityAllowed
local function visibility(value) end
_G.visibility=visibility

---Places files into groups or "virtual paths", rather than the default behavior of mirroring the filesystem in IDE-based projects.
---
---[docs](https://premake.github.io/docs/vpaths/)
---
---@param value [string] string[]
local function vpaths(value) end
_G.vpaths=vpaths

---Add any property to your visual studio projectThis allows you to set properties that premake does not support without extending it
---
---[docs](https://premake.github.io/docs/vsprops/)
---
---@param value table[]
local function vsprops(value) end
_G.vsprops=vsprops

---@alias warningsAllowed
---| "Off"
---| "Default"
---| "High"
---| "Extra"
---| "Everything"
---| "Off"
---| "Default"
---| "High"
---| "Extra"
---| "Everything"


---Controls the level of warnings that are shown by the compiler.
---
---[docs](https://premake.github.io/docs/warnings/)
---
---@param value warningsAllowed
local function warnings(value) end
_G.warnings=warnings

---xcodebuildresources
---
---[docs](https://premake.github.io/docs/xcodebuildresources/)
---
---@param value string[]
local function xcodebuildresources(value) end
_G.xcodebuildresources=xcodebuildresources

---xcodebuildsettings
---
---[docs](https://premake.github.io/docs/xcodebuildsettings/)
---
---@param value string
local function xcodebuildsettings(value) end
_G.xcodebuildsettings=xcodebuildsettings

---xcodecodesigningidentity - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/xcodecodesigningidentity/)
---
---@param value string
local function xcodecodesigningidentity(value) end
_G.xcodecodesigningidentity=xcodecodesigningidentity

---xcodesystemcapabilities - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/xcodesystemcapabilities/)
---
---@param value Boolean
local function xcodesystemcapabilities(value) end
_G.xcodesystemcapabilities=xcodesystemcapabilities