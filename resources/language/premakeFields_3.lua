---cspell:disable
---Specifies generic filter tags.
---
---[docs](https://premake.github.io/docs/tags/)
---
---@param value string[]
local function tags(value) end
_G.tags=tags

---Specifies if tailcalls should be enabled in Visual Studio F# projects.
---
---[docs](https://premake.github.io/docs/tailcalls/)
---
---@param value Boolean
local function tailcalls(value) end
_G.tailcalls=tailcalls

---Specifies the bundle extension for the MacOSX bundle.
---
---[docs](https://premake.github.io/docs/targetbundleextension/)
---
---@param value string
local function targetbundleextension(value) end
_G.targetbundleextension=targetbundleextension

---Sets the destination directory for the compiled binary target.
---
---[docs](https://premake.github.io/docs/targetdir/)
---
---@param value string
local function targetdir(value) end
_G.targetdir=targetdir

---Specifies the file extension for the compiled binary target.
---
---[docs](https://premake.github.io/docs/targetextension/)
---
---@param value string
local function targetextension(value) end
_G.targetextension=targetextension

---Specifies the base file name for the compiled binary target.
---
---[docs](https://premake.github.io/docs/targetname/)
---
---@param value string
local function targetname(value) end
_G.targetname=targetname

---Specifies the file name prefix for the compiled binary target.
---
---[docs](https://premake.github.io/docs/targetprefix/)
---
---@param value string
local function targetprefix(value) end
_G.targetprefix=targetprefix

---Specifies a file name suffix for the compiled binary target.
---
---[docs](https://premake.github.io/docs/targetsuffix/)
---
---@param value string
local function targetsuffix(value) end
_G.targetsuffix=targetsuffix

---@alias thumbmodeAllowed
---| "thumb"
---| "arm"
---| "disabled"
---| "disabled"
---| "arm"
---| "thumb"


---Specifies whether the code generation uses ARM or Thumb instruction sets.
---
---[docs](https://premake.github.io/docs/thumbmode/)
---
---@param value thumbmodeAllowed
local function thumbmode(value) end
_G.thumbmode=thumbmode

---@alias toolchainversionAllowed
---| "remote"
---| "wsl"
---| "wsl2"
---| "4.6"
---| "4.8"
---| "4.9"
---| "3.4"
---| "3.5"
---| "3.6"
---| "3.8"
---| "5.0"
---| "3.6"
---| "4.6"
---| "3.4"
---| "4.8"
---| "3.8"
---| "wsl2"
---| "remote"
---| "3.5"
---| "4.9"
---| "5.0"
---| "wsl"


---Specifies the version of the toolchain to use.
---
---[docs](https://premake.github.io/docs/toolchainversion/)
---
---@param value toolchainversionAllowed
local function toolchainversion(value) end
_G.toolchainversion=toolchainversion

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

---Force `char` to be unsigned.
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

---@alias useimportlibAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Sets whether or not to generate an import library for a Windows DLL.
---
---[docs](https://premake.github.io/docs/useimportlib/)
---
---@param value useimportlibAllowed
local function useimportlib(value) end
_G.useimportlib=useimportlib

---@alias userelativelinksAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Controls whether the linker uses relative or absolute paths for library references.
---
---[docs](https://premake.github.io/docs/userelativelinks/)
---
---@param value userelativelinksAllowed
local function userelativelinks(value) end
_G.userelativelinks=userelativelinks

---Specifies which usage blocks a project should consume.
---
---[docs](https://premake.github.io/docs/uses/)
---
---@param value string[]
local function uses(value) end
_G.uses=uses

---@alias useshortenumsAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Specifies if short enums should be used.
---
---[docs](https://premake.github.io/docs/useshortenums/)
---
---@param value useshortenumsAllowed
local function useshortenums(value) end
_G.useshortenums=useshortenums

---@alias usestandardpreprocessorAllowed
---| "On"
---| "Off"
---| "On"
---| "Off"


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
---| "SSE"
---| "IA32"
---| "NEON"
---| "SSE2"
---| "MXU"
---| "SSE4.1"
---| "AVX"
---| "ALTIVEC"
---| "AVX2"
---| "SSE4.2"
---| "SSE3"
---| "SSSE3"
---| "Default"


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
---| "Hidden"
---| "Internal"
---| "Protected"
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
---| "High"
---| "Extra"
---| "Everything"
---| "Off"
---| "Default"


---Controls the level of warnings that are shown by the compiler.
---
---[docs](https://premake.github.io/docs/warnings/)
---
---@param value warningsAllowed
local function warnings(value) end
_G.warnings=warnings

---@alias wpfAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Enable Windows Presentation Foundation (WPF) support for .NET projects.
---
---[docs](https://premake.github.io/docs/wpf/)
---
---@param value wpfAllowed
local function wpf(value) end
_G.wpf=wpf

---Specifies a list of files to treat as build resources in XCode.
---
---[docs](https://premake.github.io/docs/xcodebuildresources/)
---
---@param value string[]
local function xcodebuildresources(value) end
_G.xcodebuildresources=xcodebuildresources

---Specifies a set of XCode build settings.
---
---[docs](https://premake.github.io/docs/xcodebuildsettings/)
---
---@param value string
local function xcodebuildsettings(value) end
_G.xcodebuildsettings=xcodebuildsettings

---Specifies identity for code signing in XCode.
---
---[docs](https://premake.github.io/docs/xcodecodesigningidentity/)
---
---@param value string
local function xcodecodesigningidentity(value) end
_G.xcodecodesigningidentity=xcodecodesigningidentity

---Specifies a set of system capabilities to enable in the target.
---
---[docs](https://premake.github.io/docs/xcodesystemcapabilities/)
---
---@param value Boolean
local function xcodesystemcapabilities(value) end
_G.xcodesystemcapabilities=xcodesystemcapabilities