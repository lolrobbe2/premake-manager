---@meta

--#region allmodulespublic


---@alias allmodulespublicValueTypes
---| '"On"' # All C++ modules in the given project(s) will be public.
---| '"Off"' # Not all C++ modules in the given project(s) will be public.

---<h1><a href="https://premake.github.io/docs/allmodulespublic">allmodulespublic</a></h1>
---allmodulespublic
---
--[[
```lua
allmodulespublic "value"
```
]]
---
---
---@param value allmodulespublicValueTypes * `On` - All C++ modules in the given project(s) will be public.
---
---<h2>examples</h2>
---
--[[
```lua
allmodulespublic "On"
```
]]
function allmodulespublic(value) end

--#endregion allmodulespublic
--#region androidapilevel


---<h1><a href="https://premake.github.io/docs/androidapilevel">androidapilevel</a></h1>
---Specifies the target Android API level.
---
--[[
```lua
androidapilevel (value)
```
]]
---
---
---@param value number `value` is a number specifying the target Android API level.
---
---<h2>examples</h2>
---
--[[
```lua
androidapilevel (21)
```
]]
function androidapilevel(value) end

--#endregion androidapilevel
--#region androidapplibname


---<h1><a href="https://premake.github.io/docs/androidapplibname">androidapplibname</a></h1>
---Specfies the file name for the output APK.
---
--[[
```lua
androidapplibname ("value")
```
]]
---
---By default, the project name will be used as the file name for the APK.
---
---
---@param value string `value` is the new file name.
---
---<h2>examples</h2>
---
--[[
```lua
androidapplibname "MyProject"
```
]]
function androidapplibname(value) end

--#endregion androidapplibname
--#region architecture


---@alias architectureValueTypes
---| '"universal"' # The universal binaries supported by iOS and macOS
---| '"x86"' # 
---| '"x86_64"' # 
---| '"ARM"' # 
---| '"ARM64"' # 
---| '"RISCV64"' # 
---| '"loongarch64"' # 
---| '"ppc"' # 
---| '"ppc64"' # 
---| '"wasm32"' # ,
---| '"wasm64"' # ,
---| '"e2k"' # ,
---| '"mips64el"' # ,
---| '"armv5"' # Only supported in VSAndroid projects
---| '"armv7"' # Only supported in VSAndroid projects
---| '"aarch64"' # Only supported in VSAndroid projects
---| '"mips"' # Only supported in VSAndroid projects
---| '"mips64"' # Only supported in VSAndroid projects
---| '"i386"' # Alias for `x86`
---| '"amd64"' # Alias for `x86_64`
---| '"x32"' # Alias for `x86`; There is intent to deprecate this
---| '"x64"' # Alias for `x86_64`; There is intent to deprecate this

---<h1><a href="https://premake.github.io/docs/architecture">architecture</a></h1>
---Specifies the system architecture to be targeted by the configuration.
---
--[[
```lua
architecture ("value")
```
]]
---
---
---@param value architectureValueTypes `value` is one of:
---@see system
---<h2>examples</h2>
---
---Set up 32- and 64-bit Windows builds.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug32", "Release32", "Debug64", "Release64" }

   filter "configurations:*32"
      architecture "x86"

   filter "configurations:*64"
      architecture "x86_64"
```
]]
function architecture(value) end

--#endregion architecture
--#region assemblydebug


---<h1><a href="https://premake.github.io/docs/assemblydebug">assemblydebug</a></h1>
---assemblydebug - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
assemblydebug (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
assemblydebug (value)
```
]]
function assemblydebug(value) end

--#endregion assemblydebug
--#region atl


---@alias atlValueTypes
---| '"Off"' # Do not use ATL (default).
---| '"Dynamic"' # Link the ATL libraries dynamically.
---| '"Static"' # Link the ATL libraries statically.

---<h1><a href="https://premake.github.io/docs/atl">atl</a></h1>
---Enables Microsoft's Active Template Library in a project.
---
--[[
```lua
atl ("value")
```
]]
---
---
---@param value atlValueTypes `value` is one of:
---
---
function atl(value) end

--#endregion atl
--#region basedir


---<h1><a href="https://premake.github.io/docs/basedir">basedir</a></h1>
---Sets the base directory for a configuration, from with other paths contained by the configuration will be made relative at export time.
---
--[[
```lua
basedir ("value")
```
]]
---
---You do not normally need to set this value, as it is filled in automatically with the current working directory at the time the configuration block is created by the script.
---
---
---@param value string `value` is an absolute path, from which other paths contained by the configuration should be made relative.
---
---
function basedir(value) end

--#endregion basedir
--#region bindirs


---<h1><a href="https://premake.github.io/docs/bindirs">bindirs</a></h1>
---Specifies extra paths to use when executing build commands
---
--[[
```lua
bindirs { "directories" }
```
]]
---
---
---@param directories string `directories` - paths containing executable to run when building command.
---
---<h2>examples</h2>
---
--[[
```lua
bindirs { "bin/", "scripts/" }
```
]]
function bindirs(directories) end

--#endregion bindirs
--#region buildaction


---@alias buildactionActionTypes
---| '"ClInclude"' # Treat the file as an include file.
---| '"ClCompile"' # Treat the file as source code; compile and link it.
---| '"FxCompile"' # Treat the file as HLSL shader source code; compile and link it.
---| '"None"' # Do nothing with this file.
---| '"ResourceCompile"' # Copy/embed the file with the project resources.
---| '"CustomBuild"' # Treat the file as custom build code; compile and optionally link it.
---| '"Midl"' # Treat the file as MIDL source code; compile and link it.
---| '"Masm"' # Treat the file as MASM source code; compile and link it.
---| '"Image"' # Treat the file as an Image.
---| '"Natvis"' # Treat the file as Natvis source; use it for custom data layouts while debugging.
---| '"AppxManifest"' # Treat the file as AppX Manifest; required for UWP applications.
---| '"Copy"' # Copy the file to the target directory.
---| '"Action"' # Description
---| '"Application"' # Mark the file as the application definition XAML for WPF.
---| '"Compile"' # Treat the file as source code; compile and link it.
---| '"Component"' # Treat the source file as [a component][1], usually a visual control.
---| '"Copy"' # Copy the file to the target directory.
---| '"Embed"' # Embed the file into the target binary as a resource.
---| '"Form"' # Treat the source file as visual (Windows) form.
---| '"None"' # Do nothing with this file.
---| '"Resource"' # Copy/embed the file with the project resources.
---| '"UserControl"' # Treat the source file as [visual user control][2].

---<h1><a href="https://premake.github.io/docs/buildaction">buildaction</a></h1>
---Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension.
---
--[[
```lua
buildaction ("action")
```
]]
---
---
---@param action buildactionActionTypes For C/C++, `action` is the name of the MSBuild action as defined by the vcxproj format; eg:
---
---<h2>examples</h2>
---
---Embed all PNG images files into the target binary.
---
--[[
```lua
filter "files:**.png"
   buildaction "Embed"
```
]]
---
---[1]: http://msdn.microsoft.com/en-us/library/ms228287(v=vs.90).aspx
---[2]: http://msdn.microsoft.com/en-us/library/a6h7e207(v=vs.71).aspx
function buildaction(action) end

--#endregion buildaction
--#region buildcommands


---<h1><a href="https://premake.github.io/docs/buildcommands">buildcommands</a></h1>
---Specifies one or more shell commands to be executed to build a project or file.
---
--[[
```lua
buildcommands { "commands" }
```
]]
---
---
---@param commands table `commands` specifies a list of one or more shell commands to be executed.
---@see Tokens
---@see buildinputs
---@see buildmessage
---@see buildoutputs
---@see cleancommands
---@see rebuildcommands
---<h2>examples</h2>
---
---Use [per-file custom build commands](Custom-Build-Commands.md) to compile all Lua files in a project to C:
---
--[[
```lua
filter 'files:**.lua'
   -- A message to display while this build step is running (optional)
   buildmessage 'Compiling %[%{file.relpath}]'

   -- One or more commands to run (required)
   buildcommands {
      'luac -o "%[%{!cfg.objdir}/%{file.basename}.out]" "%[%{file.relpath}]"'
   }

   -- One or more outputs resulting from the build (required)
   buildoutputs { '%{cfg.objdir}/%{file.basename}.c' }
```
]]
---
---Use a [Makefile project](Makefile-Projects.md) to execute an external makefile.
---
--[[
```lua
workspace "Workspace"
   configurations { "Debug", "Release" }

project "MyProject"
   kind "Makefile"

   buildcommands {
      "make %{cfg.buildcfg}"
   }

   cleancommands {
      "make clean %{cfg.buildcfg}"
   }
```
]]
function buildcommands(commands) end

--#endregion buildcommands
--#region buildcustomizations


---<h1><a href="https://premake.github.io/docs/buildcustomizations">buildcustomizations</a></h1>
---Imports custom .props files for Visual Studio.
---
--[[
```lua
buildcustomizations { "string" }
```
]]
---
---
---@param string any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
buildcustomizations { "string" }
```
]]
function buildcustomizations(string) end

--#endregion buildcustomizations
--#region builddependencies


---<h1><a href="https://premake.github.io/docs/builddependencies">builddependencies</a></h1>
---Specifies any additional dependencies for the target of a custom build rule.
---
--[[
```lua
builddependencies { "files" }
```
]]
---
---
---@param files string `files` specifies a list of file path for additional dependencies.
---@see rules
---
function builddependencies(files) end

--#endregion builddependencies
--#region buildinputs


---<h1><a href="https://premake.github.io/docs/buildinputs">buildinputs</a></h1>
---Specifies the source file file inputs of a custom build command or rule.
---
--[[
```lua
buildinputs { "inputs" }
```
]]
---
---
---@param inputs string `inputs` is the list of input source files.
---@see buildcommands
---@see builddependencies
---@see buildoutputs
---
function buildinputs(inputs) end

--#endregion buildinputs
--#region buildlog


---<h1><a href="https://premake.github.io/docs/buildlog">buildlog</a></h1>
---Specifies the output location of a toolset's build logs.
---
--[[
```lua
buildlog ("path")
```
]]
---
---If a build log path has not been specified, the toolset's default path will be used.
---
---
---@param path string `path` is the output file system location for the build log file.
---
---
function buildlog(path) end

--#endregion buildlog
--#region buildmessage


---<h1><a href="https://premake.github.io/docs/buildmessage">buildmessage</a></h1>
---Specifies the text to output to the when a custom build command or rule is executed.
---
--[[
```lua
buildmessage ("message")
```
]]
---
---
---@param message string `message` is the text to write to standard output.
---@see buildcommands
---
function buildmessage(message) end

--#endregion buildmessage
--#region buildoptions


---<h1><a href="https://premake.github.io/docs/buildoptions">buildoptions</a></h1>
---Passes arguments directly to the compiler command line without translation.
---
--[[
```lua
buildoptions { "options" }
```
]]
---
---If a project includes multiple calls to `buildoptions` the lists are concatenated, in the order in which they appear in the script.
---
---
---@param options boolean `options` is a list of compiler flags and options, specific to a particular compiler.
---
---<h2>examples</h2>
---
---Use `pkg-config` style configuration when building on Linux with GCC. Build options are always compiler specific and should be targeted to a particular toolset.
---
--[[
```lua
filter { "system:linux", "action:gmake" }
  buildoptions { "`wx-config --cxxflags`", "-ansi", "-pedantic" }
```
]]
function buildoptions(options) end

--#endregion buildoptions
--#region buildoutputs


---<h1><a href="https://premake.github.io/docs/buildoutputs">buildoutputs</a></h1>
---Specifies the file outputs of a custom build command or rule.
---
--[[
```lua
buildoutputs { "output" }
```
]]
---
---
---@param output string `output` is the file that is created or updated by the custom build command or rule.
---@see buildcommands
---@see builddependencies
---@see buildinputs
---
function buildoutputs(output) end

--#endregion buildoutputs
--#region buildstlmodules


---<h1><a href="https://premake.github.io/docs/buildstlmodules">buildstlmodules</a></h1>
---Sets whether or not the compiler should build STL modules.
---
--[[
```lua
buildstlmodules("value")
```
]]
---
---
---@param value any `value` is one of:
---@see enablemodules
---
function buildstlmodules(value) end

--#endregion buildstlmodules
--#region callingconvention


---@alias callingconventionValueTypes
---| '"Cdecl"' # 
---| '"FastCall"' # 
---| '"StdCall"' # 
---| '"VectorCall"' # 

---<h1><a href="https://premake.github.io/docs/callingconvention">callingconvention</a></h1>
---Sets the function calling convention.
---
--[[
```lua
callingconvention ("value")
```
]]
---
---
---@param value callingconventionValueTypes `value` is one of:
---
---
function callingconvention(value) end

--#endregion callingconvention
--#region cdialect


---@alias cdialectValueTypes
---| '"Default"' # the default C dialect for the toolset
---| '"C89"' # ISO C89
---| '"C90"' # ISO C90
---| '"C99"' # ISO C99
---| '"C11"' # ISO C11
---| '"C17"' # ISO C17
---| '"C23"' # ISO C23
---| '"gnu89"' # GNU dialect of ISO C89
---| '"gnu90"' # GNU dialect of ISO C90
---| '"gnu99"' # GNU dialect of ISO C99
---| '"gnu11"' # GNU dialect of ISO C11
---| '"gnu17"' # GNU dialect of ISO C17
---| '"gnu23"' # GNU dialect of ISO C23

---<h1><a href="https://premake.github.io/docs/cdialect">cdialect</a></h1>
---cdialect
---
--[[
```lua
cdialect "value"
```
]]
---
---
---@param value cdialectValueTypes * `Default`:
---
---<h2>examples</h2>
---
--[[
```lua
cdialect "value"
```
]]
function cdialect(value) end

--#endregion cdialect
--#region characterset


---@alias charactersetValueTypes
---| '"Default"' # the default encoding for the toolset; usually `Unicode`
---| '"MBCS"' # Multi-byte Character Set; currently Visual Studio only
---| '"Unicode"' # Unicode character encoding
---| '"ASCII"' # No actual character set

---<h1><a href="https://premake.github.io/docs/characterset">characterset</a></h1>
---Set the character encoding.
---
--[[
```lua
characterset ("value")
```
]]
---
---
---@param value charactersetValueTypes `value` is one of:
---
---
function characterset(value) end

--#endregion characterset
--#region clangtidy


---<h1><a href="https://premake.github.io/docs/clangtidy">clangtidy</a></h1>
---Enables clang-tidy code analysis for Visual Studio.
---
---The `clangtidy` option enables running clang-tidy code analysis in Visual Studio projects.
---
--[[
```lua
clangtidy("value")
```
]]
---
---
---@param value any `value` is one of:
---@see runcodeanalysis
---
function clangtidy(value) end

--#endregion clangtidy
--#region cleancommands


---<h1><a href="https://premake.github.io/docs/cleancommands">cleancommands</a></h1>
---Specifies one or more shell commands to be executed to clean a Makefile project.
---
--[[
```lua
cleancommands { "commands" }
```
]]
---
---
---@param commands table `commands` specifies a list of one or more shell commands to be executed.
---@see buildcommands
---@see buildmessage
---@see buildoutputs
---@see rebuildcommands
---<h2>examples</h2>
---
---Use a [Makefile project](Makefile-Projects.md) to execute an external makefile.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }

project "MyProject"
   kind "Makefile"

   buildcommands {
      "make %{cfg.buildcfg}"
   }

   rebuildcommands {
      "make %{cfg.buildcfg} rebuild"
   }

   cleancommands {
      "make clean %{cfg.buildcfg}"
   }
```
]]
function cleancommands(commands) end

--#endregion cleancommands
--#region cleanextensions


---<h1><a href="https://premake.github.io/docs/cleanextensions">cleanextensions</a></h1>
---Specifies one or more file extensions to find and remove when cleaning the project.
---
--[[
```lua
cleanextensions { ".ext1", ".ext2" }
```
]]
---
---
---@param list string A list of dot-prefixed file extensions to be cleaned.
---
---<h2>examples</h2>
---
---Remove .zip files from the output directory when cleaning.
---
--[[
```lua
cleanextensions { ".zip" }
```
]]
function cleanextensions(list) end

--#endregion cleanextensions
--#region clr


---@alias clrValueTypes
---| '"Off"' # No CLR support
---| '"On"' # Enable CLR support
---| '"Pure"' # Enable pure mode MSIL. Equivalent to "On" for .NET projects.
---| '"Safe"' # Enable verifiable MSIL. Equivalent to "On" for .NET projects.
---| '"Unsafe"' # Enable unsafe operations. Equivalent to "On" for Managed C++ projects.
---| '"NetCore"' # Needs documentation

---<h1><a href="https://premake.github.io/docs/clr">clr</a></h1>
---Enables Microsoft's Common Language Runtime for a project or configuration.
---
--[[
```lua
clr "value"
```
]]
---
---See /clr (Common Language Runtime Compilation) in the Visual Studio documentation for more information.
---
---
---@param value clrValueTypes is one of the following:
---
---<h2>examples</h2>
---
---Set up a managed C++ project.
---
--[[
```lua
project "MyProject"
  kind "ConsoleApp"
  language "C++"
  clr "On"
```
]]
---
---Enable unsafe code in a C# project.
---
--[[
```lua
project "MyProject"
  kind "ConsoleApp"
  language "C#"
  clr "Unsafe"
```
]]
function clr(value) end

--#endregion clr
--#region compileas


---@alias compileasValueTypes
---| '"Default"' # Compile based on file extensions that have been built into premake.
---| '"C"' # Compile as a C source file.
---| '"C++"' # Compile as a C++ source file.
---| '"Objective-C"' # Compile as an Objective-C source file.
---| '"Objective-C++"' # Compile as an Objective-C++ source file.
---| '"Module"' # Compile as a C++20 module interface unit.
---| '"ModulePartition"' # Compile as a C++20 module interface partition.
---| '"HeaderUnit"' # Compile as a C++20 header unit.

---<h1><a href="https://premake.github.io/docs/compileas">compileas</a></h1>
---compileas
---
--[[
```lua
compileas "value"
```
]]
---
---
---@param value compileasValueTypes * `Default` - Compile based on file extensions that have been built into premake.
---
---<h2>examples</h2>
---
--[[
```lua
filter { "files:**.c" }
    compileas "C++"
```
]]
function compileas(value) end

--#endregion compileas
--#region compilebuildoutputs


---@alias compilebuildoutputsValueTypes
---| '"on"' # generated file should be compiled.
---| '"off"' # generated file should not be compiled.

---<h1><a href="https://premake.github.io/docs/compilebuildoutputs">compilebuildoutputs</a></h1>
---Specify if generated file from `buildcommands` should be compiled or not.
---
--[[
```lua
compilebuildoutputs "value"
```
]]
---
---
---@param value compilebuildoutputsValueTypes * `on`  - generated file should be compiled.
---
---<h2>examples</h2>
---
--[[
```lua
filter "files:**.cpp.in"
  buildmessage "generate %{file.basename} from %{file.relpath}"
  buildoutputs { "%{cfg.objdir}/%{file.basename}") }
  buildcommands { "MyScript %[%{!file.abspath}] %[%{!cfg.objdir}/%{file.basename}]" }
  compilebuildoutputs "on"
filter "files:**.h.in"
  buildmessage "generate %{file.basename} from %{file.relpath}"
  buildoutputs { "%{cfg.objdir}/%{file.basename}") }
  buildcommands { "MyScript %[%{!file.abspath}] %[%{!cfg.objdir}/%{file.basename}]" }
  compilebuildoutputs "off"
filter {}
```
]]
function compilebuildoutputs(value) end

--#endregion compilebuildoutputs
--#region configfile


---<h1><a href="https://premake.github.io/docs/configfile">configfile</a></h1>
---Specifies an Xbox 360 configuration file.
---
--[[
```lua
configfile "file"
```
]]
---
---
---@param file string is the script-relative path to the configuration file.
---
---
function configfile(file) end

--#endregion configfile
--#region configmap


---<h1><a href="https://premake.github.io/docs/configmap">configmap</a></h1>
---Map workspace level configuration and platforms to a different project configuration or platform.
---
--[[
```lua
configmap {
   [{ wks_cfg }] = { prj_cfg },
```
]]
---
---You may map multiple configurations in a single configuration map.
---
---
---@param wks_cfg string is the workspace configuration being mapped.
---
---<h2>examples</h2>
---
---The workspace contains four build configurations, while the project contains only the standard Debug and Release. Map the extra workspace configurations to Debug and Release.
---
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Development", "Profile", "Release" }

project "MyProject"
   configmap {
      ["Development"] = "Debug",
      ["Profile"] = "Release",
   }
```
]]
---
---It can be useful to specify a map globally for a workspace, but only apply it if the target configuration is actually present in the project. In this example, host executables can be built for either Windows or Mac, while some projects build for an embedded controller. Any project that uses the special "Embedded" platform will receive the configuration map.
---
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   platforms { "Windows", "Mac" }

   filter { "platforms:Embedded" }
      configmap {
         ["Windows"] = "Embedded",
         ["Mac"] = "Embedded"
      }

-- this project gets the configuration map, because it defines an "Embedded" platform
project "MyEmbeddedProject"
   platforms { "Embedded" }

-- this one does not
project "MyHostProject"
```
]]
function configmap(wks_cfg) end

--#endregion configmap
--#region configuration


---@alias configurationKeywordsTypes
---| '"Configuration names."' # Any of the configuration names supplied to the **[configurations](configurations.md)** or **[platforms](platforms.md)** functions.
---| '"Action names"' # such as **vs2010** or **gmake**. See the [Using Premake](Using-Premake.md) for a complete list.
---| '"Command line options"' # .
---| '"System names"' # such as **windows**, **macosx**, or **xbox360**.
---| '"Architectures"' # such as **x32** or **x64**.
---| '"Toolsets"' # such as **gcc**.
---| '"Target kinds"' # like **ConsoleApp** or **SharedLib**.
---| '"Languages"' # like **C++** or **C#**.
---| '"File names"' # can be used to apply settings to a specific set of source code files; this feature is currently very limited.

---<h1><a href="https://premake.github.io/docs/configuration">configuration</a></h1>
---<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;"><strong>This function has been deprecated in Premake 5.0 beta1.</strong> Use the new filter() function instead; you will get more granular matching and much better performance. `configuration()` will be not supported in Premake 6.
---</div>
---
---Limits the subsequent build settings to a particular environment.
---
--[[
```lua
configuration { "keywords" }
```
]]
---@deprecated
---
---@param keywords configurationKeywordsTypes `keywords` is a list of identifiers (see below).
---@see Filters
---@see filter
---<h2>examples</h2>
---
---Define a new symbol which applies only to debug builds; assumes a configuration named "Debug" was defined as part of the workspace.
---
--[[
```lua
configuration "Debug"
  defines { "_DEBUG" }
```
]]
---
---Define a symbol only when targeting Visual Studio 2010.
---
--[[
```lua
configuration "vs2010"
  defines { "VISUAL_STUDIO_2005" }
```
]]
---
---Wildcards can be used to match multiple terms. Define a symbol for all versions of Visual Studio.
---
--[[
```lua
configuration "vs*"
  defines { "VISUAL_STUDIO" }
```
]]
---
---Add a suffix to the debug versions of libraries.
---
--[[
```lua
configuration { "Debug", "SharedLib or StaticLib" }
  targetsuffix "_d"

-- ...or...
configuration { "Debug", "*Lib" }
  targetsuffix "_d"
```
]]
---
---Apply settings based on the presence of a [custom command line option](Command-Line-Arguments.md).
---
--[[
```lua
-- Using an option like --localized
configuration { "localized" }
   files { "src/localizations/**" }

-- Using an option like --renderer=opengl
configuration { "renderer=opengl" }
   files { "src/opengl/**.cpp" }
```
]]
---
---Although support is currently quite limited, you may also apply settings to a particular file or set of files. This example sets the build action for all PNG image files.
---
--[[
```lua
configuration "*.png"
  buildaction "Embed"
```
]]
---
---In the case of files you may also use the **\*\*** wildcard, which will recurse into subdirectories.
---
--[[
```lua
configuration "**.png"
  buildaction "Embed"
```
]]
---
---If multiple keywords are specified, they will be treated as a logical AND. All terms must be present for the block to be applied. This example will apply the symbol only for debug builds on Mac OS X.
---
--[[
```lua
configuration { "debug", "macosx" }
  defines { "DEBUG_MACOSX" }
```
]]
---
---Multiple terms must use Lua's curly bracket list syntax.
---
---You can use the **or** modifier to match against multiple, specific terms.
---
--[[
```lua
configuration "linux or macosx"
  defines { "LINUX_OR_MACOSX" }
```
]]
---
---You can also use **not** to apply the settings to all environments where the identifier is not set.
---
--[[
```lua
configuration "not windows"
  defines { "NOT_WINDOWS" }
```
]]
---
---Finally, you can reset the configuration filter and remove all active keywords by passing the function an empty table.
---
--[[
```lua
configuration {}
```
]]
function configuration(keywords) end

--#endregion configuration
--#region configurations


---<h1><a href="https://premake.github.io/docs/configurations">configurations</a></h1>
---Specifies the set of build configurations, such as "Debug" and "Release", for a workspace or project.
---
--[[
```lua
configurations { "names" }
```
]]
---
---A configuration encapsulates a collection of build settings, allowing the developer to easily switch between them. "Debug" and "Release" are the most common configuration names.
---
---For more information, see Configurations and Platforms.
---
---
---@param names string `names` is a list of configuration names.
---@see platforms
---<h2>examples</h2>
---
---Specify debug and release configurations for a workspace.
---
--[[
```lua
workspace "MyWorkspace"
  configurations { "Debug", "Release" }
```
]]
---
---Add additional configurations for a dynamic link library version.
---
--[[
```lua
configurations { "Debug", "Release", "DebugDLL", "ReleaseDLL" }
```
]]
function configurations(names) end

--#endregion configurations
--#region conformancemode


---<h1><a href="https://premake.github.io/docs/conformancemode">conformancemode</a></h1>
---conformancemode - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
conformancemode (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
conformancemode (value)
```
]]
function conformancemode(value) end

--#endregion conformancemode
--#region consumewinrtextension


---@alias consumewinrtextensionValueTypes
---| '"Default"' # Compiles the file using the default for the toolset. (Default is `Off`)
---| '"On"' # Compiles the file with the WinRT extension enabled.
---| '"Off"' # Compiles the file without the WinRT extension enabled.

---<h1><a href="https://premake.github.io/docs/consumewinrtextension">consumewinrtextension</a></h1>
---Enables the WinRT extension, C++/CX, for the specified projects/files.
---
--[[
```lua
consumewinrtextension "value"
```
]]
---
---
---@param value consumewinrtextensionValueTypes is one of:
---
---<h2>examples</h2>
---
--[[
```lua
filter { "files:**_winrt.cpp" }
    consumewinrtextension "On"
```
]]
function consumewinrtextension(value) end

--#endregion consumewinrtextension
--#region copylocal


---<h1><a href="https://premake.github.io/docs/copylocal">copylocal</a></h1>
---Specifies a list of libraries or assembly references which should be copied to the target directory as part of the build. Refer to the Visual Studio C# project feature of the same name.
---
--[[
```lua
copylocal { "libraries" }
```
]]
---
---If a project includes multiple calls to `copylocal` the lists are concatenated, in the order in which they appear in the script.
---
---Note that, by default, all referenced non-system assemblies in a C# project are copied. This function only needs to called when a subset of the referenced assemblies should be copied. To disable copying of *all* references, use the `NoLocalCopy` build flag instead (see Examples, below).
---
---
---@param libraries string `libraries` is a list of the libraries or assemblies to be copied as part of the build.
---
---<h2>examples</h2>
---
---Copy only the **Renderer** and **Physics** assemblies to the target directory; do not copy **nunit.framework**. Note that the links may refer to project or assembly references.
---
--[[
```lua
links { "Renderer", "Physics", "nunit.framework" }
copylocal { "Renderer", "Physics" }
```
]]
---
---The link should be specified in exactly the same way in both `links()` and `copylocal()`.
---
--[[
```lua
links { "Renderer", "../ThirdParty/nunit.framework" }
copylocal { "../ThirdParty/nunit.framework" }
```
]]
---
---If you want to prevent any assemblies from being copied, use the **NoLocalCopy** flag instead.
---
--[[
```lua
flags { "NoCopyLocal" }
```
]]
function copylocal(libraries) end

--#endregion copylocal
--#region cppdialect


---@alias cppdialectValueTypes
---| '"Default"' # the default C++ dialect for the toolset
---| '"C++latest"' # the latest C++ dialect for the toolset or action where available, otherwise the latest C++ dialect supported by Premake
---| '"C++98"' # ISO C++98
---| '"C++0x"' # ISO C++11 Draft
---| '"C++11"' # ISO C++11
---| '"C++1y"' # ISO C++14 Draft
---| '"C++14"' # ISO C++14
---| '"C++1z"' # ISO C++17 Draft
---| '"C++17"' # ISO C++17
---| '"C++2a"' # ISO C++20 Draft
---| '"C++20"' # ISO C++20
---| '"C++2b"' # ISO C++23 Draft
---| '"C++23"' # ISO C++23
---| '"gnu++98"' # GNU dialect of ISO C++98
---| '"gnu++0x"' # GNU dialect of ISO C++11 Draft
---| '"gnu++11"' # GNU dialect of ISO C++11
---| '"gnu++1y"' # GNU dialect of ISO C++14 Draft
---| '"gnu++14"' # GNU dialect of ISO C++14
---| '"gnu++1z"' # GNU dialect of ISO C++17 Draft
---| '"gnu++17"' # GNU dialect of ISO C++17
---| '"gnu++2a"' # GNU dialect of ISO C++20 Draft
---| '"gnu++20"' # GNU dialect of ISO C++20
---| '"gnu++2b"' # GNU dialect of ISO C++23 Draft
---| '"gnu++23"' # GNU dialect of ISO C++23

---<h1><a href="https://premake.github.io/docs/cppdialect">cppdialect</a></h1>
---cppdialect
---
--[[
```lua
cppdialect "value"
```
]]
---
---
---@param value cppdialectValueTypes * `Default`:
---
---<h2>examples</h2>
---
--[[
```lua
cppdialect "value"
```
]]
function cppdialect(value) end

--#endregion cppdialect
--#region csversion


---<h1><a href="https://premake.github.io/docs/csversion">csversion</a></h1>
---Specifies the C# language level.
---
--[[
```lua
csversion ("value")
```
]]
---
---
---@param value string `value` is a string specifying the C# language level.
---@see clr
---@see dotnetframework
---
function csversion(value) end

--#endregion csversion
--#region customtoolnamespace


---<h1><a href="https://premake.github.io/docs/customtoolnamespace">customtoolnamespace</a></h1>
---customtoolnamespace
---
--[[
```lua
customtoolnamespace "value"
```
]]
---
---Only used by Visual Studio .NET targets.
---
---Maps to `<CustomToolNamespace>` MSBuild element.
---
---
---@param value any - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
customtoolnamespace "value"
```
]]
function customtoolnamespace(value) end

--#endregion customtoolnamespace
--#region debug.prompt

---<h1><a href="https://premake.github.io/docs/debug.prompt">debug.prompt</a></h1>
---Opens a REPL (replace-eval-print loop) prompt where you can enter and evaluate Lua commands against the current script environment.
---
--[[
```lua
debug.prompt()
```
]]
---
---This call is also tied to the `--interactive` flag: specifying this flag will open a prompt after the project scripts have been executed and "baked" for the current environment.
---
---
---
function debug.prompt() end

--#endregion debug.prompt
--#region debugargs


---<h1><a href="https://premake.github.io/docs/debugargs">debugargs</a></h1>
---Specifies a list of arguments to pass to the application when run under the debugger.
---
--[[
```lua
debugargs { "args" }
```
]]
---
---Note that this setting is not implemented for Xcode 3, which requires a per-user configuration file in order to make it work.
---
---In Visual Studio, this file can be overridden by a per-user configuration file (such as `ProjectName.vcproj.MYDOMAIN-MYUSERNAME.user`). Removing this file (which is done by Premake's clean action) will restore the default settings.
---
---
---@param args table `args` is a Lua list of arguments to provide to the executable while debugging.
---
---<h2>examples</h2>
---
--[[
```lua
filter { "configurations:Debug" }
   debugargs { "--append", "somefile.txt" }
```
]]
function debugargs(args) end

--#endregion debugargs
--#region debugcommand


---<h1><a href="https://premake.github.io/docs/debugcommand">debugcommand</a></h1>
---Specifies the command to launch a project's target when debugging.
---
--[[
```lua
debugcommand ("command")
```
]]
---
---In Visual Studio, this file can be overridden by a per-user configuration file (such as `ProjectName.vcproj.MYDOMAIN-MYUSERNAME.user`). Removing this file (which is done by Premake's clean action) will restore the default settings.
---
---
---@param command any `command` is the command to run to start the target.
---@see debugargs
---@see debugdir
---
function debugcommand(command) end

--#endregion debugcommand
--#region debugconnectcommands


---<h1><a href="https://premake.github.io/docs/debugconnectcommands">debugconnectcommands</a></h1>
---Specifies commands to be executed upon connection of the debugger to a remote process.
---
--[[
```lua
debugconnectcommands { "commands" }
```
]]
---
---
---@param commands table `commands` is a list of commands to execute.
---@see debugstartupcommands
---
function debugconnectcommands(commands) end

--#endregion debugconnectcommands
--#region debugdir


---<h1><a href="https://premake.github.io/docs/debugdir">debugdir</a></h1>
---Sets the working directory for the integrated debugger.
---
--[[
```lua
debugdir "path"
```
]]
---
---Note that this settings is not implemented for Xcode, which requires a per-user configuration file in order to make it work.
---
---In Visual Studio, this file can be overridden by a per-user configuration file (such as `ProjectName.vcproj.MYDOMAIN-MYUSERNAME.user`). Removing this file (which is done by Premake's clean action) will restore the default settings.
---
---
---@param path string is the path to the working directory, relative to the currently executing script file.
---
---<h2>examples</h2>
---
--[[
```lua
filter { "configurations:Debug" }
   debugdir "bin/debug"
```
]]
function debugdir(path) end

--#endregion debugdir
--#region debugenvs


---<h1><a href="https://premake.github.io/docs/debugenvs">debugenvs</a></h1>
---Specifies environment variables for the debug session.
---
--[[
```lua
debugenvs { "envs" }
```
]]
---
---
---@param envs table `envs` is a list of environment variable definitions for the debug session.
---
---
function debugenvs(envs) end

--#endregion debugenvs
--#region debugextendedprotocol


---<h1><a href="https://premake.github.io/docs/debugextendedprotocol">debugextendedprotocol</a></h1>
---Specifies to use the 'extended-remote' protocol, which instructs GDB to maintain a persistent connection to gdbserver.
---
--[[
```lua
debugextendedprotocol (enabled)
```
]]
---
---
---@param enabled boolean `enabled` is a boolean value that specifies whether to use the 'extended remote' protocol.
---
---
function debugextendedprotocol(enabled) end

--#endregion debugextendedprotocol
--#region debugformat


---@alias debugformatFormatTypes
---| '"Default"' # Specifies default debug format should be used by toolset.
---| '"c7"' # Specifies that MSVC should store debuginfo in the objects rather than a separate .pdb file.
---| '"Dwarf"' # Needs documentation
---| '"SplitDwarf"' # Needs documetation

---<h1><a href="https://premake.github.io/docs/debugformat">debugformat</a></h1>
---Specifies the desired format of the debug information written to the output binaries.
---
--[[
```lua
debugformat "format"
```
]]
---
---
---@param format debugformatFormatTypes specifies the desired debug format:
---@see editandcontinue
---
function debugformat(format) end

--#endregion debugformat
--#region debugger


---@alias debuggerValueTypes
---| '"Default"' # needs documentation.
---| '"GDB"' # needs documentation.
---| '"LLDB"' # needs documentation.
---| '"VisualStudioLocal"' # needs documentation.
---| '"VisualStudioRemote"' # needs documentation.
---| '"VisualStudioWebBrowser"' # needs documentation.
---| '"VisualStudioWebService"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/debugger">debugger</a></h1>
---debugger
---
--[[
```lua
debugger "value"
```
]]
---
---
---@param value debuggerValueTypes * `Default` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
debugger "value"
```
]]
function debugger(value) end

--#endregion debugger
--#region debuggerflavor


---@alias debuggerflavorValueTypes
---| '"Local"' # needs documentation
---| '"Remote"' # needs documentation
---| '"WebBrowser"' # needs documentation
---| '"WebService"' # needs documentation

---<h1><a href="https://premake.github.io/docs/debuggerflavor">debuggerflavor</a></h1>
---debuggerflavor - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
debuggerflavor (value)
```
]]
---
---
---@param value debuggerflavorValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
debuggerflavor (value)
```
]]
function debuggerflavor(value) end

--#endregion debuggerflavor
--#region debuggertype


---@alias debuggertypeValueTypes
---| '"Mixed"' # Enables simultanoues debugging of native and .NET Framework code.
---| '"NativeOnly"' # Restricts debugging to native code only.
---| '"ManagedOnly"' # Restricts debugging to managed code only.
---| '"NativeWithManagedCore"' # Enables simultanoues debugging of native and .NET Core code.

---<h1><a href="https://premake.github.io/docs/debuggertype">debuggertype</a></h1>
---debuggertype
---
--[[
```lua
debuggertype "value"
```
]]
---
---
---@param value debuggertypeValueTypes * `Mixed` - Enables simultanoues debugging of native and .NET Framework code.
---
---<h2>examples</h2>
---
--[[
```lua
debuggertype "value"
```
]]
function debuggertype(value) end

--#endregion debuggertype
--#region debugport


---<h1><a href="https://premake.github.io/docs/debugport">debugport</a></h1>
---Specifies the remote debug port.
---
--[[
```lua
debugport (portnumber)
```
]]
---
---
---@param portnumber number `portnumber` is an integer port number for the debugger to connect on.
---@see debugremotehost
---
function debugport(portnumber) end

--#endregion debugport
--#region debugremotehost


---<h1><a href="https://premake.github.io/docs/debugremotehost">debugremotehost</a></h1>
---Specifies the remote debugging target.
---
--[[
```lua
debugremotehost "host"
```
]]
---
---
---@param host any specifies a host to connect to when starting a remote debug session.
---@see debugport
---
function debugremotehost(host) end

--#endregion debugremotehost
--#region debugsearchpaths


---<h1><a href="https://premake.github.io/docs/debugsearchpaths">debugsearchpaths</a></h1>
---Specifies a list of paths to search for source code while debugging.
---
--[[
```lua
debugsearchpaths { "paths" }
```
]]
---
---
---@param paths string `paths` is a list of paths the debugger will use to search for source files.
---
---
function debugsearchpaths(paths) end

--#endregion debugsearchpaths
--#region debugstartupcommands


---<h1><a href="https://premake.github.io/docs/debugstartupcommands">debugstartupcommands</a></h1>
---Specifies commands to be executed immediately as the debugger starts, before connecting to the target process.
---
--[[
```lua
debugstartupcommands { "commands" }
```
]]
---
---
---@param commands table `commands` is a list of commands to execute.
---@see debugconnectcommands
---
function debugstartupcommands(commands) end

--#endregion debugstartupcommands
--#region defaultplatform


---<h1><a href="https://premake.github.io/docs/defaultplatform">defaultplatform</a></h1>
---Specifies the default build platform for a workspace.
---
--[[
```lua
defaultplatform ("platform_name")
```
]]
---
---If `platform_name` has not been defined using `platforms` the default platform will not change from the generic one i.e. the first one passed to `platforms`.
---
---
---@param platform_name string `platform_name` - Is the name of the platform you want to use as default.
---@see platforms
---<h2>examples</h2>
---
--[[
```lua
workspace "MyWorkspace"
  configurations { "Debug", "Release" }
  platforms { "Static32", "Shared32", "Static64", "Shared64" }
  defaultplatform "Shared64" -- Default platform from "Static32" to "Shared64"

  filter "platforms:Static32"
    kind "StaticLib"
    architecture "x32"

  filter "platforms:Static64"
    kind "StaticLib"
    architecture "x64"

  filter "platforms:Shared32"
    kind "SharedLib"
    architecture "x32"

  filter "platforms:Shared64"
    kind "SharedLib"
    architecture "x64"
```
]]
function defaultplatform(platform_name) end

--#endregion defaultplatform
--#region defines


---<h1><a href="https://premake.github.io/docs/defines">defines</a></h1>
---Adds preprocessor or compiler symbols to a project.
---
--[[
```lua
defines { "symbols" }
```
]]
---
---
---@param symbols table `symbols` specifies a list of symbols to be defined.
---
---<h2>examples</h2>
---
---Define two new symbols in the current project.
---
--[[
```lua
defines { "DEBUG", "TRACE" }
```
]]
---
---Symbols may also assign values.
---
--[[
```lua
defines { "CALLSPEC=__dllexport" }
```
]]
function defines(symbols) end

--#endregion defines
--#region dependson


---<h1><a href="https://premake.github.io/docs/dependson">dependson</a></h1>
---Specify one or more non-linking project build order dependencies.
---
--[[
```lua
dependson { "project1", "project2", ... }
```
]]
---
---
---@param table string One or more sibling project names.
---
---
function dependson(table) end

--#endregion dependson
--#region deploymentoptions


---<h1><a href="https://premake.github.io/docs/deploymentoptions">deploymentoptions</a></h1>
---Passes arguments directly to the deployment tool command line without translation.
---
--[[
```lua
deploymentoptions { "options" }
```
]]
---
---If a project includes multiple calls to `deploymentoptions` the lists are concatenated, in the order in which they appear in the script.
---
---Deployment options are currently only supported for Xbox 360 targets.
---
---
---@param options boolean `options` is a list of deployment tools flags and options.
---
---
function deploymentoptions(options) end

--#endregion deploymentoptions
--#region disablewarnings


---<h1><a href="https://premake.github.io/docs/disablewarnings">disablewarnings</a></h1>
---Disables specific compiler warnings.
---
--[[
```lua
disablewarnings { "warnings" }
```
]]
---
---
---@param warnings number `warnings` is a list of warnings to disable.
---@see enablewarnings
---@see fatalwarnings
---<h2>examples</h2>
---
---Disable the GCC warning about using old-style C casts (`-Wno-old-style-cast` command line argument):
---
--[[
```lua
filter "options:cc=gcc"
  disablewarnings "old-style-cast"
```
]]
function disablewarnings(warnings) end

--#endregion disablewarnings
--#region display


---<h1><a href="https://premake.github.io/docs/display">display</a></h1>
---Text to display for rule or property definition
---
--[[
```lua
display "value"
```
]]
---
---
---@param value string - Text shown for the rule or property definition.
---
---<h2>examples</h2>
---
--[[
```lua
rule "myrule"
  display "My custom rule"
  fileextension ".in"

  propertydefinition {
    name = "myoption",
    display = "My option",
    description = "Select the option to use",
    values = { [0] = "option1", [1] = "option2"},
    value = 1
  }

  buildmessage 'custom rule: {copy} %{file.relpath} %{file.basename}'
  buildoutputs { "%{sln.location}/%{file.basename}" }
  buildcommands { "MyScript {myoption} %[%{!file.abspath}] %[%{!sln.location}/%{file.basename}]" }
```
]]
function display(value) end

--#endregion display
--#region documentationfile


---<h1><a href="https://premake.github.io/docs/documentationfile">documentationfile</a></h1>
---Enables C# xmlDocumentationFile
---
---The `xmlDocumentationFile` option is used to include XML comments in a DLL that has been included in a .NET framework or another C# project. These XML comments can then be referenced by other projects when placed alongside the corresponding SharedLib.
---
---This feature sets the documentationfile option in a C# project's .csproj file for each respective configuration
---
---
---@param targetdir string is the directory where the documentation file should be placed after building the project using visual studio.
---@see configuration
---<h2>examples</h2>
---
---When you set documentationFile to true, the following filepath will be generated:
---```%{targetdir}/%{prj.name}.xml```
--[[
```lua
documentationfile(true)
```
]]
---If you specify a custom target directory like this:
--[[
```lua
documentationfile("%{prj.location}/bin/test")
```
]]
---the following filepath will be generated:
---```bin\test\%{prj.name}.xml```
function documentationfile(targetdir) end

--#endregion documentationfile
--#region dotnetframework


---<h1><a href="https://premake.github.io/docs/dotnetframework">dotnetframework</a></h1>
---Selects a .NET framework version.
---
--[[
```lua
dotnetframework ("version")
```
]]
---
---This value currently is only applied to Visual Studio 2005 or later, and GNU makefiles using Mono. If no .NET framework version is specified the toolset default is used.
---
---
---@param version any `version` is one of:
---@see clr
---@see framework
---<h2>examples</h2>
---
---Use the .NET framework 3.0.
---
--[[
```lua
dotnetframework "3.0"
```
]]
function dotnetframework(version) end

--#endregion dotnetframework
--#region dotnetsdk


---<h1><a href="https://premake.github.io/docs/dotnetsdk">dotnetsdk</a></h1>
---Selects a .NET SDK
---
--[[
```lua
dotnetsdk "SDK"
```
]]
---
---For more information see the MSDN documentation here
---
---
---@param SDK any is one of:
---
---<h2>examples</h2>
---
--[[
```lua
dotnetsdk "Web"
```
]]
---
--[[
```lua
dotnetsdk "Web/3.4.0"
```
]]
---
---A custom SDK can be specified using the following:
--[[
```lua
premake.api.addAllowed("dotnetsdk", "CustomSDK") -- add the custom SDK to allowed values for dotnetsdk
dotnetsdk "CustomSDK"

dotnetsdk "CustomSDK/3.4.0" -- Specifying a version with a custom SDK is also supported
```
]]
function dotnetsdk(SDK) end

--#endregion dotnetsdk
--#region dpiawareness


---@alias dpiawarenessValueTypes
---| '"Default"' # Use the toolset's default setting for DPI awareness.
---| '"None"' # Turn off DPI awareness.
---| '"High"' # Turn on DPI awareness.
---| '"HighPerMonitor"' # Turn on DPI awareness per monitor.

---<h1><a href="https://premake.github.io/docs/dpiawareness">dpiawareness</a></h1>
---Sets the DPI awareness settings.
---
--[[
```lua
dpiawareness "value"
```
]]
---
---
---@param value dpiawarenessValueTypes is one of:
---
---<h2>examples</h2>
---
--[[
```lua
-- Turn on DPI awareness
dpiawareness "High"
```
]]
function dpiawareness(value) end

--#endregion dpiawareness
--#region editandcontinue


---<h1><a href="https://premake.github.io/docs/editandcontinue">editandcontinue</a></h1>
---Turns the edit-and-continue features of a toolset or platform on and off.
---
--[[
```lua
editandcontinue "value"
```
]]
---
---If no value is set for a configuration, the toolset's default setting (usually "On") will be used.
---
---
---@param value boolean is a boolean value, i.e.
---@see debugformat
---<h2>examples</h2>
---
--[[
```lua
-- Turn off edit and continue
editandcontinue "Off"
```
]]
function editandcontinue(value) end

--#endregion editandcontinue
--#region editorintegration


---<h1><a href="https://premake.github.io/docs/editorintegration">editorintegration</a></h1>
---Turns the Editor Integration feature on. This is simply a hint to the action to add extra information into the generated workspace that allows an IDE to know which/where and how premake was executed. This is currently really only implemented for the Visual Studio action, but other actions may use this too in the future.
---
---There is a plugin that allows re-execution of the premake step from within Visual Studio, which can be found here:
---https://github.com/tvandijck/PremakeExtension
---
--[[
```lua
editorintegration "value"
```
]]
---
---If no value is set for a configuration, the toolset's default setting (usually "Off") will be used.
---
---
---@param value boolean is a boolean value, i.e.
---
---<h2>examples</h2>
---
--[[
```lua
-- Turn on IDE integration
editorintegration "On"
```
]]
function editorintegration(value) end

--#endregion editorintegration
--#region embed


---<h1><a href="https://premake.github.io/docs/embed">embed</a></h1>
------
---title: embed
------
---
---Sets value of the *Embed* field in Xcode under *Frameworks, Libraries, and Embedded Content* to <strong>Embed Without Signing</strong>
---
---This results in the framework being copied into the built app bundle during the *Embed Libraries* build phase.
---
--[[
```lua
embed "Foo.framework"
```
]]
---
---
---@param value string is the name of the content to be embedded.
---@see embedAndSign
---<h2>examples</h2>
---
--[[
```lua
embed {
	"SDL2.dylib",
	"bar.framework"
}
```
]]
function embed(value) end

--#endregion embed
--#region embedandsign


---<h1><a href="https://premake.github.io/docs/embedandsign">embedandsign</a></h1>
------
---title: embedAndSign
------
---
---Sets value of the *Embed* field in Xcode under *Frameworks, Libraries, and Embedded Content* to <strong>Embed & Sign</strong>
---
---This results in the framework being copied into the built app bundle during the *Embed Libraries* build phase and signed.
---
--[[
```lua
embedAndSign "SDL2.framework"
```
]]
---
---
---@param value string is the name of the content to be embedded and signed.
---@see embed
---<h2>examples</h2>
---
--[[
```lua
embedAndSign {
	"SDL2.framework",
	"Another.framework"
}
```
]]
function embedandsign(value) end

--#endregion embedandsign
--#region enabledefaultcompileitems


---<h1><a href="https://premake.github.io/docs/enabledefaultcompileitems">enabledefaultcompileitems</a></h1>
---enabledefaultcompileitems - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
enabledefaultcompileitems (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
enabledefaultcompileitems (value)
```
]]
function enabledefaultcompileitems(value) end

--#endregion enabledefaultcompileitems
--#region enablemodules


---<h1><a href="https://premake.github.io/docs/enablemodules">enablemodules</a></h1>
---Sets whether or not the compiler should enable C++20 modules.
---
--[[
```lua
enablemodules("value")
```
]]
---
---
---@param value any `value` is one of:
---
---
function enablemodules(value) end

--#endregion enablemodules
--#region enableunitybuild


---@alias enableunitybuildValueTypes
---| '"On"' # Enables Unity Builds.
---| '"Off"' # Disables Unity Builds.

---<h1><a href="https://premake.github.io/docs/enableunitybuild">enableunitybuild</a></h1>
---Enables Unity Builds in Visual Studio, also known as Jumbo Builds
---
--[[
```lua
enableunitybuild "value"
```
]]
---
---
---@param value enableunitybuildValueTypes is one of:
---
---<h2>examples</h2>
---
---Enable Unity Builds.
---
--[[
```lua
enableunitybuild "On"
```
]]
function enableunitybuild(value) end

--#endregion enableunitybuild
--#region enablewarnings


---<h1><a href="https://premake.github.io/docs/enablewarnings">enablewarnings</a></h1>
---Enables specific compiler warnings.
---
--[[
```lua
enablewarnings { "warnings" }
```
]]
---
---
---@param warnings number `warnings` is a list of warnings to enable.
---@see disablewarnings
---@see fatalwarnings
---
function enablewarnings(warnings) end

--#endregion enablewarnings
--#region endian


---@alias endianValueTypes
---| '"Default"' # Use the toolset's default endian.
---| '"Little"' # Specify little-endian.
---| '"Big"' # Specify big-endian.

---<h1><a href="https://premake.github.io/docs/endian">endian</a></h1>
---Specifies the target endian for endian-agnostic architectures.
---
--[[
```lua
endian "value"
```
]]
---
---
---@param value endianValueTypes specifies the desired endian:
---@see architecture
---
function endian(value) end

--#endregion endian
--#region entrypoint


---<h1><a href="https://premake.github.io/docs/entrypoint">entrypoint</a></h1>
---Specify the program entry point, e.g. `main()`.
---
--[[
```lua
entrypoint ("value")
```
]]
---
---
---@param value number `value` is the name of the program's entry point function.
---
---<h2>examples</h2>
---
---Use the Microsoft Windows console application entry point instead of the usual `WinMain()`.
---
--[[
```lua
entrypoint "mainCRTStartup"
```
]]
function entrypoint(value) end

--#endregion entrypoint
--#region exceptionhandling


---@alias exceptionhandlingValueTypes
---| '"Default"' # Use the toolset's default setting for exceptions.
---| '"On"' # Turn on exceptions.
---| '"Off"' # Turn off exceptions.
---| '"SEH"' # Turn on exceptions and use [structured exception handling](https://msdn.microsoft.com/en-us/library/windows/desktop/ms680657(v=vs.85).aspx) when available.
---| '"CThrow"' # Needs documentation
---| '"UnwindTables"' # Needs documentation

---<h1><a href="https://premake.github.io/docs/exceptionhandling">exceptionhandling</a></h1>
---Enable or disable exception handling.
---
--[[
```lua
exceptionhandling ("value")
```
]]
---
---
---@param value exceptionhandlingValueTypes `value` is one of:
---@see rtti
---
function exceptionhandling(value) end

--#endregion exceptionhandling
--#region external

---<h1><a href="https://premake.github.io/docs/external">external</a></h1>
---See externalproject.
---
---
---
function external() end

--#endregion external
--#region externalanglebrackets


---@alias externalanglebracketsValueTypes
---| '"On"' # Treat headers included with angle brackets as external.
---| '"Off"' # Default. Headers are treated normally.

---<h1><a href="https://premake.github.io/docs/externalanglebrackets">externalanglebrackets</a></h1>
---Treats all headers included by `#include <header>`, where the header file is enclosed in angle brackets (`< >`), as external headers.
---
--[[
```lua
externalanglebrackets "value"
```
]]
---
---
---@param value externalanglebracketsValueTypes is one of:
---@see externalincludedirs
---@see externalwarnings
---
function externalanglebrackets(value) end

--#endregion externalanglebrackets
--#region externalincludedirs


---<h1><a href="https://premake.github.io/docs/externalincludedirs">externalincludedirs</a></h1>
---Specifies the include file search paths for the compiler, treating headers included from these paths as external.
---
--[[
```lua
externalincludedirs { "paths" }
```
]]
---
---For Visual Studio, these paths are placed in the "VC++ Directories" properties panel. For GCC and Clang, they are preceded with the `-isystem` flag, rather than `-I`. For toolsets which do not support the concept of external include directories, they are treated as a normal include directory.
---
---Include files located via an external include directory are treated specially, see externalwarnings.
---
---
---@param paths string `paths` specifies a list of include file search directories.
---@see externalanglebrackets
---@see externalwarnings
---@see includedirs
---<h2>examples</h2>
---
---Define two external include file search paths.
---
--[[
```lua
externalincludedirs { "../lua/include", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
externalincludedirs { "../includes/**" }
```
]]
function externalincludedirs(paths) end

--#endregion externalincludedirs
--#region externalproject


---<h1><a href="https://premake.github.io/docs/externalproject">externalproject</a></h1>
---Provides a way to reference projects that were created manually, or outside of Premake.
---
--[[
```lua
externalproject ("project")
```
]]
---
---The `externalproject()` function behaves the same as project(), taking a name argument that is used as the project's file name.
---
---
---@param project string `project` is name of the project.
---
---<h2>examples</h2>
---
--[[
```lua
externalproject "MyExternalProject"
   location "build/MyExternalProject"
   uuid "57940020-8E99-AEB6-271F-61E0F7F6B73B"
   kind "StaticLib"
   language "C++"
```
]]
---
---The calls to uuid(), kind(), and language() are mandatory; this information is needed to properly assemble the Premake-generated workspace. The call to location() is optional and used to locate the directory containing the external project file.
---
---The external project file does not need to exist at the time the workspace is generated.
function externalproject(project) end

--#endregion externalproject
--#region externalrule


---<h1><a href="https://premake.github.io/docs/externalrule">externalrule</a></h1>
---Provides a way to reference rules that were created manually, outside of Premake.
---
--[[
```lua
externalrule ("name")
```
]]
---
---The `externalrule()` function behaves just like rule(), except that it does not output any rule file(s) at project generation time. You may use it to reference a hand-written or pre-existing rule file.
---
---
---@param name string `name` is name of the rule.
---
---<h2>examples</h2>
---
--[[
```lua
externalrule "luac"
  location "../rules"  -- optional; if the file lives somewhere other than the script folder
  filename "lua-to-c"  -- optional; if the file has a name different than the rule
  fileextension ".lua" -- required; which files should be associated with the rule?

  propertydefinition {
    name = "StripDebugInfo",
    kind = "boolean",
  }
```
]]
---
---`fileextension()` is required; this tells Premake which files in the project should be associated with the rule. `location()` is optional, and only needs to be specified if the rule files lives somewhere other than the folder containing the script. Likewise, `filename()` only needs to be specified if the rule file has a different name than the rule itself.
---
---You do not need to specify all of the properties in the rule, only those you intend to set from your project scripts.
---
---The external rule file does not need to exist at the time the workspace is generated.
function externalrule(name) end

--#endregion externalrule
--#region externalwarnings


---@alias externalwarningsValueTypes
---| '"Off"' # Do not show any warning messages.
---| '"Default"' # Use the toolset's default warning level.
---| '"Extra"' # Enable the toolset's maximum warning level.
---| '"High"' # Enable the toolset's maximum warning level.
---| '"Everything"' # Enable the toolset's maximum warning level.

---<h1><a href="https://premake.github.io/docs/externalwarnings">externalwarnings</a></h1>
---Controls the level of warnings that are shown by the compiler for headers that are considered external.
---
--[[
```lua
externalwarnings "value"
```
]]
---
---If no value is set for a configuration, the toolset's default warning level will be used.
---
---
---@param value externalwarningsValueTypes specifies the desired level of warning:
---@see externalanglebrackets
---@see externalincludedirs
---@see warnings
---<h2>examples</h2>
---
--[[
```lua
externalwarnings "Off"
```
]]
function externalwarnings(value) end

--#endregion externalwarnings
--#region fastuptodate


---<h1><a href="https://premake.github.io/docs/fastuptodate">fastuptodate</a></h1>
---fastuptodate - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
fastuptodate (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
fastuptodate (value)
```
]]
function fastuptodate(value) end

--#endregion fastuptodate
--#region fatalwarnings


---@alias fatalwarningsWarningsTypes
---| '"All"' # Treat all compiler warnings as errors

---<h1><a href="https://premake.github.io/docs/fatalwarnings">fatalwarnings</a></h1>
---Specifies specific compiler warnings that should be interpreted as errors.
---
--[[
```lua
fatalwarnings { "warnings" }
```
]]
---
---
---@param warnings fatalwarningsWarningsTypes `warnings` is a list of warnings to interpret as errors.
---@see enablewarnings
---@see disablewarnings
---<h2>examples</h2>
---
--[[
```lua
filter { "toolset:msc" }
	fatalwarnings { "4035" } -- 'function': no return value

filter { "toolset:clang" }
	fatalwarnings { "-Wreturn-type" }

filter {}
```
]]
function fatalwarnings(warnings) end

--#endregion fatalwarnings
--#region fileextension


---<h1><a href="https://premake.github.io/docs/fileextension">fileextension</a></h1>
---Specifies the target file extensions for a custom build rule.
---
--[[
```lua
fileextension "ext"
```
]]
---
---
---@param ext string is the target file extension for the rule, including the leading dot.
---@see rule
---<h2>examples</h2>
---
--[[
```lua
rule "Cg"
  display "Cg Compiler"
  fileextension ".cg"
```
]]
function fileextension(ext) end

--#endregion fileextension
--#region filename


---<h1><a href="https://premake.github.io/docs/filename">filename</a></h1>
---Sets the name of a generated workspace, project, or rules file. Use it in conjunction with location to completely control the generated file destination.
---
--[[
```lua
filename ("name")
```
]]
---
---By default, generated workspace, project, and rule files use their name as the name of the generated file. The `filename` function allows you to change this.
---
---
---@param name string `name` is the desired file name for the generated workspace or project file.
---@see location
---<h2>examples</h2>
---
---Change the workspace name to "Master".
---
--[[
```lua
workspace "MyWorkspace"
  filename "Master"
```
]]
---
---If you plan to build with multiple tools from the same source tree you might want to split up the project files by toolset. The _ACTION global variable contains the current toolset identifier, as specified on the command line.
---
--[[
```lua
workspace "MyWorkspace"
   filename "MyWorkspace_%{_ACTION or ''}"
```
]]
function filename(name) end

--#endregion filename
--#region files


---<h1><a href="https://premake.github.io/docs/files">files</a></h1>
---Adds files to a project.
---
--[[
```lua
files { "file_list" }
```
]]
---
---
---@param file_list string `file_list` specifies one or more file patterns.
---@see vpaths
---<h2>examples</h2>
---
---Add two files from to the current project, from the same directory that contains the script.
---
--[[
```lua
files { "hello.cpp", "goodbye.cpp" }
```
]]
---
---Add all C++ files from the **src/** directory to the project.
---
--[[
```lua
files { "src/*.cpp" }
```
]]
---
---Add all C++ files from the **src/** directory and any subdirectories.
---
--[[
```lua
files { "src/**.cpp" }
```
]]
---
---Add files for specific systems; might not work with all exporters.
---
--[[
```lua
filter "system:Windows"
  files { "src/windows/*.h", "src/windows/*.cpp" }

filter "system:MacOSX"
  files { "src/mac/*.h", "src/mac/*.cpp" }
```
]]
function files(file_list) end

--#endregion files
--#region filter


---<h1><a href="https://premake.github.io/docs/filter">filter</a></h1>
---Limits the subsequent build settings to a particular environment.
---
--[[
```lua
filter { "prefix:keywords" }
```
]]
---
---Any settings that appear after this function in the script will be applied only to those contexts that match all of the listed keywords. See below for some usage examples.
---
---
---@param filter string `keywords` is a list of identifiers, prefixed by the field against which they should be tested.
---@see Filters
---<h2>examples</h2>
---
---Define a new symbol which applies only to debug builds.
---
--[[
```lua
workspace "MyWorkspace"
  configurations { "Debug", "Release" }

filter "configurations:Debug"
  defines { "_DEBUG" }
```
]]
---
---If no field prefix is specified in the keyword, "configurations" is used as a default.
---
--[[
```lua
filter "Debug"
  defines { "_DEBUG" }
```
]]
---
---Define a symbol only when targeting Visual Studio 2010.
---
--[[
```lua
filter "action:vs2010"
  defines { "VISUAL_STUDIO_2005" }
```
]]
---
---Wildcards can be used to match multiple terms. Define a symbol for all versions of Visual Studio.
---
--[[
```lua
filter "action:vs*"
  defines { "VISUAL_STUDIO" }
```
]]
---
---The **or** modifier may be used when several values are possible. Define a value just for library targets.
---
--[[
```lua
filter "kind:SharedLib or StaticLib"
  defines { "LIBRARY_TARGET" }
```
]]
---
---When multiple keywords are listed, an implicit **and** is assumed between them. Define compiler options only when using GNU Make and GCC.
---
--[[
```lua
filter { "action:gmake*", "toolset:gcc" }
  buildoptions {
    "-Wall", "-Wextra", "-Werror"
  }
```
]]
---
---If any keyword pattern fails to match the current context, the entire filter is skipped over. Lua's curly bracket list syntax must be used when multiple keywords are present.
---
---Add a suffix to the debug versions of libraries.
---
--[[
```lua
-- (configurations == "Debug") and (kind == SharedLib or kind == "StaticLib")
filter { "Debug", "kind:SharedLib or StaticLib" }
  targetsuffix "_d"

-- Could also be written as
filter { "Debug", "kind:*Lib" }
  targetsuffix "_d"
```
]]
---
---Apply settings based on the presence of a [custom command line option](Command-Line-Arguments.md).
---
--[[
```lua
-- Using an option like --localized
filter "options:localized"
  files { "src/localizations/**" }

-- Using an option like --renderer=opengl
filter "options:renderer=opengl"
  files { "src/opengl/**.cpp" }
```
]]
---
---Although support is currently limited, you may also apply settings to a particular file or set of files. This example sets the build action for all PNG image files.
---
--[[
```lua
filter "files:*.png"
  buildaction "Embed"
```
]]
---
---In the case of files you may also use the **\*\*** wildcard, which will recurse into subdirectories.
---
--[[
```lua
filter "files:**.png"
  buildaction "Embed"
```
]]
---
---You can also use **not** to apply the settings to all environments where the identifier is not set.
---
--[[
```lua
filter "system:not windows"
  defines { "NOT_WINDOWS" }
```
]]
---
---You can combine different prefixes within a single keyword.
---
--[[
```lua
filter "system:windows or language:C#"
```
]]
---
---Finally, you can reset the filter and remove all active keywords by passing the function an empty table.
---
--[[
```lua
filter {}
```
]]
function filter(filter) end

--#endregion filter
--#region flags


---@alias flagsFlag_listTypes
---| '"ExcludeFromBuild"' # Exclude a source code file from the build, for the current configuration.
---| '"FatalCompileWarnings"' # Treat compiler warnings as errors. Deprecated in Premake 5.0.0-beta4. Use `fatalwarnings` API instead.
---| '"FatalLinkWarnings"' # Treat linker warnings as errors.  Deprecated in Premake 5.0.0-beta4. Use `fatalwarnings` API instead.
---| '"FatalWarnings"' # Treat all warnings as errors; equivalent to FatalCompileWarnings, FatalLinkWarnings.  Deprecated in Premake 5.0.0-beta4. Use `fatalwarnings` API instead.
---| '"LinkTimeOptimization"' # Enable link-time (i.e. whole program) optimizations. Deprecated in Premake 5.0.0-beta4. Use `linktimeoptimization` API instead.
---| '"Maps"' # Enable Generate Map File for Visual Studio
---| '"MFC"' # Enable support for Microsoft Foundation Classes. Deprecated in Premake 5.0.0-beta4. Use `mfc` API instead.
---| '"MultiProcessorCompile"' # Enable Visual Studio to use multiple compiler processes when building.
---| '"No64BitChecks"' # Disable 64-bit portability warnings.
---| '"NoBufferSecurityCheck"' # Turn off stack protection checks.
---| '"NoCopyLocal"' # Prevent referenced assemblies from being copied to the target directory (C#)
---| '"NoFramePointer"' # Disable the generation of stack frame pointers.
---| '"NoImplicitLink"' # Disable Visual Studio's default behavior of automatically linking dependent projects.
---| '"NoImportLib"' # Prevent the generation of an import library for a Windows DLL.
---| '"NoIncrementalLink"' # Disable support for Visual Studio's incremental linking feature.
---| '"NoManifest"' # Prevent the generation of a manifest for Windows executables and shared libraries.
---| '"NoMinimalRebuild"' # Disable Visual Studio's [minimal rebuild feature][1].| Visual Studio has deprecated this feature as of vs2015.
---| '"NoPCH"' # Disable precompiled header support. If not specified, the toolset default behavior will be used.
---| '"NoRuntimeChecks"' # Disable Visual Studio's [default stack frame and uninitialized variable checks][2] on debug builds.
---| '"OmitDefaultLibrary"' # Omit the specification of a runtime library in object files.
---| '"RelativeLinks"' # Forces the linker to use relative paths to libraries instead of absolute paths.
---| '"ShadowedVariables"' # Warn when a variable, type declaration, or function is shadowed.
---| '"UndefinedIdentifiers"' # Warn if an undefined identifier is evaluated in an #if directive.
---| '"WPF"' # Mark the project as using Windows Presentation Framework, rather than WinForms.
---| '"DebugEnvsDontMerge"' # Needs documentation
---| '"DebugEnvsInherit"' # Needs documentation

---<h1><a href="https://premake.github.io/docs/flags">flags</a></h1>
---Specifies build flags to modify the compiling or linking process.
---
--[[
```lua
flags { "flag_list" }
```
]]
---
---
---@param flag_list flagsFlag_listTypes `flag_list` is a list of string flag names; see below for a list of valid flags.
---@see fatalwarnings
---@see linktimeoptimization
---@see mfc
---<h2>examples</h2>
---
--[[
```lua
-- Enable link-time (i.e. whole program) optimizations.
flags { "LinkTimeOptimization" }
```
]]
---
---[1]: https://docs.microsoft.com/en-us/cpp/build/reference/gm-enable-minimal-rebuild?view=vs-2017
---[2]: http://msdn.microsoft.com/en-us/library/8wtf2dfz.aspx
function flags(flag_list) end

--#endregion flags
--#region floatabi


---@alias floatabiValueTypes
---| '"soft"' # Compiler will generate library calls for floating-point operations.
---| '"softfp"' # Compiler will generate code using hardware floating-point instructions, but still uses the soft-float calling conventions.
---| '"hard"' # Compiler will generate floating-point instructions using FPU-specific calling conventions.

---<h1><a href="https://premake.github.io/docs/floatabi">floatabi</a></h1>
---Specifies the floating point ABI to use.
---
--[[
```lua
floatabi ("value")
```
]]
---
---
---@param value floatabiValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
floatabi "soft"
```
]]
function floatabi(value) end

--#endregion floatabi
--#region floatingpoint


---@alias floatingpointValueTypes
---| '"Default"' # Use the toolset's floating point settings.
---| '"Fast"' # Enable floating point optimizations at the expense of accuracy.
---| '"Strict"' # Improve floating point consistency at the expense of performance.

---<h1><a href="https://premake.github.io/docs/floatingpoint">floatingpoint</a></h1>
---Specifies the style of floating point math which should be used.
---
--[[
```lua
floatingpoint "value"
```
]]
---
---If no value is set for a configuration, the toolset's default floating point settings will be used.
---
---
---@param value floatingpointValueTypes specifies the desired style of floating point math:
---@see vectorextensions
---<h2>examples</h2>
---
--[[
```lua
floatingpoint "Fast"
```
]]
function floatingpoint(value) end

--#endregion floatingpoint
--#region floatingpointexceptions


---@alias floatingpointexceptionsValueTypes
---| '"on"' # needs documentation.
---| '"off"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/floatingpointexceptions">floatingpointexceptions</a></h1>
---floatingpointexceptions
---
--[[
```lua
floatingpointexceptions "value"
```
]]
---
---
---@param value floatingpointexceptionsValueTypes * `on`  - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
floatingpointexceptions "value"
```
]]
function floatingpointexceptions(value) end

--#endregion floatingpointexceptions
--#region forceincludes


---<h1><a href="https://premake.github.io/docs/forceincludes">forceincludes</a></h1>
---Applies one or more "forced include" files to the project; these includes behave as it they had been injected into the first line of each source file in the project.
---
--[[
```lua
forceincludes  { "files" }
```
]]
---
---
---@param files string `files` specifies a list of files to be force included.
---
---<h2>examples</h2>
---
--[[
```lua
forceincludes { "stdafx.h" }
```
]]
function forceincludes(files) end

--#endregion forceincludes
--#region forceusings


---<h1><a href="https://premake.github.io/docs/forceusings">forceusings</a></h1>
---Applies one or more "forced using" files to the project; these includes behave as it they had been injected into the first line of each source file in the project.
---
--[[
```lua
forceusings  { "files" }
```
]]
---
---
---@param files string `files` specifies a list of files to be force included.
---
---<h2>examples</h2>
---
--[[
```lua
forceusings { "stdafx.h" }
```
]]
function forceusings(files) end

--#endregion forceusings
--#region fpu


---@alias fpuValueTypes
---| '"Software"' # Generate software floating-point emulation code.
---| '"Hardware"' # Generate code for a hardware FPU.

---<h1><a href="https://premake.github.io/docs/fpu">fpu</a></h1>
---Specifies whether to generate code for a hardware FPU.
---
--[[
```lua
fpu "value"
```
]]
---
---
---@param value fpuValueTypes specifies the desired FPU mode:
---@see floatingpoint
---
function fpu(value) end

--#endregion fpu
--#region framework


---<h1><a href="https://premake.github.io/docs/framework">framework</a></h1>
---<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;"><strong>This API is deprecated since 5.0</strong>, please use dotnetframework instead.
---</div>
---
---Selects a .NET framework version.
---
--[[
```lua
framework ("version")
```
]]
---
---This value currently is only applied to Visual Studio 2005 or later, and GNU makefiles using Mono. If no framework is specified the toolset default is used.
---@deprecated
---
---@param version any `version` is one of:
---@see clr
---@see dotnetframework
---<h2>examples</h2>
---
---Use the .NET 3.0 Framework.
---
--[[
```lua
framework "3.0"
```
]]
function framework(version) end

--#endregion framework
--#region frameworkdirs


---<h1><a href="https://premake.github.io/docs/frameworkdirs">frameworkdirs</a></h1>
---frameworkdirs - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
frameworkdirs (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
frameworkdirs (value)
```
]]
function frameworkdirs(value) end

--#endregion frameworkdirs
--#region functionlevellinking


---@alias functionlevellinkingValueTypes
---| '"on"' # needs documentation.
---| '"off"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/functionlevellinking">functionlevellinking</a></h1>
---functionlevellinking
---
--[[
```lua
functionlevellinking "value"
```
]]
---
---
---@param value functionlevellinkingValueTypes * `on`  - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
functionlevellinking "value"
```
]]
function functionlevellinking(value) end

--#endregion functionlevellinking
--#region gccprefix


---<h1><a href="https://premake.github.io/docs/gccprefix">gccprefix</a></h1>
---Sets a prefix to be prepended to commands used by the GCC toolchain.
---
--[[
```lua
gccprefix ("prefix")
```
]]
---
---GCC toolsets, and cross-compilers in particular, typically have some common prefix prepended to all tools in the GCC suite. This prefix will be prepended to all such tools.
---
---Prefixes are usually composed of multiple segments separated by '-', and the prefix should contain the final dash.
---For instance, a toolchain of the style `powerpc-eabi-gcc` should have gccprefix `powerpc-eabi-`.
---
---
---@param prefix string A *gccprefix* string which is to be prepended to the GCC tools.
---
---<h2>examples</h2>
---
---Set a GCC prefix to be prepended to the compiler tools.
---
--[[
```lua
gccprefix "powerpc-eabi-"
```
]]
function gccprefix(prefix) end

--#endregion gccprefix
--#region gitintegration


---@alias gitintegrationValueTypes
---| '"Off"' # Disable git integration.
---| '"Always"' # Run premake on checkout.
---| '"OnNewFiles"' # Run premake only when files are added/removed or if premake script has changed.

---<h1><a href="https://premake.github.io/docs/gitintegration">gitintegration</a></h1>
---Enable git integration to run premake on checkout.
---
--[[
```lua
gitintegration ("value")
```
]]
---
---
---@param value gitintegrationValueTypes 
---
---<h2>examples</h2>
---
---Regenerate autoversion.h with git tag when checkout to another branch.
---
--[[
```lua
gitintegration "Always"

local locationDir = _OPTIONS["to"]

local function autoversion_h()
	local git_tag, errorCode = os.outputof("git describe --tag --always")
	if errorCode == 0 then
		print("git description: ", git_tag)
		local content = io.readfile("src/autoversion.h.in")
		content = content:gsub("${GIT_DESC}", git_tag)

		os.mkdir(locationDir)
		local f, err = os.writefile_ifnotequal(content, path.join(locationDir, "autoversion.h"))

		if (f == 0) then -- file not modified
		elseif (f < 0) then
			error(err, 0)
			return false
		elseif (f > 0) then
			print("Generated autoversion.h...")
		end

		return true
	else
		print("`git describe --tag` failed with error code", errorCode, git_tag)
		return false
	end
end

local have_autoversion_h = autoversion_h()

workspace "MyProject"
	location(locationDir)

	if have_autoversion_h then
		includedirs { locationDir } -- for generated file (autoversion.h)
	end
  -- [..]
```
]]
function gitintegration(value) end

--#endregion gitintegration
--#region group


---<h1><a href="https://premake.github.io/docs/group">group</a></h1>
---Starts a "workspace group", a virtual folder to contain one or more projects.
---
--[[
```lua
group("name")
```
]]
---
---
---@param name string `name` is the name of the virtual folder, as it should appear in the IDE.
---
---<h2>examples</h2>
---
--[[
```lua
workspace "MyWorkspace"

-- put the projects "Tests1" and "Tests2" in a virtual folder named "Tests"

group "Tests"

    project "Tests1"
      -- Tests1 stuff goes here

   project "Tests2"
      -- Tests2 stuff goes here

-- Any project defined after the call to group() will go into that group. The
-- project can be defined in a different script though.

group "Tests"

    include "tests/tests1"
    include "tests/tests2"

-- Groups can be nested with forward slashes, like a file path.

group "Tests/Unit"

-- To "close" a group and put projects back at the root level use
-- an empty string for the name.

group ""

   project "TestHarness"
```
]]
---
---The group value is latched the first time a project is declared but it can be overriden later:
---
--[[
```lua
local prj = project "Tests1"
prj.group = "NotActuallyATest"
```
]]
---
---or
---
--[[
```lua
project("Tests1").group = "NotActuallyATest"
```
]]
function group(name) end

--#endregion group
--#region icon


---<h1><a href="https://premake.github.io/docs/icon">icon</a></h1>
---Specifies the application icon resource.
---
--[[
```lua
icon ("name")
```
]]
---
---Currently, this is only used by Visual Studio C# projects.
---
---
---@param name string `name` is the resource name of the icon.
---
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
   icon "MyProject.ico"
```
]]
function icon(name) end

--#endregion icon
--#region ignoredefaultlibraries


---<h1><a href="https://premake.github.io/docs/ignoredefaultlibraries">ignoredefaultlibraries</a></h1>
---Specifies the default libraries to be ignored for a project.
---
--[[
```lua
ignoredefaultlibraries { "libraries" }
```
]]
---
---
---@param libraries string 'libraries' is a list of library names.
---@see links
---<h2>examples</h2>
---
---Specify `MSVCRT.lib` as a default library to ignore.
---
--[[
```lua
project "MyProject"
  ignoredefaultlibraries { "MSVCRT" }
```
]]
function ignoredefaultlibraries(libraries) end

--#endregion ignoredefaultlibraries
--#region imageoptions


---<h1><a href="https://premake.github.io/docs/imageoptions">imageoptions</a></h1>
---Passes arguments directly to the image tool command line without translation.
---
--[[
```lua
imageoptions { "options" }
```
]]
---
---If a project includes multiple calls to `imageoptions` the lists are concatenated, in the order in which they appear in the script.
---
---Image options are currently only supported for Xbox 360 targets.
---
---
---@param options boolean `options` is a list of image tools flags and options.
---@see deploymentoptions
---@see imagepath
---
function imageoptions(options) end

--#endregion imageoptions
--#region imagepath


---<h1><a href="https://premake.github.io/docs/imagepath">imagepath</a></h1>
---Sets the file name of the deployment image produced by the build.
---
--[[
```lua
imagepath ("path")
```
]]
---
---This value is currently only used by the Xbox 360.
---
---
---@param path string `path` is the full path for the image file, relative to the currently executing script file.
---@see deploymentoptions
---@see imageoptions
---
function imagepath(path) end

--#endregion imagepath
--#region implibdir


---<h1><a href="https://premake.github.io/docs/implibdir">implibdir</a></h1>
---Specifies the import library output directory. Import libraries are generated for Windows DLL projects.
---
--[[
```lua
implibdir ("path")
```
]]
---
---By default, the generated project files will place the import library in the same directory as the compiled binary. The `implibdir` function allows you to change this location.
---
---
---@param path string `path` is the output directory for the library, relative to the currently executing script file.
---@see implibname
---@see implibextension
---@see implibprefix
---@see implibsuffix
---<h2>examples</h2>
---
--[[
```lua
implibdir "../Libraries"
```
]]
function implibdir(path) end

--#endregion implibdir
--#region implibextension


---<h1><a href="https://premake.github.io/docs/implibextension">implibextension</a></h1>
---Specifies the import library file extension. Import libraries are generated for Windows DLL projects.
---
--[[
```lua
implibextension ("ext")
```
]]
---
---By default, the toolset static library file extension will be used (`.lib` with Windows tools, `.a` with GNU tools). The `implibextension` function allows you to change this default.
---
---
---@param ext string `ext` is the new file extension, including the leading dot.
---@see implibname
---@see implibdir
---@see implibprefix
---@see implibsuffix
---<h2>examples</h2>
---
--[[
```lua
implibextension ".mpi"
```
]]
function implibextension(ext) end

--#endregion implibextension
--#region implibname


---<h1><a href="https://premake.github.io/docs/implibname">implibname</a></h1>
---Specifies the import library base file name. Import libraries are generated for Windows DLL projects.
---
--[[
```lua
implibname ("name")
```
]]
---
---By default, the target name will be used as the import library file name. The `implibname` function allows you to change this default.
---
---
---@param name string `name` is the new base file name.
---@see implibdir
---@see implibextension
---@see implibprefix
---@see implibsuffix
---<h2>examples</h2>
---
--[[
```lua
implibname "mytarget"
```
]]
function implibname(name) end

--#endregion implibname
--#region implibprefix


---<h1><a href="https://premake.github.io/docs/implibprefix">implibprefix</a></h1>
---Specifies the import library file name prefix. Import libraries are generated for Windows DLL projects.
---
--[[
```lua
implibprefix ("prefix")
```
]]
---
---By default, the system naming convention will be used: no prefix on Windows, a prefix of `lib` (as in `libMyProject.a`) on other systems. The `implibprefix` function allows you to change this default.
---
---
---@param prefix string `prefix` is the new file name prefix.
---@see implibname
---@see implibdir
---@see implibextension
---@see implibsuffix
---<h2>examples</h2>
---
--[[
```lua
implibprefix "plugin"
```
]]
---
---The prefix may also be set to an empty string for no prefix.
---
--[[
```lua
implibprefix ""
```
]]
function implibprefix(prefix) end

--#endregion implibprefix
--#region implibsuffix


---<h1><a href="https://premake.github.io/docs/implibsuffix">implibsuffix</a></h1>
---Specifies a file name suffix for the import library base file name. Import libraries are generated for Windows DLL projects.
---
--[[
```lua
implibsuffix ("suffix")
```
]]
---
---
---@param suffix string `suffix` is the new filename suffix.
---@see implibname
---@see implibdir
---@see implibextension
---@see implibprefix
---<h2>examples</h2>
---
--[[
```lua
-- Add "-d" to debug versions of files
filter { "configurations:Debug" }
   implibsuffix "-d"
```
]]
function implibsuffix(suffix) end

--#endregion implibsuffix
--#region includedirs


---<h1><a href="https://premake.github.io/docs/includedirs">includedirs</a></h1>
---Specifies the include file search paths for the compiler.
---
--[[
```lua
includedirs { "paths" }
```
]]
---
---
---@param paths string `paths` specifies a list of include file search directories.
---@see libdirs
---<h2>examples</h2>
---
---Define two include file search paths.
---
--[[
```lua
includedirs { "../lua/include", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
includedirs { "../includes/**" }
```
]]
function includedirs(paths) end

--#endregion includedirs
--#region includedirsafter


---<h1><a href="https://premake.github.io/docs/includedirsafter">includedirsafter</a></h1>
---Specifies the include directories to parse last per the toolset ordering and marks the directory as an external include directory.  If the exporter or toolset
---does not support include directory ordering, these directories are added to the external include directory path.
---
--[[
```lua
includedirsafter { "paths" }
```
]]
---
---
---@param paths string `paths` specifies a list of include file search directories.
---@see includedirs
---@see externalincludedirs
---<h2>examples</h2>
---
---Define two include file search paths.
---
--[[
```lua
includedirsafter { "../lua/include", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
includedirsafter { "../includes/**" }
```
]]
function includedirsafter(paths) end

--#endregion includedirsafter
--#region inheritdependencies


---@alias inheritdependenciesValueTypes
---| '"On"' # The project(s) will inherit library dependencies based on the parent project (if any) and project default settings. This is the default behavior.
---| '"Off"' # The project(s) will not inherit any library dependencies. Only explicitly specified dependencies will be linked.

---<h1><a href="https://premake.github.io/docs/inheritdependencies">inheritdependencies</a></h1>
---inheritdependencies
---
--[[
```lua
inheritdependencies "value"
```
]]
---
---For Visual Studio project files, this controls the generation of the `%(AdditionalDependencies)` entry in the list of libraries that a project links.
---
---
---@param value inheritdependenciesValueTypes * `On` - The project(s) will inherit library dependencies based on the parent project (if any) and project default settings.
---
---<h2>examples</h2>
---
--[[
```lua
inheritdependencies "Off"
```
]]
function inheritdependencies(value) end

--#endregion inheritdependencies
--#region inlinesvisibility


---@alias inlinesvisibilityValueTypes
---| '"Default"' # needs documentation
---| '"Hidden"' # needs documentation

---<h1><a href="https://premake.github.io/docs/inlinesvisibility">inlinesvisibility</a></h1>
---inlinesvisibility - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
inlinesvisibility (value)
```
]]
---
---
---@param value inlinesvisibilityValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
inlinesvisibility (value)
```
]]
function inlinesvisibility(value) end

--#endregion inlinesvisibility
--#region inlining


---@alias inliningValueTypes
---| '"Default"' # Allow the compiler to use its default inlining behavior.
---| '"Disabled"' # Turn off inlining entirely.
---| '"Explicit"' # Only inline functions explicitly marked with the `inline` keyword.
---| '"Auto"' # Allow the compiler to inline functions automatically.

---<h1><a href="https://premake.github.io/docs/inlining">inlining</a></h1>
---Tells the compiler when it should inline functions.
---
--[[
```lua
inlining ("value")
```
]]
---
---
---@param value inliningValueTypes `value` is one of:
---
---
function inlining(value) end

--#endregion inlining
--#region intrinsics


---@alias intrinsicsValueTypes
---| '"on"' # Enables intrinsic functions which generate faster, but possibly longer code.
---| '"off"' # Disables intrinsic functions.

---<h1><a href="https://premake.github.io/docs/intrinsics">intrinsics</a></h1>
---Replaces some function calls with intrinsic or otherwise special forms of the function that help your application run faster.
---
---Visual Studio 2017's Description of Intrinsics
---
--[[
```lua
intrinsics "value"
```
]]
---
---
---@param value intrinsicsValueTypes * `on`  - Enables intrinsic functions which generate faster, but possibly longer code.
---
---<h2>examples</h2>
---
--[[
```lua
intrinsics "On"
```
]]
function intrinsics(value) end

--#endregion intrinsics
--#region io.readfile


---@alias io.readfileFilenameTypes
---| '"filename"' # a path to a filename.

---<h1><a href="https://premake.github.io/docs/io.readfile">io.readfile</a></h1>
---read a file's contents as a string.
---
--[[
```lua
io.readfile(filename)
```
]]
---
---get the individual file lines using [[string.explode|string.explode]].
---
---
---@param filename io.readfileFilenameTypes * `filename` - a path to a filename.
---
---
function io.readfile(filename) end

--#endregion io.readfile
--#region io.utf8


---<h1><a href="https://premake.github.io/docs/io.utf8">io.utf8</a></h1>
---Output a UTF-8 encoding sequence ('\239\187\191') to the current output stream.
---
--[[
```lua
io.utf8()
```
]]
---

---
---
function io.utf8() end

--#endregion io.utf8
--#region io.writefile


---@alias io.writefileContentTypes
---| '"filename"' # string name of a file which need not exist.
---| '"content"' # string containing data to put in `filename`.

---<h1><a href="https://premake.github.io/docs/io.writefile">io.writefile</a></h1>
---write `content` to the file at `filename`, which may or may not exist.
---
--[[
```lua
io.writefile(filename, content)
```
]]
---
---
---@param filename any 
---@param content io.writefileContentTypes * `filename` - string name of a file which need not exist.
---
---
function io.writefile(filename, content) end

--#endregion io.writefile
--#region iosfamily


---@alias iosfamilyValueTypes
---| '"iPhone/iPod touch"' # needs documentation
---| '"iPad"' # needs documentation
---| '"Universal"' # needs documentation

---<h1><a href="https://premake.github.io/docs/iosfamily">iosfamily</a></h1>
---iosfamily - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
iosfamily (value)
```
]]
---
---
---@param value iosfamilyValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
iosfamily (value)
```
]]
function iosfamily(value) end

--#endregion iosfamily
--#region isaextensions


---@alias isaextensionsValueTypes
---| '"MOVBE"' # needs documentation
---| '"POPCNT"' # needs documentation
---| '"PCLMUL"' # needs documentation
---| '"LZCNT"' # needs documentation
---| '"BMI"' # needs documentation
---| '"BMI2"' # needs documentation
---| '"F16C"' # needs documentation
---| '"AES"' # needs documentation
---| '"FMA"' # needs documentation
---| '"FMA4"' # needs documentation
---| '"RDRND"' # needs documentation

---<h1><a href="https://premake.github.io/docs/isaextensions">isaextensions</a></h1>
---isaextensions - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
isaextensions (value)
```
]]
---
---
---@param value isaextensionsValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
isaextensions (value)
```
]]
function isaextensions(value) end

--#endregion isaextensions
--#region justmycode


---@alias justmycodeValueTypes
---| '"On"' # Turn on JustMyCode debugging support.
---| '"Off"' # Turn off JustMyCode debugging support.

---<h1><a href="https://premake.github.io/docs/justmycode">justmycode</a></h1>
---Enables or disables Visual Studio Just My Code debugging feature by passing /JMC option to the compiler. This applies only to VS C++ projects.
---
--[[
```lua
justmycode "value"
```
]]
---If no value is set for a configuration, the toolset's default option (usually "On") will be performed.
---
---
---@param value justmycodeValueTypes is one of:
---
---<h2>examples</h2>
---
--[[
```lua
justmycode "Off"
```
]]
function justmycode(value) end

--#endregion justmycode
--#region kind


---@alias kindKindTypes
---| '"ConsoleApp"' # A console or command-line application.
---| '"WindowedApp"' # An application which runs in a desktop window. This distinction does not apply on Linux, but is important on Windows and Mac OS X.
---| '"SharedLib"' # A shared library or DLL.
---| '"StaticLib"' # A static library.
---| '"Makefile"' # A special configuration type which calls out to one or more external commands. The actual type of binary created is unspecified. See [Makefile Projects](Makefile-Projects.md) for more information.
---| '"Utility"' # A configuration which contains only custom build rules.
---| '"None"' # A configuration which is not included in the build. Useful for projects containing only web pages, header files, or support documentation.
---| '"Packaging"' # A configuration type to create .androidproj files, which build the apk in an Android application under Visual Studio. _Note, this was previously `AndroidProj`._
---| '"SharedItems"' # A special configuration type which doesn't contain any build settings of its own, instead using the build settings of any projects that link it.

---<h1><a href="https://premake.github.io/docs/kind">kind</a></h1>
---Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library.
---
--[[
```lua
kind ("kind")
```
]]
---
---
---@param kind kindKindTypes `kind` is one of the following string identifiers:
---
---<h2>examples</h2>
---
---Set the project to build a command-line executable.
---
--[[
```lua
kind "ConsoleApp"
```
]]
---
---Set the project to build a shared library (DLL).
---
--[[
```lua
kind "SharedLib"
```
]]
---
---Build either a static or a shared library, depending on the selected build configuration.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "DebugLib", "DebugDLL", "ReleaseLib", "ReleaseDLL" }

project "MyProject"

   filter "*Lib"
      kind "StaticLib"

   filter "*DLL"
      kind "SharedLib"
```
]]
function kind(kind) end

--#endregion kind
--#region language


---@alias languageLangTypes
---| '"C"' # Built-in; always available
---| '"C++"' # Built-in; always available
---| '"C#"' # Built-in; always available
---| '"F#"' # Built-in; always available

---<h1><a href="https://premake.github.io/docs/language">language</a></h1>
---Sets the programming language used by a project.
---
--[[
```lua
language ("lang")
```
]]
---
---
---@param lang languageLangTypes `lang` is the language identifier.
---
---<h2>examples</h2>
---
---Set the project language to C++.
---
--[[
```lua
language "C++"
```
]]
---
---Set the project language to C#
---
--[[
```lua
language "C#"
```
]]
function language(lang) end

--#endregion language
--#region largeaddressaware


---@alias largeaddressawareValueTypes
---| '"on"' # needs documentation.
---| '"off"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/largeaddressaware">largeaddressaware</a></h1>
---largeaddressaware
---
--[[
```lua
largeaddressaware "value"
```
]]
---
---
---@param value largeaddressawareValueTypes * `on`  - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
largeaddressaware "value"
```
]]
function largeaddressaware(value) end

--#endregion largeaddressaware
--#region libdirs


---<h1><a href="https://premake.github.io/docs/libdirs">libdirs</a></h1>
---Specifies the library search paths for the linker.
---
--[[
```lua
libdirs { "paths" }
```
]]
---
---Library search directories are not well supported by the .NET tools. Visual Studio will change relative paths to absolute, making it difficult to share the generated project. MonoDevelop does not support search directories at all, using only the GAC. In general, it is better to include the full (relative) path to the assembly in links instead. C/C++ projects do not have this limitation.
---
---
---@param paths string `paths` specifies a list of library search directories.
---
---<h2>examples</h2>
---
---Define two library file search paths.
---
--[[
```lua
libdirs { "../lua/libs", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
libdirs { "../libs/**" }
```
]]
function libdirs(paths) end

--#endregion libdirs
--#region linkbuildoutputs


---<h1><a href="https://premake.github.io/docs/linkbuildoutputs">linkbuildoutputs</a></h1>
---Turns on/off the automatic linking of `.obj` files that are output by custom build commands. The default behaviour is to link `.obj` files when they are output by custom build commands.
---
--[[
```lua
linkbuildoutputs "value"
```
]]
---
---
---@param value boolean is a boolean value, i.e.
---@see buildcommands
---@see compilebuildoutputs
---<h2>examples</h2>
---
---Use [custom build commands](Custom-Build-Commands.md) to copy Wavefront .obj model files around without the linker trying to link them:
---
--[[
```lua
filter "**/models/**.obj"
	-- Copy these files into the target directory while preserving the
	-- folder structure.
	buildcommands {
		os.translateCommands '{mkdir} "%{ path.join(cfg.buildtarget.directory, path.getdirectory(file.relpath)) }"',
		os.translateCommands '{copy} "%{ file.relpath }" "%{ path.join(cfg.buildtarget.directory, path.getdirectory(file.relpath)) }"'
	}

	buildoutputs "%{ path.join(cfg.buildtarget.directory, file.relpath) }"

	-- The default behaviour is to link .obj if a custom build command
	-- outputs them, but we don't want that since these are Wavefront .obj
	-- model files and not object files.
	linkbuildoutputs "Off"
```
]]
function linkbuildoutputs(value) end

--#endregion linkbuildoutputs
--#region linker


---@alias linkerValueTypes
---| '"Default"' # uses the toolset platform default linker.
---| '"LLD"' # uses LLVM's LLD linker (supported on `gcc` and `clang` toolsets).

---<h1><a href="https://premake.github.io/docs/linker">linker</a></h1>
---Specifies the linker.
---
--[[
```lua
linker("value")
```
]]
---
---
---@param value linkerValueTypes `value` string, one of:
---
---<h2>examples</h2>
---
---Sets `LLD` as the linker.
---
--[[
```lua
filter { "toolset:clang" }
   linker { "LLD" }
```
]]
function linker(value) end

--#endregion linker
--#region linkerfatalwarnings


---@alias linkerfatalwarningsWarningsTypes
---| '"All"' # Treat all linker warnings as errors

---<h1><a href="https://premake.github.io/docs/linkerfatalwarnings">linkerfatalwarnings</a></h1>
---Specifies specific linker warnings that should be interpreted as errors.
---
--[[
```lua
linkerfatalwarnings { "warnings" }
```
]]
---
---
---@param warnings linkerfatalwarningsWarningsTypes `warnings` is a list of warnings to interpret as errors.
---
---<h2>examples</h2>
---
--[[
```lua
filter { "toolset:msc" }
	fatalwarnings { "4044" } -- unrecognized option 'option'; ignored

filter {}
```
]]
function linkerfatalwarnings(warnings) end

--#endregion linkerfatalwarnings
--#region linkgroups


---@alias linkgroupsValueTypes
---| '"On"' # Turn on link groups.
---| '"Off"' # Turn off link groups.

---<h1><a href="https://premake.github.io/docs/linkgroups">linkgroups</a></h1>
---Turns on or off the linkgroups for option for linked libraries.
---
---Notes:
---
---Projects using GCC or Clang will use order dependent linking by default with the default linker. While it is generally believed to be slower, this option enables order independent linking within a group of libraries by putting them inside of a link-group using the `-Wl,--start-group` and `-Wl,--end-group` linker command line arguments.
---
--[[
```lua
linkgroups ("value")
```
]]
---
---
---@param value linkgroupsValueTypes `value` is one of:
---@see links
---<h2>examples</h2>
---
--[[
```lua
project "A"
    kind "StaticLib"

project "B"
    kind "StaticLib"
    links { "A" }

project "C"
    kind "ConsoleApp"
    links { "A", "B" }
    linkgroups "On"
```
]]
function linkgroups(value) end

--#endregion linkgroups
--#region linkoptions


---<h1><a href="https://premake.github.io/docs/linkoptions">linkoptions</a></h1>
---Passes arguments directly to the linker command line without translation.
---
--[[
```lua
linkoptions { "options" }
```
]]
---
---
---@param options boolean `options` is a list of linker flags and options, specific to a particular linker.
---
---<h2>examples</h2>
---
---Use `pkg-config` style configuration when building on Linux with GCC. Build options are always linker specific and should be targeted to a particular toolset.
---
--[[
```lua
filter { "system:linux", "action:gmake" }
  linkoptions { "`wx-config --libs`" }
```
]]
function linkoptions(options) end

--#endregion linkoptions
--#region links


---<h1><a href="https://premake.github.io/docs/links">links</a></h1>
---Specifies a list of libraries and projects to link against.
---
--[[
```lua
links { "references" }
```
]]
---
---
---@param references number `references` is a list of library and project names.
---
---<h2>examples</h2>
---
---Link against some system libraries.
---
--[[
```lua
filter { "system:windows" }
   links { "user32", "gdi32" }

filter { "system:linux" }
   links { "m", "png" }

filter { "system:macosx" }
   -- OS X frameworks need the extension to be handled properly
   links { "Cocoa.framework", "png" }
```
]]
---
---  In a workspace with two projects, link the library into the executable. Note that the project name is used to specify the link; Premake will automatically figure out the correct library file name and directory and create a project dependency.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   language "C++"

   project "MyExecutable"
      kind "ConsoleApp"
      files "**.cpp"
      links { "MyLibrary" }

   project "MyLibrary"
      kind "SharedLib"
      files "**.cpp"
```
]]
---
---You may specify the linking mechanism explicitly for each library.  To set the link type of a library explicitly, add a `:static` or `:shared` suffix to the library.  Note that this functionality is only available for the `gcc` and `clang` toolsets.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   language "C++"

   project "MyExecutable"
      kind "ConsoleApp"
      files "**.cpp"
      links { "LibraryA:static", "LibraryB:shared" }
```
]]
---
---You may also create links between non-library projects. In this case, Premake will generate a build dependency (the linked project will build first), but not an actual link. In this example, MyProject uses a build dependency to ensure that MyTool gets built first. It then uses MyTool as part of its build process.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   language "C++"

   project "MyProject"
      kind "ConsoleApp"
      files "**.cpp"
      links { "MyTool" }
      prebuildcommands { "MyTool --dosomething" }

   project "MyTool"
      kind "ConsoleApp"
      files "**.cpp"
```
]]
function links(references) end

--#endregion links
--#region linksectiondata


---<h1><a href="https://premake.github.io/docs/linksectiondata">linksectiondata</a></h1>
---Emit each data item in a separate section. This help linker optimizations to remove unused data.
---
--[[
```lua
linksectiondata("value")
```
]]
---
---
---@param value any `value` is one of:
---
---
function linksectiondata(value) end

--#endregion linksectiondata
--#region linksectionfunction


---<h1><a href="https://premake.github.io/docs/linksectionfunction">linksectionfunction</a></h1>
---Emit each function item in a separate section. This help linker optimizations to remove unused data.
---
--[[
```lua
linksectionfunction("value")
```
]]
---
---
---@param value any `value` is one of:
---
---
function linksectionfunction(value) end

--#endregion linksectionfunction
--#region linktimeoptimization

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/linktimeoptimization">linktimeoptimization</a></h1>
---The <strong>linktimeoptimization</strong> function specifies whether or not the toolset should perform link time optimization.
---
--[[
```lua
linktimeoptimization "value"
```
]]
---
---
---
---
function linktimeoptimization() end

--#endregion linktimeoptimization
--#region llvmdir


---<h1><a href="https://premake.github.io/docs/llvmdir">llvmdir</a></h1>
---Specifies a custom LLVM install location for Visual Studio.
---
--[[
```lua
llvmdir "path"
```
]]
---
---
---@param path string specifies a directory containing the LLVM installation.
---
---<h2>examples</h2>
---
--[[
```lua
llvmdir "/path/to/install"
```
]]
function llvmdir(path) end

--#endregion llvmdir
--#region llvmversion


---<h1><a href="https://premake.github.io/docs/llvmversion">llvmversion</a></h1>
---Specifies a version for a custom installation of LLVM for Visual Studio.
---
--[[
```lua
llvmversion "version"
```
]]
---
---
---@param version any specifies the version of the LLVM installation.
---
---<h2>examples</h2>
---
--[[
```lua
llvmversion "16"
```
]]
function llvmversion(version) end

--#endregion llvmversion
--#region locale


---<h1><a href="https://premake.github.io/docs/locale">locale</a></h1>
---Specifies the target locale for the resources in a particular configuration.
---
--[[
```lua
locale "code"
```
]]
---
---This value is currently only used for the Microsoft Visual Studio resource compiler in C/C++ projects.
---
---
---@param code table specifies the desired locale code.
---
---<h2>examples</h2>
---
--[[
```lua
locale "en-GB"
```
]]
function locale(code) end

--#endregion locale
--#region location


---<h1><a href="https://premake.github.io/docs/location">location</a></h1>
---Sets the destination directory for a generated workspace or project file.
---
--[[
```lua
location ("path")
```
]]
---
---By default, workspace and project files are generated into the same directory as the script that defines them. The `location` function allows you to change this location.
---
---Note that unlike other values, `location` does not automatically propagate to the contained projects. Projects will use their default location unless explicitly overridden.
---
---
---@param path string `path` is the directory where the generated files should be stored, specified relative to the currently executing script file.
---
---<h2>examples</h2>
---
---Set the destination directory for a workspace. Setting the location for a project works the same way.
---
--[[
```lua
workspace "MyWorkspace"
  location "../build"
```
]]
---
---If you plan to build with multiple tools from the same source tree you might want to split up the project files by toolset. The [_ACTION](globals/premake_ACTION.md) global variable contains the current toolset identifier, as specified on the command line. Note that Lua syntax requires parenthesis around the function parameters in this case.
---
--[[
```lua
location ("../build/" .. _ACTION)
```
]]
function location(path) end

--#endregion location
--#region makesettings


---<h1><a href="https://premake.github.io/docs/makesettings">makesettings</a></h1>
---Adds arbitrary GNU make markup to a generated Makefile.
---
--[[
```lua
makesettings { "values" }
```
]]
---
---Only used for makefile generating actions.
---
---
---@param values string `values` specifies one or more lines to be written to the Makefile.
---
---<h2>examples</h2>
---
--[[
```lua
makesettings [[
  ifeq ($(strip $(DEVKITPPC)),)
    $(error "DEVKITPPC environment variable is not set")'
  endif
  include $(DEVKITPPC)/wii_rules'
```
]]
function makesettings(values) end

--#endregion makesettings
--#region mfc

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/mfc">mfc</a></h1>
---Sets the version of the MFC libraries to link against.
---
--[[
```lua
mfc "On"
```
]]
---
---
---
---
function mfc() end

--#endregion mfc
--#region namespace


---<h1><a href="https://premake.github.io/docs/namespace">namespace</a></h1>
---Sets the root namespace of a project.
---
--[[
```lua
namespace ("name")
```
]]
---
---By default, the root namespace for a project which match the target (assembly) name. This function allows you to override that default.
---
---Currently, this is only applicable to Visual Studio C# projects.
---
---
---@param name string `name` is the desired root namespace for the project.
---
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
   namespace "MyCompany.MyProject"
```
]]
function namespace(name) end

--#endregion namespace
--#region nativewchar


---@alias nativewcharValueTypes
---| '"Default"' # Use the toolset's default settings.
---| '"On"' # Enable native wide character handling.
---| '"Off"' # Disable native wide character handling.

---<h1><a href="https://premake.github.io/docs/nativewchar">nativewchar</a></h1>
---Enables or disables native wchar (wide character) support by the compiler.
---
--[[
```lua
nativewchar "value"
```
]]
---
---If no value is set for a configuration, the toolset's default wchar support will be used.
---
---
---@param value nativewcharValueTypes specifies the desired state:
---
---<h2>examples</h2>
---
--[[
```lua
nativewchar "Off"
```
]]
function nativewchar(value) end

--#endregion nativewchar
--#region newaction


---@alias newactionDescriptionTypes
---| '"trigger"' # What the user would type on the command line to select the action, e.g. "vs2013".
---| '"shortname"' # A short summary for the help text, e.g. "Visual Studio 2013".
---| '"description"' # A description of the action's result, e.g. "Generate Visual Studio 2013 project files".
---| '"execute"' # A function to be executed when the action is fired.
---| '"targetos"' # If the toolset targets a specific OS, the [identifier](system.md) for that OS.
---| '"valid_kinds"' # The list of [project kinds](kind.md) supported by the action.
---| '"valid_languages"' # The list of [languages](language.md) supported by the action.
---| '"valid_tools"' # The list of [tools](toolset.md) supported by the action.
---| '"toolset"' # Default [tools](toolset.md).
---| '"onStart"' # A callback marking the start of action processing.
---| '"onWorkspace"' # A callback for each workspace specified in the user script.
---| '"onProject"' # A callback for each project specified in the user script.
---| '"onRule"' # A callback for each rule specified in the user script.
---| '"onEnd"' # A callback marking the end of action processing.
---| '"onCleanWorkspace"' # A callback for each workspace, when the clean action is selected.
---| '"onCleanProject"' # A callback for each project, when the clean action is selected.
---| '"onCleanTarget"' # A callback for each target, when the clean action is selected.
---| '"pathVars"' # A map of Premake tokens to toolset specific identifiers.
---| '"aliases"' # A list of action names to alias to this action.
---| '"deprecatedaliases"' # A table containing a mapping of aliases to callbacks to invoke on action invocation and filters containing the deprecated alias. Each value in the deprecatedaliases table is a table optionally containing an "action" and "filter" key. The values in this table are functions taking zero arguments. See the example below.
---| '"Field"' # Description
---| '"os"' # Deprecated, use targetos instead.
---| '"onSolution"' # Deprecated, use onWorkspace instead.

---<h1><a href="https://premake.github.io/docs/newaction">newaction</a></h1>
---Registers a new command-line action argument. For more information, see Command Line Arguments.
---
--[[
```lua
newaction { description }
```
]]
---
---
---@param description newactionDescriptionTypes `description` is a table describing the new action.
---
---<h2>examples</h2>
---
---Register a new action to install the software project.
---
--[[
```lua
newaction {
   trigger     = "install",
   description = "Install the software",
   execute     = function ()
      os.copyfile("bin/debug/myprogram", "/usr/local/bin/myprogram")
   end
}
```
]]
---
---Register a new action with aliases and deprecations.
---
--[[
```lua
newaction {
   trigger           = "myaction",
   description       = "Custom action",
   aliases           = { "myalias", "deprecatedalias" },
   deprecatedaliases = {
      ["deprecatedalias" ] = {
         [ "action" ] = function()
                           p.warn("Use myaction instead of deprecatedalias.") 
                        end,
         [ "filter" ] = function()
                           p.warn("deprecatedalias has been deprecated. Filter on myaction instead.") 
                        end
      }
   }
}
```
]]
function newaction(description) end

--#endregion newaction
--#region newoption


---@alias newoptionDescriptionTypes
---| '"trigger"' # What the user would type on the command line to select the option, e.g. `--name`.
---| '"description"' # A short description of the option, to be displayed in the help text.
---| '"value"' # Optional. If the option needs a value, provides a hint to the user what type of data is expected.
---| '"allowed"' # Optional. A list of key-value pairs listing the allowed values for the option.
---| '"default"' # Optional. Sets the default for this option if not specified on the commandline.
---| '"category"' # Optional. Places the option under a separate header when the user passes `--help`

---<h1><a href="https://premake.github.io/docs/newoption">newoption</a></h1>
---Registers a new command-line option. For more information, see Command Line Arguments.
---
--[[
```lua
newoption { description }
```
]]
---
---
---@param description newoptionDescriptionTypes `description` is a table describing the new option.
---
---<h2>examples</h2>
---
---Register a new option to select a rendering API for a 3D application.
---
--[[
```lua
newoption {
   trigger     = "gfxapi",
   value       = "API",
   description = "Choose a particular 3D API for rendering",
   default     = "opengl",
   category    = "Build Options",
   allowed = {
      { "opengl",    "OpenGL" },
      { "direct3d",  "Direct3D (Windows only)" },
      { "software",  "Software Renderer" }
   }
}
```
]]
function newoption(description) end

--#endregion newoption
--#region nuget


---<h1><a href="https://premake.github.io/docs/nuget">nuget</a></h1>
---Specifies a list of NuGet packages that this project depends on. Only supported in Visual Studio C++ and C# projects.
---
--[[
```lua
nuget { "references" }
```
]]
---
---
---@param references string[] `references` is a list of NuGet package names and versions, where the version is separated from the name with a colon.
---@see nugetsource
---<h2>examples</h2>
---
---Link against some NuGet packages.
---
--[[
```lua
project "foo"
   nuget { "sdl2.v140:2.0.4", "sdl2.v140.redist:2.0.4" }
```
]]
function nuget(references) end

--#endregion nuget
--#region nugetsource


---<h1><a href="https://premake.github.io/docs/nugetsource">nugetsource</a></h1>
---Used to specify the NuGet package source. Only NuGet "galleries" are currently supported. Defaults to the official NuGet Gallery at nuget.org.
---
--[[
```lua
nugetsource "url"
```
]]
---
---
---@param url any is the NuGet v3 feed URL.
---@see nuget
---<h2>examples</h2>
---
--[[
```lua
nugetsource "https://api.nuget.org/v3/index.json"
```
]]
function nugetsource(url) end

--#endregion nugetsource
--#region objdir


---<h1><a href="https://premake.github.io/docs/objdir">objdir</a></h1>
---Sets the directory where object and other intermediate files should be placed when building a project.
---
--[[
```lua
objdir ("path")
```
]]
---
---By default, intermediate files will be stored in a directory named "obj" in the same directory as the project. The `objdir` function allows you to change this location.
---
---To avoid conflicts between build configurations, Premake will ensure that each intermediate directory is unique by appending one or more of the build configuration name, platform name, or project name. You may use the "!" prefix to prevent this behavior, and allow overlapping intermediate directories. See the examples below for more information.
---
---
---@param path number `path` is the directory where the object and intermediate files should be stored, specified relative to the currently executing script file.
---
---<h2>examples</h2>
---
---Use a directory named "obj" (the default) for intermediate files. Actual directories will be `obj/Debug` and `obj/Release`.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }

project "MyProject"
   objdir "obj"
```
]]
---
---Use a directory named "obj" (the default) for intermediate files. Actual directories will be `obj/Debug/x32`, `obj/Debug/x64`, `obj/Release/x32`, and `obj/Release/x64`.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   platforms { "x32", "x64" }

project "MyProject"
   objdir "obj"
```
]]
---
---Use tokens to reformat the path. Since the end result is unique, Premake will not append any extra directories. Actual directories will be `obj/x32_Debug`, `obj/x64_Debug`, `obj/x32_Release`, and `obj/x64_Release`.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   platforms { "x32", "x64" }

project "MyProject"
   objdir "obj/%{cfg.platform}_%{cfg.buildcfg}"
```
]]
---
---Use the "!" prefix to force a specific directory using Visual Studio's provided environment variables instead of Premake tokens.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   platforms { "x32", "x64" }

project "MyProject"
   objdir "!obj/$(Platform)_$(Configuration)"
```
]]
function objdir(path) end

--#endregion objdir
--#region omitframepointer


---@alias omitframepointerValueTypes
---| '"Default"' # Use the compiler's default behavior.
---| '"On"' # Omit the frame pointer.
---| '"Off"' # Keep the frame pointer.

---<h1><a href="https://premake.github.io/docs/omitframepointer">omitframepointer</a></h1>
---Controls whether the frame pointer is omitted during compilation.
---
--[[
```lua
omitframepointer (value)
```
]]
---
---
---@param value omitframepointerValueTypes `value` is one of:
---
---<h2>examples</h2>
---
---Keep frame pointer in debug builds for better stack traces:
--[[
```lua
filter "configurations:Debug"
    omitframepointer "Off"
```
]]
---
---Omit frame pointer in release builds:
--[[
```lua
filter "configurations:Release"
    omitframepointer "On"
```
]]
---
---Use compiler defaults across all configurations:
--[[
```lua
omitframepointer "Default"
```
]]
function omitframepointer(value) end

--#endregion omitframepointer
--#region openmp


---@alias openmpValueTypes
---| '"On"' # Turn on OpenMP.
---| '"Off"' # Turn off OpenMP.

---<h1><a href="https://premake.github.io/docs/openmp">openmp</a></h1>
---Enables or disables OpenMP.
---
--[[
```lua
openmp "value"
```
]]
---If no value is set for a configuration, the toolset's default OpenMP option (usually "Off") will be performed.
---
---
---@param value openmpValueTypes is one of:
---
---<h2>examples</h2>
---
--[[
```lua
openmp "On"
```
]]
function openmp(value) end

--#endregion openmp
--#region optimize

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/optimize">optimize</a></h1>
---The <strong>optimize</strong> function specifies the level and type of optimization used while building the target configuration.
---
--[[
```lua
optimize "value"
```
]]
---
---If no value is set for a configuration, the toolset's default optimization (usually none) will be performed.
---
---
---
---<h2>examples</h2>
---
--[[
```lua
optimize "Speed"
```
]]
function optimize() end

--#endregion optimize
--#region pchheader


---<h1><a href="https://premake.github.io/docs/pchheader">pchheader</a></h1>
---Specifies the #include form of the precompiled header file name.
---
--[[
```lua
pchheader ("name.h")
```
]]
---
---See Precompiled Headers for more information.
---
---
---@param name string `name.h` is the name of the precompiled header, as it is specified in the #include statements of the project source code.
---@see pchsource
---
function pchheader(name) end

--#endregion pchheader
--#region pchsource


---<h1><a href="https://premake.github.io/docs/pchsource">pchsource</a></h1>
---Specifies the C/C++ source code file which controls the compilation of the header.
---
--[[
```lua
pchsource ("sourcefile.cpp")
```
]]
---
---See Precompiled Headers for more information.
---
---
---@param sourcefile string `sourcefile.cpp` is the name of the source code which triggers the compilation of the header.
---@see pchheader
---
function pchsource(sourcefile) end

--#endregion pchsource
--#region pic

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/pic">pic</a></h1>
---Enable generation of position independent code.
---
--[[
```lua
pic "value"
```
]]
---
---Position Independent Code is required when building dynamic libraries, or static lib's that will be linked to dynamic libraries. PIC will be enabled by default when building dynamic libraries. It will be disabled by default otherwise.
---
---
---
---
function pic() end

--#endregion pic
--#region platforms


---<h1><a href="https://premake.github.io/docs/platforms">platforms</a></h1>
---Specifies a set of build platforms, which act as another configuration axis when building.
---
--[[
```lua
platforms { "names" }
```
]]
---
---The platforms listed here are just names to be displayed in the IDE, with no intrinsic meaning. A platform named "x86_64" will not create a 64-bit build; the appropriate architecture still must be specified. For more information, see Configurations and Platforms.
---
---
---@param names string `names` is a list of platform names.
---@see configurations
---@see defaultplatform
---<h2>examples</h2>
---
---Specify debug and release configurations for a workspace, with static and shared library "platforms" in 32- and 64-bit variations.
---
--[[
```lua
workspace "MyWorkspace"
  configurations { "Debug", "Release" }
  platforms { "Static32", "Shared32", "Static64", "Shared64" }

  filter "platforms:Static32"
    kind "StaticLib"
    architecture "x32"

  filter "platforms:Static64"
    kind "StaticLib"
    architecture "x64"

  filter "platforms:Shared32"
    kind "SharedLib"
    architecture "x32"

  filter "platforms:Shared64"
    kind "SharedLib"
    architecture "x64"
```
]]
function platforms(names) end

--#endregion platforms
--#region postbuildcommands


---<h1><a href="https://premake.github.io/docs/postbuildcommands">postbuildcommands</a></h1>
---Specifies shell commands to run after build is finished.
---
--[[
```lua
postbuildcommands { "commands" }
```
]]
---
---
---@param commands any `commands` is one or more shell commands.
---@see Tokens
---@see Tokens
---@see prebuildcommands
---@see prelinkcommands
---<h2>examples</h2>
---
--[[
```lua
postbuildcommands { "{COPYFILE} %[default.config] %[bin/project.config]" }
```
]]
function postbuildcommands(commands) end

--#endregion postbuildcommands
--#region postbuildmessage


---<h1><a href="https://premake.github.io/docs/postbuildmessage">postbuildmessage</a></h1>
---Specifies a message to display to the user before starting execution of any specified post-build commands.
---
--[[
```lua
postbuildmessage ("message")
```
]]
---
---
---@param message any `message` is the message to be displayed.
---@see Tokens
---@see postbuildcommands
---@see prebuildmessage
---@see prelinkmessage
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
   postbuildcommands { "{COPYFILE} %[dependencies/*.lib] %[bin]" }
   postbuildmessage "Copying dependencies..."
```
]]
function postbuildmessage(message) end

--#endregion postbuildmessage
--#region prebuildcommands


---<h1><a href="https://premake.github.io/docs/prebuildcommands">prebuildcommands</a></h1>
---Specifies shell commands to run before each build.
---
--[[
```lua
prebuildcommands { "commands" }
```
]]
---
---
---@param commands any `commands` is one or more shell commands.
---@see Tokens
---@see postbuildcommands
---@see prelinkcommands
---<h2>examples</h2>
---
--[[
```lua
prebuildcommands { "{COPYFILE} %[default.config] %[bin/project.config]" }
```
]]
function prebuildcommands(commands) end

--#endregion prebuildcommands
--#region prebuildmessage


---<h1><a href="https://premake.github.io/docs/prebuildmessage">prebuildmessage</a></h1>
---Specifies a message to display to the user before starting execution of any specified pre-build commands.
---
--[[
```lua
prebuildmessage ("message")
```
]]
---
---
---@param message any `message` is the message to be displayed.
---@see Tokens
---@see prebuildcommands
---@see postbuildmessage
---@see prelinkmessage
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
   prebuildcommands { "{COPYFILE} %[dependencies/*.lib] %[bin]" }
   prebuildmessage "Copying dependencies..."
```
]]
function prebuildmessage(message) end

--#endregion prebuildmessage
--#region preferredtoolarchitecture


---@alias preferredtoolarchitectureValueTypes
---| '"Default"' # needs documentation.
---| '"x86"' # needs documentation.
---| '"x86_64"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/preferredtoolarchitecture">preferredtoolarchitecture</a></h1>
---preferredtoolarchitecture
---
--[[
```lua
preferredtoolarchitecture "value"
```
]]
---
---
---@param value preferredtoolarchitectureValueTypes * `Default` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
preferredtoolarchitecture "value"
```
]]
function preferredtoolarchitecture(value) end

--#endregion preferredtoolarchitecture
--#region prelinkcommands


---<h1><a href="https://premake.github.io/docs/prelinkcommands">prelinkcommands</a></h1>
---Specifies shell commands to run after the source files have been compiled, but before the link step (if unsupported by the action, it will be treated the same as prebuildcommands).
---
--[[
```lua
prelinkcommands { "commands" }
```
]]
---
---
---@param commands any `commands` is one or more shell commands.
---@see Tokens
---@see prelinkmessage
---@see prebuildcommands
---@see postbuildcommands
---@see Tokens
---<h2>examples</h2>
---
--[[
```lua
prelinkcommands { "{COPYFILE} %[default.config] %[bin/project.config]" }
```
]]
function prelinkcommands(commands) end

--#endregion prelinkcommands
--#region prelinkmessage


---<h1><a href="https://premake.github.io/docs/prelinkmessage">prelinkmessage</a></h1>
---Specifies a message to display to the user before starting execution of any specified pre-link commands.
---
--[[
```lua
prelinkmessage ("message")
```
]]
---
---
---@param message any `message` is the message to be displayed.
---@see Tokens
---@see prelinkcommands
---@see prebuildmessage
---@see postbuildmessage
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
   prelinkcommands { "{COPYFILE} %[dependencies/*.lib] %[bin]" }
   prelinkmessage "Copying dependencies..."
```
]]
function prelinkmessage(message) end

--#endregion prelinkmessage
--#region profile

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/profile">profile</a></h1>
---Enable or disable instrumented performance profiling support for binaries.
---
--[[
```lua
profile "value"
```
]]
---
---
---
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
    kind "ConsoleApp"
    profile "On"
```
]]
function profile() end

--#endregion profile
--#region project


---<h1><a href="https://premake.github.io/docs/project">project</a></h1>
---Creates a new project within the scope of a workspace.  After a project is invoked, any previous filter settings are cleared (i.e., reset).
---
--[[
```lua
project ("name")
```
]]
---
---Projects contain all of the settings necessary to build a single binary target, and are synonymous with a Visual Studio project. These settings include the list of source code files, the programming language used by those files, compiler flags, include directories, and which libraries to link against.
---
---Every project belongs to a workspace.
---
---
---@param name string `name` is the name for the project, which must be unique within the workspace which contains the project.
---@see group
---@see configuration
---@see location
---@see filename
---<h2>examples</h2>
---
---Create a new project named "MyProject". Note that a workspace must exist to contain the project. The indentation is for readability and is optional.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }

project "MyProject"
   kind "ConsoleApp"
   language "C++"
```
]]
function project(name) end

--#endregion project
--#region propertydefinition

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/propertydefinition">propertydefinition</a></h1>
---Creates a new property for a custom rule.
---
--[[
```lua
propertydefinition {
  name = "name",
  kind = "kind",
  display = "label",
  description = "message"
}
```
]]
---
---Custom rules, and therefore property definitions, are currently only supported for Visual Studio 2010+.
---
---
---
---<h2>examples</h2>
---
---A simple boolean property to control a switch.
---
--[[
```lua
propertydefinition {
  name = "DebuggingSymbols",
  kind = "boolean",
  display = "Debugging Symbols",
  description = "Add debugging information to the generated output",
  value = false,
  switch = "-g"
}
```
]]
---
---To use this property in the rule:
---
--[[
```lua
-- If set to true, evaluates to: `tool.exe -g`
buildcommand "tool.exe [DebuggingSymbols]"
```
]]
---
---Enum properties allow selection from a list of possible values.
---
--[[
```lua
propertydefinition {
  name = "OptimizationLevel",
  display = "Optimization Level",
  values = {
    [0] = "None",
    [1] = "Size",
    [2] = "Speed",
  },
  switch = {
    [0] = "-O0",
    [1] = "-O1",
    [2] = "-O3",
  },
  value = 2,
}
```
]]
---
---Enum properties are set using the value names.
---
--[[
```lua
filter "configurations:Release"
  myCustomRuleVars { OptimizationLevel = "None" }
```
]]
function propertydefinition() end

--#endregion propertydefinition
--#region rebuildcommands


---<h1><a href="https://premake.github.io/docs/rebuildcommands">rebuildcommands</a></h1>
---Specifies one or more shell commands to be executed to rebuild a Makefile project.
---
--[[
```lua
rebuildcommands { "commands" }
```
]]
---
---
---@param commands table `commands` specifies a list of one or more shell commands to be executed.
---@see buildcommands
---@see buildmessage
---@see buildoutputs
---@see cleancommands
---<h2>examples</h2>
---
---Use a [Makefile project](Makefile-Projects.md) to execute an external makefile.
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }

project "MyProject"
   kind "Makefile"

   buildcommands {
      "make %{cfg.buildcfg}"
   }

   rebuildcommands {
      "make %{cfg.buildcfg} rebuild"
   }

   cleancommands {
      "make clean %{cfg.buildcfg}"
   }
```
]]
function rebuildcommands(commands) end

--#endregion rebuildcommands
--#region remotedeploydir


---<h1><a href="https://premake.github.io/docs/remotedeploydir">remotedeploydir</a></h1>
---Directory on the remote machine where the project will be deployed to.
---
--[[
```lua
remoteprojectdir ("path")
```
]]
---
---
---@param path string  `path` specifies the directory on the remote machine where the project is deployed
---
---<h2>examples</h2>
---
--[[
```lua
remoteprojectdir "$(RemoteProjectDir)"
```
]]
function remotedeploydir(path) end

--#endregion remotedeploydir
--#region remoteprojectdir


---<h1><a href="https://premake.github.io/docs/remoteprojectdir">remoteprojectdir</a></h1>
---Project directory as seen by the Windows Subsystem for Linux shell.
---
--[[
```lua
remoteprojectdir ("path")
```
]]
---
---
---@param path string  `path` specifies the directory on the remote machine that WSL sees the project in
---
---<h2>examples</h2>
---
--[[
```lua
remoteprojectdir "$(RemoteRootDir)/$(ProjectName)"
```
]]
function remoteprojectdir(path) end

--#endregion remoteprojectdir
--#region remoteprojectrelativedir


---<h1><a href="https://premake.github.io/docs/remoteprojectrelativedir">remoteprojectrelativedir</a></h1>
---Specifies the subdirectory on the remote machine to copy each project's source code to.
---
--[[
```lua
remoteprojectrelativedir ("path")
```
]]
---
---
---@param path string  `path` specifies the directory on the remote machine where the source files of a single project will be copied to before compiling, relative to the root path
---
---<h2>examples</h2>
---
--[[
```lua
remoteprojectrelativedir "%{prj.name}"
```
]]
function remoteprojectrelativedir(path) end

--#endregion remoteprojectrelativedir
--#region remoterootdir


---<h1><a href="https://premake.github.io/docs/remoterootdir">remoterootdir</a></h1>
---Specifies the base directory on the remote machine to deploy the source code to before compiling.
---
--[[
```lua
remoterootdir ("path")
```
]]
---
---
---@param path string  `path` specifies the directory on the remote machine where the source files will be copied to before compiling
---
---<h2>examples</h2>
---
--[[
```lua
remoterootdir "~/projects/%{prj.name}"
```
]]
function remoterootdir(path) end

--#endregion remoterootdir
--#region removeunreferencedcodedata


---@alias removeunreferencedcodedataValueTypes
---| '"on"' # Enables `RemoveUnreferencedCodeData`.
---| '"off"' # Disables `RemoveUnreferencedCodeData`.

---<h1><a href="https://premake.github.io/docs/removeunreferencedcodedata">removeunreferencedcodedata</a></h1>
---Sets the `RemoveUnreferencedCodeData` property for a configuration or all configurations within a project or workspace, adding or removing the `/Zc:inline[-]` build option.
---
---/Zc:inline (Remove unreferenced COMDAT)
---
---If this property is unset, it defaults to `true` in Visual Studio.
---
--[[
```lua
removeunreferencedcodedata ("value")
```
]]
---
---
---@param value removeunreferencedcodedataValueTypes `value` one of:
---
---<h2>examples</h2>
---
--[[
```lua
RemoveUnreferencedCodeData "Off"
```
]]
function removeunreferencedcodedata(value) end

--#endregion removeunreferencedcodedata
--#region resdefines


---<h1><a href="https://premake.github.io/docs/resdefines">resdefines</a></h1>
---Specifies preprocessor symbols for the resource compiler.
---
--[[
```lua
resdefines { "symbols" }
```
]]
---
---
---@param symbols table `symbols` specifies a list of symbols to be defined.
---
---<h2>examples</h2>
---
---Define two new symbols in the current project.
---
--[[
```lua
resdefines { "DEBUG", "TRACE" }
```
]]
---
---Symbols may also assign values.
---
--[[
```lua
resdefines { "CALLSPEC=__dllexport" }
```
]]
function resdefines(symbols) end

--#endregion resdefines
--#region resincludedirs


---<h1><a href="https://premake.github.io/docs/resincludedirs">resincludedirs</a></h1>
---Specifies the include file search paths for the resource compiler.
---
--[[
```lua
resincludedirs { "paths" }
```
]]
---
---
---@param paths string `paths` specifies a list of include file search directories.
---
---<h2>examples</h2>
---
---Define two include file search paths.
---
--[[
```lua
resincludedirs { "../lua/include", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
resincludedirs { "../includes/**" }
```
]]
function resincludedirs(paths) end

--#endregion resincludedirs
--#region resoptions


---<h1><a href="https://premake.github.io/docs/resoptions">resoptions</a></h1>
---Passes arguments directly to the resource compiler command line without translation.
---
--[[
```lua
resoptions { "options" }
```
]]
---
---
---@param options boolean `options` is a list of resource compiler flags and options, specific to a particular compiler.
---
---<h2>examples</h2>
---
---Use `pkg-config` style configuration when building on Linux with GCC. Build options are always compiler specific and should be targeted to a particular toolset.
---
--[[
```lua
filter { "system:linux", "action:gmake" }
  resoptions { "`wx-config --cxxflags`", "-ansi", "-pedantic" }
```
]]
function resoptions(options) end

--#endregion resoptions
--#region resourcegenerator


---@alias resourcegeneratorValueTypes
---| '"internal"' # needs documentation.
---| '"public"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/resourcegenerator">resourcegenerator</a></h1>
---resourcegenerator
---
--[[
```lua
resourcegenerator "value"
```
]]
---
---
---@param value resourcegeneratorValueTypes * `internal` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
resourcegenerator "value"
```
]]
function resourcegenerator(value) end

--#endregion resourcegenerator
--#region rtti


---@alias rttiValueTypes
---| '"Default"' # Use the toolset's default setting for run-time type information.
---| '"On"' # Turn on RTTI.
---| '"Off"' # Turn off RTTI.

---<h1><a href="https://premake.github.io/docs/rtti">rtti</a></h1>
---Enable or disable run-time type information.
---
--[[
```lua
rtti ("value")
```
]]
---
---
---@param value rttiValueTypes `value` is one of:
---@see exceptionhandling
---
function rtti(value) end

--#endregion rtti
--#region rule


---<h1><a href="https://premake.github.io/docs/rule">rule</a></h1>
---Creates a new custom rule, and makes it the active configuration scope.
---
--[[
```lua
rule ("name")
```
]]
---
---Rules contain the settings and property definitions for a single custom rule file. These settings include the target file extension, the command line format, and the build inputs and outputs.
---
---
---@param name string `name` is the name for the rule, which must be unique for each rule specified.
---@see externalrule
---@see propertydefinition
---@see rules
---<h2>examples</h2>
---
---Create a new rule named "luac". For a more complete example, see [Custom Rules](Custom-Rules.md).
---
--[[
```lua
rule "luac"
  fileExtension ".lua"
```
]]
function rule(name) end

--#endregion rule
--#region rules


---<h1><a href="https://premake.github.io/docs/rules">rules</a></h1>
---Imports one or more custom rules into a project.
---
--[[
```lua
rules { "rule_names" }
```
]]
---
---
---@param rule_names string `rule_names` specifies a list of one or more names of custom rules, which must be defined elsewhere in the project scripts.
---@see rule
---
function rules(rule_names) end

--#endregion rules
--#region runcodeanalysis


---<h1><a href="https://premake.github.io/docs/runcodeanalysis">runcodeanalysis</a></h1>
---Runs code analysis during the build process for Visual Studio projects.
---
---The `runcodeanalysis` option enforces code analysis during the build process in Visual Studio projects. This may significantly increase build time for projects.
---
--[[
```lua
runcodeanalysis("value")
```
]]
---
---
---@param value any `value` is one of:
---@see clangtidy
---<h2>examples</h2>
---
---Run clang-tidy code analysis during the build process.
---
--[[
```lua
clangtidy("On")
runcodeanalysis("On")
```
]]
function runcodeanalysis(value) end

--#endregion runcodeanalysis
--#region runpathdirs


---<h1><a href="https://premake.github.io/docs/runpathdirs">runpathdirs</a></h1>
---Specifies the runtime search paths used by the runtime shared library dynamic loader. OSX and Linux-specific.
---
--[[
```lua
runpathdirs { "paths" }
```
]]
---
---
---@param paths string `paths` specifies a list of runtime search path directories used by shared library dynamic loader.
---
---
function runpathdirs(paths) end

--#endregion runpathdirs
--#region runtime


---<h1><a href="https://premake.github.io/docs/runtime">runtime</a></h1>
---Choose the type of runtime library to use.
---
--[[
```lua
runtime ("type")
```
]]
---
---If the runtime type is not set, Premake will try to determine the configuration type based on the setting of symbol generation and optimization flags and use the appropriate runtime automatically.
---
---
---@param type string `type` is a string value, one of "Debug" or "Release".
---
---<h2>examples</h2>
---
---Force selection of a release runtime.
---
--[[
```lua
filter { "configurations:Debug" }
   symbols "On"
   runtime "Release"
```
]]
function runtime(type) end

--#endregion runtime
--#region sanitize


---@alias sanitizeValue_listTypes
---| '"Address"' # Enables compiler support for AddressSanitizer (ASan). | Visual Studio support starts with 2019 16.9
---| '"Fuzzer"' # Enables support for LibFuzzer, a coverage-guided fuzzing library. | Unsupported with GCC. Visual Studio support starts with 2019 16.9
---| '"Thread"' # Enables compiler support for ThreadSanitizer (TSan). | GCC & Clang only
---| '"UndefinedBehavior"' # Enables compiler support for UndefinedBehaviorSanitizer (UBSan). | GCC & Clang only

---<h1><a href="https://premake.github.io/docs/sanitize">sanitize</a></h1>
---Enables various `fsanitize` options for compilers.
---
--[[
```lua
sanitize { "value_list" }
```
]]
---
---
---@param value_list sanitizeValue_listTypes `value_list` specifies the desired `fsanitize` options to enable.
---
---<h2>examples</h2>
---
--[[
```lua
sanitize { "Address", "Fuzzer" }
```
]]
function sanitize(value_list) end

--#endregion sanitize
--#region scanformoduledependencies


---@alias scanformoduledependenciesValueTypes
---| '"on"' # , `yes`, `true` - Sets the option to `Yes`.
---| '"off"' # , `no`, `false` - Sets the option to `No`.

---<h1><a href="https://premake.github.io/docs/scanformoduledependencies">scanformoduledependencies</a></h1>
---Enables the `Scan Sources for Module Dependencies` option for Visual Studio projects.
---
--[[
```lua
scanformoduledependencies "value"
```
]]
---
---
---@param value scanformoduledependenciesValueTypes * `on`, `yes`, `true` - Sets the option to `Yes`.
---
---<h2>examples</h2>
---
--[[
```lua
scanformoduledependencies "true"
```
]]
function scanformoduledependencies(value) end

--#endregion scanformoduledependencies
--#region shaderassembler


---@alias shaderassemblerValueTypes
---| '"NoListing"' # needs documentation
---| '"AssemblyCode"' # needs documentation
---| '"AssemblyCodeAndHex"' # needs documentation

---<h1><a href="https://premake.github.io/docs/shaderassembler">shaderassembler</a></h1>
---shaderassembler - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderassembler (value)
```
]]
---
---
---@param value shaderassemblerValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
shaderassembler (value)
```
]]
function shaderassembler(value) end

--#endregion shaderassembler
--#region shaderassembleroutput


---<h1><a href="https://premake.github.io/docs/shaderassembleroutput">shaderassembleroutput</a></h1>
---shaderassembleroutput - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderassembleroutput (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shaderassembleroutput (value)
```
]]
function shaderassembleroutput(value) end

--#endregion shaderassembleroutput
--#region shaderdefines


---<h1><a href="https://premake.github.io/docs/shaderdefines">shaderdefines</a></h1>
---shaderdefines - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderdefines (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shaderdefines (value)
```
]]
function shaderdefines(value) end

--#endregion shaderdefines
--#region shaderentry


---<h1><a href="https://premake.github.io/docs/shaderentry">shaderentry</a></h1>
---shaderentry - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderentry (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shaderentry (value)
```
]]
function shaderentry(value) end

--#endregion shaderentry
--#region shaderheaderfileoutput


---<h1><a href="https://premake.github.io/docs/shaderheaderfileoutput">shaderheaderfileoutput</a></h1>
---shaderheaderfileoutput - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderheaderfileoutput (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shaderheaderfileoutput (value)
```
]]
function shaderheaderfileoutput(value) end

--#endregion shaderheaderfileoutput
--#region shaderincludedirs


---<h1><a href="https://premake.github.io/docs/shaderincludedirs">shaderincludedirs</a></h1>
---shaderincludedirs - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderincludedirs (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shaderincludedirs (value)
```
]]
function shaderincludedirs(value) end

--#endregion shaderincludedirs
--#region shadermodel


---@alias shadermodelValueTypes
---| '"2.0"' # Shader Model 2.0
---| '"3.0"' # Shader Model 3.0
---| '"4.0_level_9_1"' # Shader Model 4.0 Level 9_1
---| '"4.0_level_9_3"' # Shader Model 4.0 Level 9_3
---| '"4.0"' # Shader Model 4.0
---| '"4.1"' # Shader Model 4.1
---| '"5.0"' # Shader Model 5.0
---| '"5.1"' # Shader Model 5.1
---| '"rootsig_1.0"' # Root Signature Version 1.0
---| '"rootsig_1.1"' # Root Signature Version 1.1
---| '"6.0"' # Shader Model 6.0
---| '"6.1"' # Shader Model 6.1
---| '"6.2"' # Shader Model 6.2
---| '"6.3"' # Shader Model 6.3
---| '"6.4"' # Shader Model 6.4
---| '"6.5"' # Shader Model 6.5
---| '"6.6"' # Shader Model 6.6

---<h1><a href="https://premake.github.io/docs/shadermodel">shadermodel</a></h1>
---Specifies the shader model.
---
--[[
```lua
shadermodel ("value")
```
]]
---
---
---@param value shadermodelValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
shadermodel ("5.0")
```
]]
function shadermodel(value) end

--#endregion shadermodel
--#region shaderobjectfileoutput


---<h1><a href="https://premake.github.io/docs/shaderobjectfileoutput">shaderobjectfileoutput</a></h1>
---Specifies the output object of compiled HLSL files.
---
--[[
```lua
shaderobjectfileoutput ("path")
```
]]
---
---
---@param path number `path` is the output path of HLSL files that have been compiled into Compiled Shader Objects.
---
---<h2>examples</h2>
---
---This Visual Studio project will compile HLSL files to the shaders folder with a .cso extension.
---
--[[
```lua
shaderobjectfileoutput "shaders/%%(Filename).cso"
```
]]
function shaderobjectfileoutput(path) end

--#endregion shaderobjectfileoutput
--#region shaderoptions


---<h1><a href="https://premake.github.io/docs/shaderoptions">shaderoptions</a></h1>
---shaderoptions - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shaderoptions (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shaderoptions (value)
```
]]
function shaderoptions(value) end

--#endregion shaderoptions
--#region shadertype


---@alias shadertypeValueTypes
---| '"Effect"' # 
---| '"Vertex"' # 
---| '"Pixel"' # 
---| '"Geometry"' # 
---| '"Hull"' # 
---| '"Domain"' # 
---| '"Compute"' # 
---| '"Library"' # 
---| '"Mesh"' # 
---| '"Amplification"' # 
---| '"Texture"' # 
---| '"RootSignature"' # 

---<h1><a href="https://premake.github.io/docs/shadertype">shadertype</a></h1>
---Specifies the type of shader.
---
--[[
```lua
shadertype ("value")
```
]]
---
---
---@param value shadertypeValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
shadertype "Vertex"
```
]]
function shadertype(value) end

--#endregion shadertype
--#region shadervariablename


---<h1><a href="https://premake.github.io/docs/shadervariablename">shadervariablename</a></h1>
---shadervariablename - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
shadervariablename (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
shadervariablename (value)
```
]]
function shadervariablename(value) end

--#endregion shadervariablename
--#region sharedlibtype


---@alias sharedlibtypeValueTypes
---| '"OSXBundle"' # needs documentation.
---| '"OSXFramework"' # needs documentation.
---| '"XCTest"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/sharedlibtype">sharedlibtype</a></h1>
---sharedlibtype
---
--[[
```lua
sharedlibtype "value"
```
]]
---
---
---@param value sharedlibtypeValueTypes * `OSXBundle` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
sharedlibtype "value"
```
]]
function sharedlibtype(value) end

--#endregion sharedlibtype
--#region startproject


---<h1><a href="https://premake.github.io/docs/startproject">startproject</a></h1>
---Specify the startup project for a workspace.
---
--[[
```lua
startproject "name"
```
]]
---
---Startup projects are currently only supported by Visual Studio.
---
---
---@param name string is the name of the startup project.
---
---<h2>examples</h2>
---
--[[
```lua
workspace "MyWorkspace"
    configurations { "Debug", "Release" }
    startproject "MyProject2"

project "MyProject1"
    -- define project 1 here

project "MyProject2"
    -- define project 2 here
```
]]
function startproject(name) end

--#endregion startproject
--#region staticruntime

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/staticruntime">staticruntime</a></h1>
---staticruntime
---
--[[
```lua
staticruntime "value"
```
]]
---
---
---
---<h2>examples</h2>
---
--[[
```lua
staticruntime "on"
```
]]
function staticruntime() end

--#endregion staticruntime
--#region stl


---@alias stlValueTypes
---| '"none"' # Minimal C++ runtime library.
---| '"gabi++"' # C++ runtime library.
---| '"stlport"' # STLport runtime library.
---| '"gnu"' # GNU STL library.
---| '"libc++"' # LLVM libc++ library.

---<h1><a href="https://premake.github.io/docs/stl">stl</a></h1>
---Specifies which C++ Standard Library to use.
---
--[[
```lua
stl ("value")
```
]]
---
---The `staticruntime` API is used to determine if a static or shared version of the STL is used.
---
---
---@param value stlValueTypes `value` is one of:
---@see staticruntime
---<h2>examples</h2>
---
--[[
```lua
stl "libc++"
```
]]
function stl(value) end

--#endregion stl
--#region strictaliasing


---@alias strictaliasingValueTypes
---| '"Off"' # No strict aliasing tests will be performed.
---| '"Level1"' # 
---| '"Level2"' # 
---| '"Level3"' # 

---<h1><a href="https://premake.github.io/docs/strictaliasing">strictaliasing</a></h1>
---Sets the level of allowed pointer aliasing.
---
--[[
```lua
strictaliasing "value"
```
]]
---
---If no value is set for a configuration, the toolset's settings will be used.
---
---
---@param value strictaliasingValueTypes specifies the desired level of optimization:
---
---<h2>examples</h2>
---
--[[
```lua
strictaliasing "Level1"
```
]]
function strictaliasing(value) end

--#endregion strictaliasing
--#region stringpooling


---@alias stringpoolingValueTypes
---| '"on"' # needs documentation.
---| '"off"' # needs documentation.

---<h1><a href="https://premake.github.io/docs/stringpooling">stringpooling</a></h1>
---stringpooling
---
--[[
```lua
stringpooling "value"
```
]]
---
---
---@param value stringpoolingValueTypes * `on`  - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
stringpooling "value"
```
]]
function stringpooling(value) end

--#endregion stringpooling
--#region structmemberalign


---@alias structmemberalignValueTypes
---| '"1"' # 
---| '"2"' # 
---| '"4"' # 
---| '"8"' # 
---| '"16"' # 

---<h1><a href="https://premake.github.io/docs/structmemberalign">structmemberalign</a></h1>
---structmemberalign - Specifies 1, 2, 4, 8, 16-byte boundary for struct member alignment.
---
--[[
```lua
structmemberalign (value)
```
]]
---
---
---@param value structmemberalignValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
structmemberalign (1)
```
]]
function structmemberalign(value) end

--#endregion structmemberalign
--#region swiftversion


---@alias swiftversionValueTypes
---| '"4.0"' # needs documentation
---| '"4.2"' # needs documentation
---| '"5.0"' # needs documentation

---<h1><a href="https://premake.github.io/docs/swiftversion">swiftversion</a></h1>
---swiftversion - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
swiftversion (value)
```
]]
---
---
---@param value swiftversionValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
swiftversion (value)
```
]]
function swiftversion(value) end

--#endregion swiftversion
--#region symbols


---@alias symbolsSwitchTypes
---| '"Default"' # Always available
---| '"Off"' # Always available
---| '"On"' # Always available
---| '"FastLink"' # Visual Studio 2015 or newer
---| '"Full"' # Visual Studio 2017 or newer

---<h1><a href="https://premake.github.io/docs/symbols">symbols</a></h1>
---Turn on/off debug symbol table generation.
---
--[[
```lua
symbols "switch"
```
]]
---
---By default, the generated project files will use the compilers default settings for debug symbol generation. This might be on, or off, or entirely dependent on the configuration.
---
---
---@param switch symbolsSwitchTypes is an identifier for symbol information.
---@see symbolspath
---@see debugformat
---<h2>examples</h2>
---
---This project generates debug symbol information for better debugging.
---
--[[
```lua
project "MyProject"
    symbols "On"
```
]]
function symbols(switch) end

--#endregion symbols
--#region symbolspath


---<h1><a href="https://premake.github.io/docs/symbolspath">symbolspath</a></h1>
---Specify the target location of the debug symbols.
---For the Visual Studio action, this allows you to specify the location and name of the .pdb output.
---
--[[
```lua
symbolspath "filename"
```
]]
---
---Not specifying this option will result in the compilers default behavior.
---
---
---@param filename any the target location of the symbols.
---
---<h2>examples</h2>
---
---This project while specific to Visual Studio shows how to output the .pdb file right next to the lib/exe/dll using the name of the lib/exe/dll itself.
---
--[[
```lua
project "MyProject"
    symbolspath '$(OutDir)$(TargetName).pdb'
```
]]
function symbolspath(filename) end

--#endregion symbolspath
--#region sysincludedirs


---<h1><a href="https://premake.github.io/docs/sysincludedirs">sysincludedirs</a></h1>
---<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;"><strong>This function has been deprecated in Premake 5.0 beta2.</strong> Use the new externalincludedirs function instead. `sysincludedirs` will be not supported in Premake 6.
---</div>
---
---Alias of externalincludedirs.
---
--[[
```lua
sysincludedirs { "paths" }
```
]]
---@deprecated
---
---@param paths string *paths* specifies a list of include file search directories.
---@see externalincludedirs
---<h2>examples</h2>
---
---Define two system include file search paths.
---
--[[
```lua
sysincludedirs { "../lua/include", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
sysincludedirs { "../includes/**" }
```
]]
function sysincludedirs(paths) end

--#endregion sysincludedirs
--#region syslibdirs


---<h1><a href="https://premake.github.io/docs/syslibdirs">syslibdirs</a></h1>
---Specifies the system library search paths.
---
--[[
```lua
syslibdirs { "paths" }
```
]]
---
---For Visual Studio, these paths are placed in the "VC++ Directories" properties panel. For all other tools they are treated as a normal library search path.
---
---
---@param paths string `paths` specifies a list of library search directories.
---@see externalincludedirs
---@see libdirs
---@see sysincludedirs
---<h2>examples</h2>
---
---Define two system library search paths.
---
--[[
```lua
syslibdirs { "../lua/libs", "../zlib" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
syslibdirs { "../libs/**" }
```
]]
function syslibdirs(paths) end

--#endregion syslibdirs
--#region system


---<h1><a href="https://premake.github.io/docs/system">system</a></h1>
---Specifies the target operating system.
---
--[[
```lua
system ("value")
```
]]
---
---If no system is specified, Premake will identify and target the current operating system. This can be overridden with the `--os` command line argument, providing one of the system identifiers below.
---
---
---@param value any `value` is one of:
---@see architecture
---@see _OS
---<h2>examples</h2>
---
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
   system { "Windows", "Unix", "Mac" }

   filter "system:Windows"
      system "windows"

   filter "system:Unix"
      system "linux"

   filter "system:Mac"
      system "macosx"
```
]]
function system(value) end

--#endregion system
--#region systemversion


---<h1><a href="https://premake.github.io/docs/systemversion">systemversion</a></h1>
---Specifies the target operation system min and max versions.
---
--[[
```lua
systemversion ("value")
```
]]
---
---
---@param value string `value` is a colon-delimited string specifying the min and max version, `min:max`.
---@see system
---<h2>examples</h2>
---
--[[
```lua
filter "system:windows"
   systemversion "10.0.10240.0" -- To specify the version of the SDK you want
```
]]
---
--[[
```lua
filter "system:windows"
   systemversion "latest" -- To use the latest version of the SDK available
```
]]
---
--[[
```lua
filter "system:windows"
   systemversion "10.0.10240.0:latest" -- To specify a range of minumum and maximum versions
```
]]
---
--[[
```lua
filter "system:macosx"
   systemversion "13.0" -- To target a minimum macOS deployment version of 13.0
```
]]
function systemversion(value) end

--#endregion systemversion
--#region tags


---<h1><a href="https://premake.github.io/docs/tags">tags</a></h1>
------
---slug: premake-tags  # docusaurus reserves /docs/tags
------
---
---tags
---
--[[
```lua
tags { "string" }
```
]]
---
---See the pull request for more information; help authoring documentation is appreciated!
---
---
---@param string any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
tags { "string" }
```
]]
function tags(string) end

--#endregion tags
--#region tailcalls


---<h1><a href="https://premake.github.io/docs/tailcalls">tailcalls</a></h1>
---tailcalls - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
tailcalls (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
tailcalls (value)
```
]]
function tailcalls(value) end

--#endregion tailcalls
--#region targetbundleextension


---<h1><a href="https://premake.github.io/docs/targetbundleextension">targetbundleextension</a></h1>
---Specifies the bundle extension for the MacOSX bundle.
---
--[[
```lua
targetbundleextension ("ext")
```
]]
---
---By default, the project will use the MacOSX's normal naming conventions: .bundle for OSX Bundles, .framework for OSX Framework, and so on. The `targetbundleextension` function allows you to change this default.
---
---
---@param ext any `ext` is the new bundle extension, including the leading dot.
---@see targetextension
---@see targetname
---@see targetdir
---@see targetprefix
---@see targetsuffix
---<h2>examples</h2>
---
--[[
```lua
targetbundleextension ".zmf"
```
]]
function targetbundleextension(ext) end

--#endregion targetbundleextension
--#region targetdir


---<h1><a href="https://premake.github.io/docs/targetdir">targetdir</a></h1>
---Sets the destination directory for the compiled binary target.
---
--[[
```lua
targetdir ("path")
```
]]
---
---By default, the generated project files will place their compiled output in the same directory as the script. The `targetdir` function allows you to change this location.
---
---
---@param path string `path` is the file system path to the directory where the compiled target file should be stored.
---@see targetname
---@see targetextension
---@see targetprefix
---@see targetsuffix
---<h2>examples</h2>
---
---This project separates its compiled output by configuration type.
---
--[[
```lua
project "MyProject"

  filter { "configurations:Debug" }
    targetdir "bin/debug"

  filter { "configurations:Release" }
    targetdir "bin/release"
```
]]
function targetdir(path) end

--#endregion targetdir
--#region targetextension


---<h1><a href="https://premake.github.io/docs/targetextension">targetextension</a></h1>
---Specifies the file extension for the compiled binary target.
---
--[[
```lua
targetextension ("ext")
```
]]
---
---By default, the project will use the system's normal naming conventions: .exe for Windows executables, .so for Linux shared libraries, and so on. The `targetextension` function allows you to change this default.
---
---
---@param ext string `ext` is the new file extension, including the leading dot.
---@see targetname
---@see targetdir
---@see targetprefix
---@see targetsuffix
---<h2>examples</h2>
---
--[[
```lua
targetextension ".zmf"
```
]]
function targetextension(ext) end

--#endregion targetextension
--#region targetname


---<h1><a href="https://premake.github.io/docs/targetname">targetname</a></h1>
---Specifies the base file name for the compiled binary target.
---
--[[
```lua
targetname ("name")
```
]]
---
---By default, the project name will be used as the file name of the compiled binary target. A Windows executable project named "MyProject" will produce a binary named MyProject.exe. The `targetname` function allows you to change this default.
---
---
---@param name string `name` is the new base file name.
---@see targetdir
---@see targetextension
---@see targetprefix
---@see targetsuffix
---<h2>examples</h2>
---
--[[
```lua
targetname "mytarget"
```
]]
function targetname(name) end

--#endregion targetname
--#region targetprefix


---<h1><a href="https://premake.github.io/docs/targetprefix">targetprefix</a></h1>
---Specifies the file name prefix for the compiled binary target.
---
--[[
```lua
targetprefix ("prefix")
```
]]
---
---By default, the system naming convention will be used: a "lib" prefix for POSIX libraries (as in `libMyProject.so`), and no prefix elsewhere. The `targetprefix` function allows you to change this default.
---
---
---@param prefix string `prefix` is the new file name prefix.
---@see targetname
---@see targetdir
---@see targetextension
---@see targetsuffix
---<h2>examples</h2>
---
--[[
```lua
targetprefix "plugin"
```
]]
---
---The prefix may also be set to an empty string for no prefix.
---
--[[
```lua
targetprefix ""
```
]]
function targetprefix(prefix) end

--#endregion targetprefix
--#region targetsuffix


---<h1><a href="https://premake.github.io/docs/targetsuffix">targetsuffix</a></h1>
---Specifies a file name suffix for the compiled binary target.
---
--[[
```lua
targetsuffix ("suffix")
```
]]
---
---
---@param suffix string `suffix` is the new filename suffix.
---@see targetname
---@see targetdir
---@see targetextension
---@see targetprefix
---<h2>examples</h2>
---
--[[
```lua
-- Add "-d" to debug versions of files
filter { "configurations:Debug" }
   targetsuffix "-d"
```
]]
function targetsuffix(suffix) end

--#endregion targetsuffix
--#region thumbmode


---@alias thumbmodeValueTypes
---| '"thumb"' # Uses the Thumb instruction set.
---| '"arm"' # Uses the ARM instruction set.
---| '"disabled"' # Disables usage of Thumb instruction set.

---<h1><a href="https://premake.github.io/docs/thumbmode">thumbmode</a></h1>
---Specifies whether the code generation uses ARM or Thumb instruction sets.
---
--[[
```lua
thumbmode ("value")
```
]]
---
---
---@param value thumbmodeValueTypes `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
thumbmode "disabled"
```
]]
function thumbmode(value) end

--#endregion thumbmode
--#region toolchainversion


---<h1><a href="https://premake.github.io/docs/toolchainversion">toolchainversion</a></h1>
---Specifies the version of the toolchain to use.
---
--[[
```lua
toolchainversion ("value")
```
]]
---
---
---@param value any `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
toolchainversion "5.0"
```
]]
function toolchainversion(value) end

--#endregion toolchainversion
--#region toolset


---@alias toolsetIdentifierTypes
---| '"clang"' # [Clang](http://clang.llvm.org)
---| '"dotnet"' # The system's default C# compiler
---| '"gcc"' # [GNU Compiler Collection](https://gcc.gnu.org)
---| '"msc"' # Microsoft C/C++ compiler

---<h1><a href="https://premake.github.io/docs/toolset">toolset</a></h1>
---Selects the compiler, linker, etc. which are used to build a project or configuration.
---
--[[
```lua
toolset ("identifier")
```
]]
---
---If no toolset is specified for a configuration, the system or IDE default will be used.
---
---
---@param identifier toolsetIdentifierTypes `identifier` is a string identifier for the toolset.
---
---<h2>examples</h2>
---
---Specify version 110 of the Windows platform toolset.
---
--[[
```lua
toolset "msc-v110" -- or...
toolset "v100"    -- for those more familiar with Visual Studio's way
```
]]
---
---Use [Clang/C2](http://llvm.org/builds/) with Visual Studio
--[[
```lua
toolset "msc-llvm-vs2014" -- pre VS 2019
toolset "clang" -- VS 2019 and newer
```
]]
---
---Use the toolset for Windows XP
--[[
```lua
toolset "v140_xp"
```
]]
function toolset(identifier) end

--#endregion toolset
--#region toolsversion


---<h1><a href="https://premake.github.io/docs/toolsversion">toolsversion</a></h1>
---Selects the tools version which is used to build a project.
---
--[[
```lua
toolsversion ("identifier")
```
]]
---
---If no version is specified for a configuration, the build tool will define the a default version.
---
---
---@param identifier string `identifier` is a string identifier for the toolset version.
---
---<h2>examples</h2>
---
---Specify tool version 14.27.29110 of the toolset.
---
--[[
```lua
toolsversion "14.27.29110"
```
]]
function toolsversion(identifier) end

--#endregion toolsversion
--#region undefines


---<h1><a href="https://premake.github.io/docs/undefines">undefines</a></h1>
---Removes preprocessor or compiler symbols from a project.
---
--[[
```lua
undefines { "symbols" }
```
]]
---
---If a project includes multiple calls to `undefines` the lists are concatenated, in the order in which they appear in the script.
---
---
---@param symbols table `symbols` specifies a list of symbols to be undefined.
---
---<h2>examples</h2>
---
---Undefine two symbols in the current project.
---
--[[
```lua
undefines { "DEBUG", "TRACE" }
```
]]
function undefines(symbols) end

--#endregion undefines
--#region unsignedchar


---<h1><a href="https://premake.github.io/docs/unsignedchar">unsignedchar</a></h1>
---Force sign of `char`
---
--[[
```lua
unsignedchar (value)
```
]]
---
---Note that `char` is still a distinct type from `signed char` and `unsigned char`.
---
---
---@param value any `value` is one of:
---
---<h2>examples</h2>
---
--[[
```lua
unsignedchar "On"
```
]]
function unsignedchar(value) end

--#endregion unsignedchar
--#region usage

---<h1><a href="https://premake.github.io/docs/usage">usage</a></h1>
---Specifies a reusable block of configuration to be consumed at a later point.
---
--[[
```lua
usage 'MyUsage'
```
]]
---
---The `usage` API is used to define configuration to be consumed by the `uses` API.  Usages must have unique names, except for magic usage block names (as described below).
---
---@see uses
---
function usage() end

--#endregion usage
--#region usefullpaths


---@alias usefullpathsValueTypes
---| '"Off"' # Use relative paths in diagnostics
---| '"On"' # Use absolute (full) paths in diagnostics

---<h1><a href="https://premake.github.io/docs/usefullpaths">usefullpaths</a></h1>
---Turn on/off full paths usage in diagnostics
---
--[[
```lua
usefullpaths "value"
```
]]
---
---By default, the generated project files will use the compilers default settings, which is in most cases "On" for debug and "Off" for release.
---In Visual Studio, this overrides the /FC flag which is forced on when using debug builds.
---
---
---@param value usefullpathsValueTypes specifies relative path usage.
---
---<h2>examples</h2>
---
--[[
```lua
project "MyProject"
    usefullpaths "On" -- Uses full paths in diagnostics
```
]]
function usefullpaths(value) end

--#endregion usefullpaths
--#region uses

---<h1><a href="https://premake.github.io/docs/uses">uses</a></h1>
---Specifies which usage blocks a project should consume.
---
--[[
```lua
uses { "ProjectA" }
```
]]
---
---The `uses` API is used to consume `usage` blocks from within a project. The `usage` blocks are case sensitive.
---
---@see usage
---<h2>examples</h2>
---
---Demonstration of using `uses`. When specifying a `uses` matching a project name containing a `PUBLIC` or `INTERFACE` usage block, the `uses` statement will match against that. If a `project` with a `PUBLIC` or `INTERFACE` usage block
---cannot be found, then it will fall back to searching all `usage` blocks to match the provided name, as described above.
---
--[[
```lua
project "MyProject"
    usage "PUBLIC"
        defines { "PUBLIC_DEF" }
    usage "Custom"
        defines { "CUSTOM_DEF" }

project "MyExe"
    uses { "MyProject" }

project "MyDLL"
    uses { "Custom" }
```
]]
function uses() end

--#endregion uses
--#region usestandardpreprocessor


---@alias usestandardpreprocessorValueTypes
---| '"Off"' # Do not use the conforming processor.
---| '"On"' # Enable the conforming processor.

---<h1><a href="https://premake.github.io/docs/usestandardpreprocessor">usestandardpreprocessor</a></h1>
---Enables a token-based preprocessor conforming to C99, C++11, and later standards.
---
--[[
```lua
usestandardpreprocessor 'value'
```
]]
---
---
---@param value usestandardpreprocessorValueTypes is one of:
---
---
function usestandardpreprocessor(value) end

--#endregion usestandardpreprocessor
--#region usingdirs


---<h1><a href="https://premake.github.io/docs/usingdirs">usingdirs</a></h1>
---Specifies the file search paths for `using` statements.
---
--[[
```lua
usingdirs { "paths" }
```
]]
---
---
---@param paths string `paths` specifies a list of file search directories.
---@see includedirs
---<h2>examples</h2>
---
---Define two using file search paths.
---
--[[
```lua
usingdirs { "../lib1", "../lib2" }
```
]]
---
---You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well.
---
--[[
```lua
usingdirs { "../libs/**" }
```
]]
function usingdirs(paths) end

--#endregion usingdirs
--#region uuid


---<h1><a href="https://premake.github.io/docs/uuid">uuid</a></h1>
---Sets the Universally Unique Identifier (UUID) for a project.
---
--[[
```lua
uuid ("project_uuid")
```
]]
---
---UUIDs are synonymous (for Premake's purposes) with Globally Unique Identifiers (GUID).
---
---Premake automatically assigns a UUID to each project, which is used by the Visual Studio generators to identify the project within a workspace. This UUID is essentially random and will change each time the project file is generated. If you are storing the generated Visual Studio project files in a version control system, this will create a lot of unnecessary deltas. Using the `uuid` function, you can assign a fixed UUID to each project which never changes, removing the randomness from the generated projects.
---
---
---@param project_uuid string `project_uuid` is the UUID for the current project.
---
---<h2>examples</h2>
---
---Set the UUID for a current project.
---
--[[
```lua
uuid "BE2461B7-236F-4278-81D3-F0D476F9A4C0"
```
]]
function uuid(project_uuid) end

--#endregion uuid
--#region vectorextensions


---@alias vectorextensionsLevelTypes
---| '"Default"' # Use the toolset's default vector extension settings.
---| '"AVX"' # Use Advanced Vector Extensions.
---| '"AVX2"' # Use Advanced Vector Extensions 2.
---| '"IA32"' # Use Intel Architecture 32-bit
---| '"SSE"' # Use the basic SSE instruction set.
---| '"SSE2"' # Use the SSE2 instruction set.
---| '"SSE3"' # Use the SSE3 instruction set.
---| '"SSSE3"' # Use the SSSE3 instruction set.
---| '"SSE4.1"' # Use the SSE4.1 instruction set.
---| '"SSE4.2"' # Use the SSE4.2 instruction set.
---| '"ALTIVEC"' # Use Altivec (ISA 2.02) instruction set.
---| '"NEON"' # Use the NEON instruction set (Android only)
---| '"MXU"' # Use the XBurst SIMD instructions (Android only)

---<h1><a href="https://premake.github.io/docs/vectorextensions">vectorextensions</a></h1>
---Specifies the level of vector processing extensions to enable while compiling the target configuration.
---
--[[
```lua
vectorextensions "level"
```
]]
---
---If no value is set for a configuration, the toolset's default vector extension settings will be used.
---
---
---@param level vectorextensionsLevelTypes specifies the desired level of vector processing instructions; one of the following:
---@see floatingpoint
---<h2>examples</h2>
---
--[[
```lua
-- Enable SSE2 vector processing
vectorextensions "SSE2"
```
]]
function vectorextensions(level) end

--#endregion vectorextensions
--#region visibility


---@alias visibilitySwitchTypes
---| '"Default"' # gcc
---| '"Hidden"' # gcc
---| '"Internal"' # gcc
---| '"Protected"' # gcc

---<h1><a href="https://premake.github.io/docs/visibility">visibility</a></h1>
---Sets the default visibility for exported symbols in a shared object library.
---
--[[
```lua
visibility "switch"
```
]]
---
---By default, the generated project files will use the compilers default settings symbol visibility when building shared object libraries.
---
---
---@param switch visibilitySwitchTypes is an identifier for symbol information.
---@see visibility
---<h2>examples</h2>
---
---This project hides exported symbols for release builds.
---
--[[
```lua
project "MyProject"
    filter "configurations:Release"
        visibility "Hidden"
```
]]
function visibility(switch) end

--#endregion visibility
--#region vpaths


---<h1><a href="https://premake.github.io/docs/vpaths">vpaths</a></h1>
---Places files into groups or "virtual paths", rather than the default behavior of mirroring the filesystem in IDE-based projects. So you could, for instance, put all header files in a group called "Headers", no matter where they appeared in the source tree.
---
--[[
```lua
vpaths { ["group"] = "pattern(s)" }
```
]]
---
---Note that Lua tables do not maintain any ordering between key-value pairs, so there is no precedence between the supplied rules. That is, you can't write a rule that rewrites the results of an earlier rule, since there is no guarantee in which order the rules will run.
---
---
---@param entry string A list of key/value pairs, specified with Lua's standard syntax, which map file patterns to the group in which they should appear.
---
---<h2>examples</h2>
---
---Place all header files into a virtual path called "Headers". Any directory information is removed, so a path such as `src/lua/lua.h` will appear in the IDE as `Headers/lua.h`.
---
--[[
```lua
vpaths { ["Headers"] = "**.h" }
```
]]
---
---You may also specify multiple file patterns using the table syntax.
---
--[[
```lua
vpaths {
   ["Headers"] = { "**.h", "**.hxx", "**.hpp" }
}
```
]]
---
---It is also possible to include the file's path in the virtual group. Using the same example as above, this rule will appear in the IDE as `Headers/src/lua/lua.h`.
---
--[[
```lua
vpaths { ["Headers/*"] = "**.h" }
```
]]
---
---Any directory information explicitly provided in the pattern will be removed from the replacement. This rule will appear in the IDE as `Headers/lua/lua.h`.
---
--[[
```lua
vpaths { ["Headers/*"] = "src/**.h" }
```
]]
---
---You can also use virtual paths to remove extra directories from the IDE. For instance, this rule will cause the previous example to appear as `lua/lua.h`, removing the `src` part of the path from *all* files.
---
--[[
```lua
vpaths { ["*"] = "src" }
```
]]
---
---And of course, you can specify more than one rule at a time.
---
--[[
```lua
vpaths {
   ["Headers"] = "**.h",
   ["Sources/*"] = {"**.c", "**.cpp"},
   ["Docs"] = "**.txt"
}
```
]]
function vpaths(entry) end

--#endregion vpaths
--#region vsprops

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/vsprops">vsprops</a></h1>
---Add any property to your visual studio project
---This allows you to set properties that premake does not support without extending it
---
---Values set at one time are sorted alphabetically
---If you want to output groups of values in any order, set multiple times.
---
--[[
```lua
vsprops {
		Name1 = "value1",
		Name2 = "value2",
	}
	vsprops {
		Name3 = "value3",
	}
```
]]
---
---Nested values are also supported.
---
--[[
```lua
vsprops {
		Name1 = "value1",
		Name2 = {
			Name3 = "value3"
		}
	}
```
]]
---
---
---
---<h2>examples</h2>
---
--[[
```lua
language "C#"
	vsprops {
		-- https://devblogs.microsoft.com/visualstudio/vs-toolbox-accelerate-your-builds-of-sdk-style-net-projects/
		AccelerateBuildsInVisualStudio = "true",
		-- https://learn.microsoft.com/en-us/visualstudio/ide/how-to-change-the-build-output-directory?view=vs-2022
		AppendTargetFrameworkToOutputPath = "false",
		-- https://learn.microsoft.com/en-us/dotnet/csharp/tutorials/nullable-reference-types
		Nullable = "enable",
	}
```
]]
--[[
```lua
language "C++"
	nuget {
		"Microsoft.Direct3D.D3D12:1.608.2"
	}
	vsprops {
		-- https://devblogs.microsoft.com/directx/gettingstarted-dx12agility/#2-set-agility-sdk-parameters
		Microsoft_Direct3D_D3D12_D3D12SDKPath = "custom_path",
	}
```
]]
function vsprops() end

--#endregion vsprops
--#region warnings


---@alias warningsValueTypes
---| '"Off"' # Do not show any warning messages.
---| '"Default"' # Use the toolset's default warning level.
---| '"Extra"' # Enable the toolset's maximum warning level.
---| '"High"' # Needs documentation
---| '"Everything"' # Needs documentation

---<h1><a href="https://premake.github.io/docs/warnings">warnings</a></h1>
---Controls the level of warnings that are shown by the compiler.
---
--[[
```lua
warnings "value"
```
]]
---
---If no value is set for a configuration, the toolset's default warning level will be used.
---
---
---@param value warningsValueTypes specifies the desired level of warning:
---
---<h2>examples</h2>
---
--[[
```lua
warnings "Extra"
```
]]
function warnings(value) end

--#endregion warnings
--#region workspace


---<h1><a href="https://premake.github.io/docs/workspace">workspace</a></h1>
---Creates a new workspace.
---
--[[
```lua
workspace ("name")
```
]]
---
---Workspaces are the top-level objects in a Premake build script, and are synonymous with a Visual Studio solution. Each workspace contains one or more projects, which in turn contain the settings to generate a single binary target.
---
---
---@param name string `name` is a unique name for the workspace.
---@see project
---@see group
---@see configuration
---@see location
---@see filename
---<h2>examples</h2>
---
---Create a new workspace named "MyWorkspace", with debug and release build configurations.
--[[
```lua
workspace "MyWorkspace"
   configurations { "Debug", "Release" }
```
]]
function workspace(name) end

--#endregion workspace
--#region xcodebuildresources

---<h1><a href="https://premake.github.io/docs/xcodebuildresources">xcodebuildresources</a></h1>
---xcodebuildresources
---
---*Missing documentation*
---
---
---
function xcodebuildresources() end

--#endregion xcodebuildresources
--#region xcodebuildsettings


---<h1><a href="https://premake.github.io/docs/xcodebuildsettings">xcodebuildsettings</a></h1>
---xcodebuildsettings
---
--[[
```lua
xcodebuildsettings { ["key"] = "value" }
```
]]
---
---
---@param entry any  key/value pairs to apply to `buildSettings` blocks of the generated `pbxproj`
---
---<h2>examples</h2>
---
--[[
```lua
xcodebuildsettings { ["MY_KEY"] = "MY_VALUE" }
```
]]
---will generate:
---
---```
---    buildSettings = {
---        ...
---        MY_KEY = MY_VALUE;
---        ...
---    }
---```
function xcodebuildsettings(entry) end

--#endregion xcodebuildsettings
--#region xcodecodesigningidentity


---<h1><a href="https://premake.github.io/docs/xcodecodesigningidentity">xcodecodesigningidentity</a></h1>
---xcodecodesigningidentity - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
xcodecodesigningidentity (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
xcodecodesigningidentity (value)
```
]]
function xcodecodesigningidentity(value) end

--#endregion xcodecodesigningidentity
--#region xcodesystemcapabilities


---<h1><a href="https://premake.github.io/docs/xcodesystemcapabilities">xcodesystemcapabilities</a></h1>
---xcodesystemcapabilities - This page was auto-generated. Feel free to help us improve the documentation by creating a pull request.
---
--[[
```lua
xcodesystemcapabilities (value)
```
]]
---
---
---@param value any `value` - needs documentation.
---
---<h2>examples</h2>
---
--[[
```lua
xcodesystemcapabilities (value)
```
]]
function xcodesystemcapabilities(value) end

--#endregion xcodesystemcapabilities