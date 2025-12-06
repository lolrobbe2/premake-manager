--@meta premakeFields.lua

---@alias Boolean
---| '"On"'
---| '"Off'"

---allmodulespublic
---
---[docs](https://premake.github.io/docs/allmodulespublic/)
---
---@param value Boolean
local function allmodulespublic(value) end
_G.allmodulespublic=allmodulespublic

---Specifies the target Android API level.
---
---[docs](https://premake.github.io/docs/androidapilevel/)
---
---@param value integer
local function androidapilevel(value) end
_G.androidapilevel=androidapilevel

---Specfies the file name for the output APK.
---
---[docs](https://premake.github.io/docs/androidapplibname/)
---
---@param value string
local function androidapplibname(value) end
_G.androidapplibname=androidapplibname

---@alias architectureAllowed
---| "universal"
---| "x86"
---| "x86_64"
---| "ARM"
---| "ARM64"
---| "RISCV64"
---| "loongarch64"
---| "ppc"
---| "ppc64"
---| "wasm32"
---| "wasm64"
---| "e2k"
---| "armv5"
---| "armv7"
---| "aarch64"
---| "mips"
---| "mips64"
---| "wasm64"
---| "armv7"
---| "mips"
---| "aarch64"
---| "e2k"
---| "ppc64"
---| "x86"
---| "ARM"
---| "mips64"
---| "x86_64"
---| "wasm32"
---| "armv5"
---| "loongarch64"
---| "universal"
---| "ARM64"
---| "RISCV64"
---| "ppc"


---Specifies the system architecture to be targeted by the configuration.
---
---[docs](https://premake.github.io/docs/architecture/)
---
---@param value architectureAllowed
local function architecture(value) end
_G.architecture=architecture

---assemblydebug - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/assemblydebug/)
---
---@param value Boolean
local function assemblydebug(value) end
_G.assemblydebug=assemblydebug

---@alias atlAllowed
---| "Off"
---| "Dynamic"
---| "Static"
---| "Static"
---| "Off"
---| "Dynamic"


---Enables Microsoft's Active Template Library in a project.
---
---[docs](https://premake.github.io/docs/atl/)
---
---@param value atlAllowed
local function atl(value) end
_G.atl=atl

---Sets the base directory for a configuration, from with other paths contained by the configuration will be made relative at export time.
---
---[docs](https://premake.github.io/docs/basedir/)
---
---@param value string
local function basedir(value) end
_G.basedir=basedir

---Specifies extra paths to use when executing build commands
---
---[docs](https://premake.github.io/docs/bindirs/)
---
---@param value string[]
local function bindirs(value) end
_G.bindirs=bindirs

---Specifies how a file or set of files should be treated during the compilation process.
---
---[docs](https://premake.github.io/docs/buildaction/)
---
---@param value string
local function buildaction(value) end
_G.buildaction=buildaction

---Specifies one or more shell commands to be executed to build a project or file.
---
---[docs](https://premake.github.io/docs/buildcommands/)
---
---@param value string[]
local function buildcommands(value) end
_G.buildcommands=buildcommands

---Imports custom .props files for Visual Studio.
---
---[docs](https://premake.github.io/docs/buildcustomizations/)
---
---@param value string[]
local function buildcustomizations(value) end
_G.buildcustomizations=buildcustomizations

---Specifies any additional dependencies for the target of a custom build rule.
---
---[docs](https://premake.github.io/docs/builddependencies/)
---
---@param value string[]
local function builddependencies(value) end
_G.builddependencies=builddependencies

---Specifies the source file file inputs of a custom build command or rule.
---
---[docs](https://premake.github.io/docs/buildinputs/)
---
---@param value string[]
local function buildinputs(value) end
_G.buildinputs=buildinputs

---Specifies the output location of a toolset's build logs.
---
---[docs](https://premake.github.io/docs/buildlog/)
---
---@param value string
local function buildlog(value) end
_G.buildlog=buildlog

---Specifies the text to output to the when a custom build command or rule is executed.
---
---[docs](https://premake.github.io/docs/buildmessage/)
---
---@param value string
local function buildmessage(value) end
_G.buildmessage=buildmessage

---Passes arguments directly to the compiler command line without translation.
---
---[docs](https://premake.github.io/docs/buildoptions/)
---
---@param value string[]
local function buildoptions(value) end
_G.buildoptions=buildoptions

---Specifies the file outputs of a custom build command or rule.
---
---[docs](https://premake.github.io/docs/buildoutputs/)
---
---@param value string[]
local function buildoutputs(value) end
_G.buildoutputs=buildoutputs

---@alias buildstlmodulesAllowed
---| "On"
---| "Off"
---| "Off"
---| "On"


---Sets whether or not the compiler should build STL modules.
---
---[docs](https://premake.github.io/docs/buildstlmodules/)
---
---@param value buildstlmodulesAllowed
local function buildstlmodules(value) end
_G.buildstlmodules=buildstlmodules

---@alias callingconventionAllowed
---| "Cdecl"
---| "FastCall"
---| "StdCall"
---| "VectorCall"
---| "FastCall"
---| "VectorCall"
---| "StdCall"
---| "Cdecl"


---Sets the [function calling convention](https://en.wikipedia.org/wiki/X86_calling_conventions).
---
---[docs](https://premake.github.io/docs/callingconvention/)
---
---@param value callingconventionAllowed
local function callingconvention(value) end
_G.callingconvention=callingconvention

---@alias cdialectAllowed
---| "Default"
---| "C89"
---| "C90"
---| "C99"
---| "C11"
---| "C17"
---| "C23"
---| "gnu89"
---| "gnu90"
---| "gnu99"
---| "gnu11"
---| "gnu17"
---| "gnu23"
---| "C99"
---| "Default"
---| "C89"
---| "C90"
---| "gnu11"
---| "gnu23"
---| "gnu17"
---| "gnu89"
---| "gnu99"
---| "C17"
---| "C11"
---| "C23"
---| "gnu90"


---cdialect
---
---[docs](https://premake.github.io/docs/cdialect/)
---
---@param value cdialectAllowed
local function cdialect(value) end
_G.cdialect=cdialect

---@alias charactersetAllowed
---| "Default"
---| "ASCII"
---| "MBCS"
---| "Unicode"
---| "Default"
---| "MBCS"
---| "ASCII"
---| "Unicode"


---Set the character encoding.
---
---[docs](https://premake.github.io/docs/characterset/)
---
---@param value charactersetAllowed
local function characterset(value) end
_G.characterset=characterset

---Enables clang-tidy code analysis for Visual Studio.
---
---[docs](https://premake.github.io/docs/clangtidy/)
---
---@param value Boolean
local function clangtidy(value) end
_G.clangtidy=clangtidy

---Specifies one or more shell commands to be executed to clean a [Makefile project](Makefile-Projects.md).
---
---[docs](https://premake.github.io/docs/cleancommands/)
---
---@param value string[]
local function cleancommands(value) end
_G.cleancommands=cleancommands

---Specifies one or more file extensions to find and remove when cleaning the project.
---
---[docs](https://premake.github.io/docs/cleanextensions/)
---
---@param value string[]
local function cleanextensions(value) end
_G.cleanextensions=cleanextensions

---@alias clrAllowed
---| "Off"
---| "On"
---| "Pure"
---| "Safe"
---| "Unsafe"
---| "NetCore"
---| "On"
---| "NetCore"
---| "Pure"
---| "Safe"
---| "Unsafe"
---| "Off"


---Enables Microsoft's Common Language Runtime for a project or configuration.
---
---[docs](https://premake.github.io/docs/clr/)
---
---@param value clrAllowed
local function clr(value) end
_G.clr=clr

---@alias compileasAllowed
---| "Default"
---| "C"
---| "C++"
---| "Objective-C"
---| "Objective-C++"
---| "Module"
---| "ModulePartition"
---| "HeaderUnit"
---| "HeaderUnit"
---| "Default"
---| "C++"
---| "Objective-C"
---| "Module"
---| "Objective-C++"
---| "C"
---| "ModulePartition"


---compileas
---
---[docs](https://premake.github.io/docs/compileas/)
---
---@param value compileasAllowed
local function compileas(value) end
_G.compileas=compileas

---Specify if generated file from [`buildcommands`](buildcommands.md) should be compiled or not.
---
---[docs](https://premake.github.io/docs/compilebuildoutputs/)
---
---@param value Boolean
local function compilebuildoutputs(value) end
_G.compilebuildoutputs=compilebuildoutputs

---Map workspace level configuration and platforms to a different project configuration or platform.
---
---[docs](https://premake.github.io/docs/configmap/)
---
---@param value [string] string string
local function configmap(value) end
_G.configmap=configmap

---Specifies the set of build configurations, such as "Debug" and "Release", for a workspace or project.
---
---[docs](https://premake.github.io/docs/configurations/)
---
---@param value string[]
local function configurations(value) end
_G.configurations=configurations

---conformancemode - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/conformancemode/)
---
---@param value Boolean
local function conformancemode(value) end
_G.conformancemode=conformancemode

---Enables the WinRT extension, C++/CX, for the specified projects/files.
---
---[docs](https://premake.github.io/docs/consumewinrtextension/)
---
---@param value Boolean
local function consumewinrtextension(value) end
_G.consumewinrtextension=consumewinrtextension

---Specifies a list of libraries or assembly references which should be copied to the target directory as part of the build.
---
---[docs](https://premake.github.io/docs/copylocal/)
---
---@param value string[]
local function copylocal(value) end
_G.copylocal=copylocal

---@alias cppdialectAllowed
---| "Default"
---| "C++latest"
---| "C++98"
---| "C++0x"
---| "C++11"
---| "C++1y"
---| "C++14"
---| "C++1z"
---| "C++17"
---| "C++2a"
---| "C++20"
---| "C++2b"
---| "C++23"
---| "gnu++98"
---| "gnu++0x"
---| "gnu++11"
---| "gnu++1y"
---| "gnu++14"
---| "gnu++1z"
---| "gnu++17"
---| "gnu++2a"
---| "gnu++20"
---| "gnu++2b"
---| "gnu++23"
---| "C++latest"
---| "gnu++0x"
---| "Default"
---| "C++23"
---| "C++20"
---| "gnu++23"
---| "C++0x"
---| "C++2a"
---| "C++1z"
---| "C++1y"
---| "gnu++17"
---| "C++14"
---| "gnu++2a"
---| "C++98"
---| "gnu++2b"
---| "gnu++1z"
---| "gnu++11"
---| "C++2b"
---| "C++17"
---| "gnu++14"
---| "gnu++1y"
---| "gnu++20"
---| "C++11"
---| "gnu++98"


---cppdialect
---
---[docs](https://premake.github.io/docs/cppdialect/)
---
---@param value cppdialectAllowed
local function cppdialect(value) end
_G.cppdialect=cppdialect

---Specifies the C# language level.
---
---[docs](https://premake.github.io/docs/csversion/)
---
---@param value string
local function csversion(value) end
_G.csversion=csversion

---customtoolnamespace
---
---[docs](https://premake.github.io/docs/customtoolnamespace/)
---
---@param value string
local function customtoolnamespace(value) end
_G.customtoolnamespace=customtoolnamespace

---Specifies a list of arguments to pass to the application when run under the debugger.
---
---[docs](https://premake.github.io/docs/debugargs/)
---
---@param value string[]
local function debugargs(value) end
_G.debugargs=debugargs

---Specifies the command to launch a project's target when debugging.
---
---[docs](https://premake.github.io/docs/debugcommand/)
---
---@param value string
local function debugcommand(value) end
_G.debugcommand=debugcommand

---Specifies commands to be executed upon connection of the debugger to a remote process.
---
---[docs](https://premake.github.io/docs/debugconnectcommands/)
---
---@param value string[]
local function debugconnectcommands(value) end
_G.debugconnectcommands=debugconnectcommands

---Sets the working directory for the integrated debugger.
---
---[docs](https://premake.github.io/docs/debugdir/)
---
---@param value string
local function debugdir(value) end
_G.debugdir=debugdir

---Specifies environment variables for the debug session.
---
---[docs](https://premake.github.io/docs/debugenvs/)
---
---@param value string[]
local function debugenvs(value) end
_G.debugenvs=debugenvs

---Specifies to use the 'extended-remote' protocol, which instructs GDB to maintain a persistent connection to gdbserver.
---
---[docs](https://premake.github.io/docs/debugextendedprotocol/)
---
---@param value Boolean
local function debugextendedprotocol(value) end
_G.debugextendedprotocol=debugextendedprotocol

---@alias debugformatAllowed
---| "Default"
---| "c7"
---| "Dwarf"
---| "SplitDwarf"
---| "c7"
---| "SplitDwarf"
---| "Default"
---| "Dwarf"


---Specifies the desired format of the debug information written to the output binaries.
---
---[docs](https://premake.github.io/docs/debugformat/)
---
---@param value debugformatAllowed
local function debugformat(value) end
_G.debugformat=debugformat

---@alias debuggerAllowed
---| "Default"
---| "GDB"
---| "LLDB"
---| "VisualStudioLocal"
---| "VisualStudioRemote"
---| "VisualStudioWebBrowser"
---| "VisualStudioWebService"
---| "VisualStudioWebBrowser"
---| "GDB"
---| "LLDB"
---| "VisualStudioLocal"
---| "VisualStudioWebService"
---| "VisualStudioRemote"
---| "Default"


---debugger
---
---[docs](https://premake.github.io/docs/debugger/)
---
---@param value debuggerAllowed
local function debugger(value) end
_G.debugger=debugger

---@alias debuggerflavorAllowed
---| "Local"
---| "Remote"
---| "WebBrowser"
---| "WebService"
---| "Remote"
---| "WebService"
---| "Local"
---| "WebBrowser"


---debuggerflavor - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/debuggerflavor/)
---
---@param value debuggerflavorAllowed
local function debuggerflavor(value) end
_G.debuggerflavor=debuggerflavor

---@alias debuggertypeAllowed
---| "Mixed"
---| "NativeOnly"
---| "ManagedOnly"
---| "NativeWithManagedCore"
---| "NativeWithManagedCore"
---| "Mixed"
---| "NativeOnly"
---| "ManagedOnly"


---debuggertype
---
---[docs](https://premake.github.io/docs/debuggertype/)
---
---@param value debuggertypeAllowed
local function debuggertype(value) end
_G.debuggertype=debuggertype

---Specifies the remote debug port.
---
---[docs](https://premake.github.io/docs/debugport/)
---
---@param value integer
local function debugport(value) end
_G.debugport=debugport

---Specifies the remote debugging target.
---
---[docs](https://premake.github.io/docs/debugremotehost/)
---
---@param value string
local function debugremotehost(value) end
_G.debugremotehost=debugremotehost

---Specifies a list of paths to search for source code while debugging.
---
---[docs](https://premake.github.io/docs/debugsearchpaths/)
---
---@param value string[]
local function debugsearchpaths(value) end
_G.debugsearchpaths=debugsearchpaths

---Specifies commands to be executed immediately as the debugger starts, before connecting to the target process.
---
---[docs](https://premake.github.io/docs/debugstartupcommands/)
---
---@param value string[]
local function debugstartupcommands(value) end
_G.debugstartupcommands=debugstartupcommands

---Specifies the default build platform for a workspace.
---
---[docs](https://premake.github.io/docs/defaultplatform/)
---
---@param value string
local function defaultplatform(value) end
_G.defaultplatform=defaultplatform

---Adds preprocessor or compiler symbols to a project.
---
---[docs](https://premake.github.io/docs/defines/)
---
---@param value string[]
local function defines(value) end
_G.defines=defines

---Specify one or more non-linking project build order dependencies.
---
---[docs](https://premake.github.io/docs/dependson/)
---
---@param value string[]
local function dependson(value) end
_G.dependson=dependson

---Disables specific compiler warnings.
---
---[docs](https://premake.github.io/docs/disablewarnings/)
---
---@param value string[]
local function disablewarnings(value) end
_G.disablewarnings=disablewarnings

---Text to display for rule or property definition
---
---[docs](https://premake.github.io/docs/display/)
---
---@param value string
local function display(value) end
_G.display=display

---Enables C# xmlDocumentationFile
---
---[docs](https://premake.github.io/docs/documentationfile/)
---
---@param value string
local function documentationfile(value) end
_G.documentationfile=documentationfile

---Selects a .NET framework version.
---
---[docs](https://premake.github.io/docs/dotnetframework/)
---
---@param value string
local function dotnetframework(value) end
_G.dotnetframework=dotnetframework

---@alias dotnetsdkAllowed
---| "Default"
---| "Web"
---| "Razor"
---| "Worker"
---| "Blazor"
---| "WindowsDesktop"
---| "MSTest"
---| "Razor"
---| "Default"
---| "MSTest"
---| "Worker"
---| "WindowsDesktop"
---| "Web"
---| "Blazor"


---Selects a .NET SDK
---
---[docs](https://premake.github.io/docs/dotnetsdk/)
---
---@param value dotnetsdkAllowed
local function dotnetsdk(value) end
_G.dotnetsdk=dotnetsdk

---@alias dpiawarenessAllowed
---| "Default"
---| "None"
---| "High"
---| "HighPerMonitor"
---| "HighPerMonitor"
---| "High"
---| "Default"
---| "None"


---Sets the DPI awareness settings.
---
---[docs](https://premake.github.io/docs/dpiawareness/)
---
---@param value dpiawarenessAllowed
local function dpiawareness(value) end
_G.dpiawareness=dpiawareness

---@alias editandcontinueAllowed
---| "Default"
---| "On"
---| "Off"
---| "On"
---| "Default"
---| "Off"


---Turns the edit-and-continue features of a toolset or platform on and off.
---
---[docs](https://premake.github.io/docs/editandcontinue/)
---
---@param value editandcontinueAllowed
local function editandcontinue(value) end
_G.editandcontinue=editandcontinue

---Turns the Editor Integration feature on.
---
---[docs](https://premake.github.io/docs/editorintegration/)
---
---@param value Boolean
local function editorintegration(value) end
_G.editorintegration=editorintegration

---Sets value of the *Embed* field in Xcode under *Frameworks, Libraries, and Embedded Content* to **Embed Without Signing**
---
---[docs](https://premake.github.io/docs/embed/)
---
---@param value string[]
local function embed(value) end
_G.embed=embed

---Sets value of the *Embed* field in Xcode under *Frameworks, Libraries, and Embedded Content* to **Embed & Sign**
---
---[docs](https://premake.github.io/docs/embedandsign/)
---
---@param value string[]
local function embedandsign(value) end
_G.embedandsign=embedandsign

---enabledefaultcompileitems - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/enabledefaultcompileitems/)
---
---@param value Boolean
local function enabledefaultcompileitems(value) end
_G.enabledefaultcompileitems=enabledefaultcompileitems

---@alias enablemodulesAllowed
---| "On"
---| "Off"
---| "Off"
---| "On"


---Sets whether or not the compiler should enable C++20 modules.
---
---[docs](https://premake.github.io/docs/enablemodules/)
---
---@param value enablemodulesAllowed
local function enablemodules(value) end
_G.enablemodules=enablemodules

---@alias enableunitybuildAllowed
---| "On"
---| "Off"
---| "Off"
---| "On"


---Enables Unity Builds in Visual Studio, also known as Jumbo Builds
---
---[docs](https://premake.github.io/docs/enableunitybuild/)
---
---@param value enableunitybuildAllowed
local function enableunitybuild(value) end
_G.enableunitybuild=enableunitybuild

---Enables specific compiler warnings.
---
---[docs](https://premake.github.io/docs/enablewarnings/)
---
---@param value string[]
local function enablewarnings(value) end
_G.enablewarnings=enablewarnings

---@alias endianAllowed
---| "Default"
---| "Little"
---| "Big"
---| "Little"
---| "Default"
---| "Big"


---Specifies the target endian for endian-agnostic architectures.
---
---[docs](https://premake.github.io/docs/endian/)
---
---@param value endianAllowed
local function endian(value) end
_G.endian=endian

---Specify the program entry point, e.g.
---
---[docs](https://premake.github.io/docs/entrypoint/)
---
---@param value string
local function entrypoint(value) end
_G.entrypoint=entrypoint

---@alias exceptionhandlingAllowed
---| "Default"
---| "On"
---| "Off"
---| "SEH"
---| "CThrow"
---| "UnwindTables"
---| "On"
---| "Default"
---| "SEH"
---| "CThrow"
---| "UnwindTables"
---| "Off"


---Enable or disable exception handling.
---
---[docs](https://premake.github.io/docs/exceptionhandling/)
---
---@param value exceptionhandlingAllowed
local function exceptionhandling(value) end
_G.exceptionhandling=exceptionhandling

---@alias externalanglebracketsAllowed
---| "On"
---| "Off"
---| "Off"
---| "On"


---Treats all headers included by `#include <header>`, where the header file is enclosed in angle brackets (`< >`), as external headers.
---
---[docs](https://premake.github.io/docs/externalanglebrackets/)
---
---@param value externalanglebracketsAllowed
local function externalanglebrackets(value) end
_G.externalanglebrackets=externalanglebrackets

---Specifies the include file search paths for the compiler, treating headers included from these paths as external.
---
---[docs](https://premake.github.io/docs/externalincludedirs/)
---
---@param value string[]
local function externalincludedirs(value) end
_G.externalincludedirs=externalincludedirs

---@alias externalwarningsAllowed
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


---Controls the level of warnings that are shown by the compiler for headers that are considered external.
---
---[docs](https://premake.github.io/docs/externalwarnings/)
---
---@param value externalwarningsAllowed
local function externalwarnings(value) end
_G.externalwarnings=externalwarnings

---fastuptodate - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/fastuptodate/)
---
---@param value Boolean
local function fastuptodate(value) end
_G.fastuptodate=fastuptodate

---Specifies specific compiler warnings that should be interpreted as errors.
---
---[docs](https://premake.github.io/docs/fatalwarnings/)
---
---@param value string[]
local function fatalwarnings(value) end
_G.fatalwarnings=fatalwarnings

---Specifies the target file extensions for a [custom build rule](Custom-Rules.md).
---
---[docs](https://premake.github.io/docs/fileextension/)
---
---@param value string[]
local function fileextension(value) end
_G.fileextension=fileextension

---Sets the name of a generated workspace, project, or rules file.
---
---[docs](https://premake.github.io/docs/filename/)
---
---@param value string
local function filename(value) end
_G.filename=filename

---Adds files to a project.
---
---[docs](https://premake.github.io/docs/files/)
---
---@param value string[]
local function files(value) end
_G.files=files

---@alias flagsAllowed
---| "DebugEnvsDontMerge"
---| "DebugEnvsInherit"
---| "ExcludeFromBuild"
---| "FatalCompileWarnings"
---| "FatalLinkWarnings"
---| "FatalWarnings"
---| "LinkTimeOptimization"
---| "Maps"
---| "MFC"
---| "MultiProcessorCompile"
---| "No64BitChecks"
---| "NoCopyLocal"
---| "NoImplicitLink"
---| "NoImportLib"
---| "NoIncrementalLink"
---| "NoManifest"
---| "NoMinimalRebuild"
---| "NoPCH"
---| "NoRuntimeChecks"
---| "NoBufferSecurityCheck"
---| "OmitDefaultLibrary"
---| "RelativeLinks"
---| "ShadowedVariables"
---| "UndefinedIdentifiers"
---| "WPF"
---| "DebugEnvsDontMerge"
---| "FatalWarnings"
---| "OmitDefaultLibrary"
---| "NoCopyLocal"
---| "FatalCompileWarnings"
---| "WPF"
---| "UndefinedIdentifiers"
---| "NoBufferSecurityCheck"
---| "RelativeLinks"
---| "DebugEnvsInherit"
---| "ShadowedVariables"
---| "MFC"
---| "ExcludeFromBuild"
---| "NoIncrementalLink"
---| "No64BitChecks"
---| "NoImportLib"
---| "NoManifest"
---| "NoPCH"
---| "NoMinimalRebuild"
---| "NoImplicitLink"
---| "LinkTimeOptimization"
---| "NoRuntimeChecks"
---| "FatalLinkWarnings"
---| "MultiProcessorCompile"
---| "Maps"


---Specifies build flags to modify the compiling or linking process.
---
---[docs](https://premake.github.io/docs/flags/)
---
---@param value flagsAllowed
local function flags(value) end
_G.flags=flags

---@alias floatabiAllowed
---| "soft"
---| "softfp"
---| "hard"
---| "softfp"
---| "soft"
---| "hard"


---Specifies the floating point ABI to use.
---
---[docs](https://premake.github.io/docs/floatabi/)
---
---@param value floatabiAllowed
local function floatabi(value) end
_G.floatabi=floatabi

---@alias floatingpointAllowed
---| "Default"
---| "Fast"
---| "Strict"
---| "Fast"
---| "Default"
---| "Strict"


---Specifies the style of floating point math which should be used.
---
---[docs](https://premake.github.io/docs/floatingpoint/)
---
---@param value floatingpointAllowed
local function floatingpoint(value) end
_G.floatingpoint=floatingpoint

---floatingpointexceptions
---
---[docs](https://premake.github.io/docs/floatingpointexceptions/)
---
---@param value Boolean
local function floatingpointexceptions(value) end
_G.floatingpointexceptions=floatingpointexceptions

---Applies one or more "forced include" files to the project; these includes behave as it they had been injected into the first line of each source file in the project.
---
---[docs](https://premake.github.io/docs/forceincludes/)
---
---@param value string[]
local function forceincludes(value) end
_G.forceincludes=forceincludes

---Applies one or more "forced using" files to the project; these includes behave as it they had been injected into the first line of each source file in the project.
---
---[docs](https://premake.github.io/docs/forceusings/)
---
---@param value string[]
local function forceusings(value) end
_G.forceusings=forceusings

---@alias fpuAllowed
---| "Software"
---| "Hardware"
---| "Hardware"
---| "Software"


---Specifies whether to generate code for a hardware FPU.
---
---[docs](https://premake.github.io/docs/fpu/)
---
---@param value fpuAllowed
local function fpu(value) end
_G.fpu=fpu

---frameworkdirs - This page was auto-generated.
---
---[docs](https://premake.github.io/docs/frameworkdirs/)
---
---@param value string[]
local function frameworkdirs(value) end
_G.frameworkdirs=frameworkdirs

---functionlevellinking
---
---[docs](https://premake.github.io/docs/functionlevellinking/)
---
---@param value Boolean
local function functionlevellinking(value) end
_G.functionlevellinking=functionlevellinking

---Sets a prefix to be prepended to commands used by the GCC toolchain.
---
---[docs](https://premake.github.io/docs/gccprefix/)
---
---@param value string
local function gccprefix(value) end
_G.gccprefix=gccprefix

---@alias gitintegrationAllowed
---| "Off"
---| "Always"
---| "OnNewFiles"
---| "Off"
---| "Always"
---| "OnNewFiles"


---Enable git integration to run premake on checkout.
---
---[docs](https://premake.github.io/docs/gitintegration/)
---
---@param value gitintegrationAllowed
local function gitintegration(value) end
_G.gitintegration=gitintegration

---Specifies the application icon resource.
---
---[docs](https://premake.github.io/docs/icon/)
---
---@param value string
local function icon(value) end
_G.icon=icon

---Specifies the default libraries to be ignored for a project.
---
---[docs](https://premake.github.io/docs/ignoredefaultlibraries/)
---
---@param value string[]
local function ignoredefaultlibraries(value) end
_G.ignoredefaultlibraries=ignoredefaultlibraries

---Passes arguments directly to the image tool command line without translation.
---
---[docs](https://premake.github.io/docs/imageoptions/)
---
---@param value string[]
local function imageoptions(value) end
_G.imageoptions=imageoptions

---Sets the file name of the deployment image produced by the build.
---
---[docs](https://premake.github.io/docs/imagepath/)
---
---@param value string
local function imagepath(value) end
_G.imagepath=imagepath

---Specifies the import library output directory.
---
---[docs](https://premake.github.io/docs/implibdir/)
---
---@param value string
local function implibdir(value) end
_G.implibdir=implibdir

---Specifies the import library file extension.
---
---[docs](https://premake.github.io/docs/implibextension/)
---
---@param value string
local function implibextension(value) end
_G.implibextension=implibextension

---Specifies the import library base file name.
---
---[docs](https://premake.github.io/docs/implibname/)
---
---@param value string
local function implibname(value) end
_G.implibname=implibname

---Specifies the import library file name prefix.
---
---[docs](https://premake.github.io/docs/implibprefix/)
---
---@param value string
local function implibprefix(value) end
_G.implibprefix=implibprefix

---Specifies a file name suffix for the import library base file name.
---
---[docs](https://premake.github.io/docs/implibsuffix/)
---
---@param value string
local function implibsuffix(value) end
_G.implibsuffix=implibsuffix

---Specifies the include file search paths for the compiler.
---
---[docs](https://premake.github.io/docs/includedirs/)
---
---@param value string[]
local function includedirs(value) end
_G.includedirs=includedirs