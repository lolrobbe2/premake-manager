---Specifies a file name suffix for the import library base file name.
---
---[docs](https://premake.github.io/docs/implibsuffix/)
---
---@param value string
local function implibsuffix(value) end
_G.implibsuffix=implibsuffix

---@alias implicitlinkAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Sets whether or not to implicitly link dependent libraries.
---
---[docs](https://premake.github.io/docs/implicitlink/)
---
---@param value implicitlinkAllowed
local function implicitlink(value) end
_G.implicitlink=implicitlink

---Specifies the include file search paths for the compiler.
---
---[docs](https://premake.github.io/docs/includedirs/)
---
---@param value string[]
local function includedirs(value) end
_G.includedirs=includedirs

---Specifies the include directories to parse last per the toolset ordering and marks the directory as an external include directory.
---
---[docs](https://premake.github.io/docs/includedirsafter/)
---
---@param value string[]
local function includedirsafter(value) end
_G.includedirsafter=includedirsafter

---@alias incrementallinkAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Controls whether incremental linking is enabled for a configuration.
---
---[docs](https://premake.github.io/docs/incrementallink/)
---
---@param value incrementallinkAllowed
local function incrementallink(value) end
_G.incrementallink=incrementallink

---inheritdependencies
---
---[docs](https://premake.github.io/docs/inheritdependencies/)
---
---@param value Boolean
local function inheritdependencies(value) end
_G.inheritdependencies=inheritdependencies

---@alias inlinesvisibilityAllowed
---| "Default"
---| "Hidden"
---| "Hidden"
---| "Default"


---Specifies the inline symbol visibility.
---
---[docs](https://premake.github.io/docs/inlinesvisibility/)
---
---@param value inlinesvisibilityAllowed
local function inlinesvisibility(value) end
_G.inlinesvisibility=inlinesvisibility

---@alias inliningAllowed
---| "Default"
---| "Disabled"
---| "Explicit"
---| "Auto"
---| "Disabled"
---| "Auto"
---| "Explicit"
---| "Default"


---Tells the compiler when it should inline functions.
---
---[docs](https://premake.github.io/docs/inlining/)
---
---@param value inliningAllowed
local function inlining(value) end
_G.inlining=inlining

---Replaces some function calls with intrinsic or otherwise special forms of the function that help your application run faster.
---
---[docs](https://premake.github.io/docs/intrinsics/)
---
---@param value Boolean
local function intrinsics(value) end
_G.intrinsics=intrinsics

---@alias iosfamilyAllowed
---| "iPhone/iPod touch"
---| "iPad"
---| "Universal"
---| "iPhone/iPod touch"
---| "Universal"
---| "iPad"


---Specifies the family of iOS device to be targeted.
---
---[docs](https://premake.github.io/docs/iosfamily/)
---
---@param value iosfamilyAllowed
local function iosfamily(value) end
_G.iosfamily=iosfamily

---@alias isaextensionsAllowed
---| "MOVBE"
---| "POPCNT"
---| "PCLMUL"
---| "LZCNT"
---| "BMI"
---| "BMI2"
---| "F16C"
---| "AES"
---| "FMA"
---| "FMA4"
---| "RDRND"
---| "LZCNT"
---| "F16C"
---| "POPCNT"
---| "FMA4"
---| "AES"
---| "PCLMUL"
---| "BMI"
---| "RDRND"
---| "MOVBE"
---| "BMI2"
---| "FMA"


---Specifies a list of supported instruction set architecture extensions.
---
---[docs](https://premake.github.io/docs/isaextensions/)
---
---@param value isaextensionsAllowed
local function isaextensions(value) end
_G.isaextensions=isaextensions

---@alias justmycodeAllowed
---| "On"
---| "Off"
---| "On"
---| "Off"


---Enables or disables Visual Studio Just My Code debugging feature by passing /JMC option to the compiler.
---
---[docs](https://premake.github.io/docs/justmycode/)
---
---@param value justmycodeAllowed
local function justmycode(value) end
_G.justmycode=justmycode

---@alias kindAllowed
---| "ConsoleApp"
---| "Makefile"
---| "None"
---| "SharedLib"
---| "StaticLib"
---| "WindowedApp"
---| "Utility"
---| "SharedItems"
---| "Packaging"
---| "StaticLib"
---| "Utility"
---| "SharedItems"
---| "ConsoleApp"
---| "Packaging"
---| "WindowedApp"
---| "None"
---| "SharedLib"
---| "Makefile"


---Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library.
---
---[docs](https://premake.github.io/docs/kind/)
---
---@param value kindAllowed
local function kind(value) end
_G.kind=kind

---@alias languageAllowed
---| "C"
---| "C++"
---| "C#"
---| "F#"
---| "C#"
---| "C"
---| "C++"
---| "F#"


---Sets the programming language used by a project.
---
---[docs](https://premake.github.io/docs/language/)
---
---@param value languageAllowed
local function language(value) end
_G.language=language

---Specifies to the linker that the 32 bit application can handle addresses larger than 2GB.
---
---[docs](https://premake.github.io/docs/largeaddressaware/)
---
---@param value Boolean
local function largeaddressaware(value) end
_G.largeaddressaware=largeaddressaware

---Specifies the library search paths for the linker.
---
---[docs](https://premake.github.io/docs/libdirs/)
---
---@param value string[]
local function libdirs(value) end
_G.libdirs=libdirs

---Turns on/off the automatic linking of `.obj` files that are output by custom build commands.
---
---[docs](https://premake.github.io/docs/linkbuildoutputs/)
---
---@param value Boolean
local function linkbuildoutputs(value) end
_G.linkbuildoutputs=linkbuildoutputs

---@alias linkerAllowed
---| "Default"
---| "LLD"
---| "LLD"
---| "Default"


---Specifies the linker.
---
---[docs](https://premake.github.io/docs/linker/)
---
---@param value linkerAllowed
local function linker(value) end
_G.linker=linker

---Specifies specific linker warnings that should be interpreted as errors.
---
---[docs](https://premake.github.io/docs/linkerfatalwarnings/)
---
---@param value string[]
local function linkerfatalwarnings(value) end
_G.linkerfatalwarnings=linkerfatalwarnings

---@alias linkgroupsAllowed
---| "Off"
---| "On"
---| "Off"
---| "On"


---Turns on or off the linkgroups for option for linked libraries.
---
---[docs](https://premake.github.io/docs/linkgroups/)
---
---@param value linkgroupsAllowed
local function linkgroups(value) end
_G.linkgroups=linkgroups

---Passes arguments directly to the linker command line without translation.
---
---[docs](https://premake.github.io/docs/linkoptions/)
---
---@param value string[]
local function linkoptions(value) end
_G.linkoptions=linkoptions

---Specifies a list of libraries and projects to link against.
---
---[docs](https://premake.github.io/docs/links/)
---
---@param value string[]
local function links(value) end
_G.links=links

---@alias linksectiondataAllowed
---| "On"
---| "Off"
---| "On"
---| "Off"


---Emit each data item in a separate section.
---
---[docs](https://premake.github.io/docs/linksectiondata/)
---
---@param value linksectiondataAllowed
local function linksectiondata(value) end
_G.linksectiondata=linksectiondata

---@alias linksectionfunctionAllowed
---| "On"
---| "Off"
---| "On"
---| "Off"


---Emit each function item in a separate section.
---
---[docs](https://premake.github.io/docs/linksectionfunction/)
---
---@param value linksectionfunctionAllowed
local function linksectionfunction(value) end
_G.linksectionfunction=linksectionfunction

---@alias linktimeoptimizationAllowed
---| "Default"
---| "On"
---| "Fast"
---| "Off"
---| "Off"
---| "Fast"
---| "On"
---| "Default"


---Specifies whether or not the toolset should perform link time optimization.
---
---[docs](https://premake.github.io/docs/linktimeoptimization/)
---
---@param value linktimeoptimizationAllowed
local function linktimeoptimization(value) end
_G.linktimeoptimization=linktimeoptimization

---Specifies a custom LLVM install location for Visual Studio.
---
---[docs](https://premake.github.io/docs/llvmdir/)
---
---@param value string
local function llvmdir(value) end
_G.llvmdir=llvmdir

---Specifies a version for a custom installation of LLVM for Visual Studio.
---
---[docs](https://premake.github.io/docs/llvmversion/)
---
---@param value string
local function llvmversion(value) end
_G.llvmversion=llvmversion

---Specifies the target locale for the resources in a particular configuration.
---
---[docs](https://premake.github.io/docs/locale/)
---
---@param value string
local function locale(value) end
_G.locale=locale

---Sets the destination directory for a generated workspace or project file.
---
---[docs](https://premake.github.io/docs/location/)
---
---@param value string
local function location(value) end
_G.location=location

---Adds arbitrary GNU make markup to a generated Makefile.
---
---[docs](https://premake.github.io/docs/makesettings/)
---
---@param value string[]
local function makesettings(value) end
_G.makesettings=makesettings

---@alias manifestAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Controls whether a Windows manifest file should be generated for the project.
---
---[docs](https://premake.github.io/docs/manifest/)
---
---@param value manifestAllowed
local function manifest(value) end
_G.manifest=manifest

---@alias mapfileAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Specifies whether or not to generate a mapfile.
---
---[docs](https://premake.github.io/docs/mapfile/)
---
---@param value mapfileAllowed
local function mapfile(value) end
_G.mapfile=mapfile

---Specifies the path to generate a mapfile at.
---
---[docs](https://premake.github.io/docs/mapfilepath/)
---
---@param value string
local function mapfilepath(value) end
_G.mapfilepath=mapfilepath

---@alias mfcAllowed
---| "Default"
---| "Off"
---| "On"
---| "Static"
---| "Dynamic"
---| "Off"
---| "On"
---| "Dynamic"
---| "Static"
---| "Default"


---Sets the version of the MFC libraries to link against.
---
---[docs](https://premake.github.io/docs/mfc/)
---
---@param value mfcAllowed
local function mfc(value) end
_G.mfc=mfc

---@alias minimalrebuildAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Sets the minimal rebuild option for Visual Studio projects.
---
---[docs](https://premake.github.io/docs/minimalrebuild/)
---
---@param value minimalrebuildAllowed
local function minimalrebuild(value) end
_G.minimalrebuild=minimalrebuild

---@alias multiprocessorcompileAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Controls whether multiple processors are used for compilation.
---
---[docs](https://premake.github.io/docs/multiprocessorcompile/)
---
---@param value multiprocessorcompileAllowed
local function multiprocessorcompile(value) end
_G.multiprocessorcompile=multiprocessorcompile

---Sets the root namespace of a project.
---
---[docs](https://premake.github.io/docs/namespace/)
---
---@param value string
local function namespace(value) end
_G.namespace=namespace

---@alias nativewcharAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Enables or disables native wchar (wide character) support by the compiler.
---
---[docs](https://premake.github.io/docs/nativewchar/)
---
---@param value nativewcharAllowed
local function nativewchar(value) end
_G.nativewchar=nativewchar

---@alias nodefaultlibAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Specifies whether to omit default libraries when linking.
---
---[docs](https://premake.github.io/docs/nodefaultlib/)
---
---@param value nodefaultlibAllowed
local function nodefaultlib(value) end
_G.nodefaultlib=nodefaultlib

---Specifies a list of NuGet packages that this project depends on.
---
---[docs](https://premake.github.io/docs/nuget/)
---
---@param value string[]
local function nuget(value) end
_G.nuget=nuget

---Used to specify the NuGet package source.
---
---[docs](https://premake.github.io/docs/nugetsource/)
---
---@param value string
local function nugetsource(value) end
_G.nugetsource=nugetsource

---Sets the directory where object and other intermediate files should be placed when building a project.
---
---[docs](https://premake.github.io/docs/objdir/)
---
---@param value string
local function objdir(value) end
_G.objdir=objdir

---@alias omitframepointerAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Controls whether the frame pointer is omitted during compilation.
---
---[docs](https://premake.github.io/docs/omitframepointer/)
---
---@param value omitframepointerAllowed
local function omitframepointer(value) end
_G.omitframepointer=omitframepointer

---@alias openmpAllowed
---| "On"
---| "Off"
---| "On"
---| "Off"


---Enables or disables [OpenMP](https://en.wikipedia.org/wiki/OpenMP).
---
---[docs](https://premake.github.io/docs/openmp/)
---
---@param value openmpAllowed
local function openmp(value) end
_G.openmp=openmp

---@alias optimizeAllowed
---| "Off"
---| "On"
---| "Debug"
---| "Size"
---| "Speed"
---| "Full"
---| "Off"
---| "Speed"
---| "On"
---| "Full"
---| "Size"
---| "Debug"


---The **optimize** function specifies the level and type of optimization used while building the target configuration.
---
---[docs](https://premake.github.io/docs/optimize/)
---
---@param value optimizeAllowed
local function optimize(value) end
_G.optimize=optimize

---Specifies the #include form of the precompiled header file name.
---
---[docs](https://premake.github.io/docs/pchheader/)
---
---@param value string
local function pchheader(value) end
_G.pchheader=pchheader

---Specifies the C/C++ source code file which controls the compilation of the header.
---
---[docs](https://premake.github.io/docs/pchsource/)
---
---@param value string
local function pchsource(value) end
_G.pchsource=pchsource

---@alias picAllowed
---| "Off"
---| "On"
---| "Off"
---| "On"


---Enable generation of position independent code.
---
---[docs](https://premake.github.io/docs/pic/)
---
---@param value picAllowed
local function pic(value) end
_G.pic=pic

---Specifies a set of build platforms, which act as another configuration axis when building.
---
---[docs](https://premake.github.io/docs/platforms/)
---
---@param value string[]
local function platforms(value) end
_G.platforms=platforms

---Specifies shell commands to run after build is finished.
---
---[docs](https://premake.github.io/docs/postbuildcommands/)
---
---@param value string[]
local function postbuildcommands(value) end
_G.postbuildcommands=postbuildcommands

---Specifies a message to display to the user before starting execution of any specified [post-build commands](postbuildcommands.md).
---
---[docs](https://premake.github.io/docs/postbuildmessage/)
---
---@param value string
local function postbuildmessage(value) end
_G.postbuildmessage=postbuildmessage

---Specifies shell commands to run before each build.
---
---[docs](https://premake.github.io/docs/prebuildcommands/)
---
---@param value string[]
local function prebuildcommands(value) end
_G.prebuildcommands=prebuildcommands

---Specifies a message to display to the user before starting execution of any specified [pre-build commands](prebuildcommands.md).
---
---[docs](https://premake.github.io/docs/prebuildmessage/)
---
---@param value string
local function prebuildmessage(value) end
_G.prebuildmessage=prebuildmessage

---@alias preferredtoolarchitectureAllowed
---| "Default"
---| "x86"
---| "x86_64"
---| "x86_64"
---| "x86"
---| "Default"


---Specifies the preferred architecture to use for the Visual Studio toolchain.
---
---[docs](https://premake.github.io/docs/preferredtoolarchitecture/)
---
---@param value preferredtoolarchitectureAllowed
local function preferredtoolarchitecture(value) end
_G.preferredtoolarchitecture=preferredtoolarchitecture

---Specifies shell commands to run after the source files have been compiled, but before the link step (if unsupported by the action, it will be treated the same as [prebuildcommands](prebuildcommands.md)).
---
---[docs](https://premake.github.io/docs/prelinkcommands/)
---
---@param value string[]
local function prelinkcommands(value) end
_G.prelinkcommands=prelinkcommands

---Specifies a message to display to the user before starting execution of any specified [pre-link commands](prelinkcommands.md).
---
---[docs](https://premake.github.io/docs/prelinkmessage/)
---
---@param value string
local function prelinkmessage(value) end
_G.prelinkmessage=prelinkmessage

---Enable or disable instrumented performance profiling support for binaries.
---
---[docs](https://premake.github.io/docs/profile/)
---
---@param value Boolean
local function profile(value) end
_G.profile=profile

---Creates a new property for a [custom rule](Custom-Rules.md).
---
---[docs](https://premake.github.io/docs/propertydefinition/)
---
---@param value table[]
local function propertydefinition(value) end
_G.propertydefinition=propertydefinition

---Specifies one or more shell commands to be executed to rebuild a [Makefile project](Makefile-Projects.md).
---
---[docs](https://premake.github.io/docs/rebuildcommands/)
---
---@param value string[]
local function rebuildcommands(value) end
_G.rebuildcommands=rebuildcommands

---Directory on the remote machine where the project will be deployed to.
---
---[docs](https://premake.github.io/docs/remotedeploydir/)
---
---@param value string
local function remotedeploydir(value) end
_G.remotedeploydir=remotedeploydir

---Project directory as seen by the Windows Subsystem for Linux shell.
---
---[docs](https://premake.github.io/docs/remoteprojectdir/)
---
---@param value string
local function remoteprojectdir(value) end
_G.remoteprojectdir=remoteprojectdir

---Specifies the subdirectory on the remote machine to copy each project's source code to.
---
---[docs](https://premake.github.io/docs/remoteprojectrelativedir/)
---
---@param value string
local function remoteprojectrelativedir(value) end
_G.remoteprojectrelativedir=remoteprojectrelativedir

---Specifies the base directory on the remote machine to deploy the source code to before compiling.
---
---[docs](https://premake.github.io/docs/remoterootdir/)
---
---@param value string
local function remoterootdir(value) end
_G.remoterootdir=remoterootdir

---Sets the `RemoveUnreferencedCodeData` property for a configuration or all configurations within a project or workspace, adding or removing the `/Zc:inline[-]` build option.
---
---[docs](https://premake.github.io/docs/removeunreferencedcodedata/)
---
---@param value Boolean
local function removeunreferencedcodedata(value) end
_G.removeunreferencedcodedata=removeunreferencedcodedata

---Specifies preprocessor symbols for the resource compiler.
---
---[docs](https://premake.github.io/docs/resdefines/)
---
---@param value string[]
local function resdefines(value) end
_G.resdefines=resdefines

---Specifies the include file search paths for the resource compiler.
---
---[docs](https://premake.github.io/docs/resincludedirs/)
---
---@param value string[]
local function resincludedirs(value) end
_G.resincludedirs=resincludedirs

---Passes arguments directly to the resource compiler command line without translation.
---
---[docs](https://premake.github.io/docs/resoptions/)
---
---@param value string[]
local function resoptions(value) end
_G.resoptions=resoptions

---@alias resourcegeneratorAllowed
---| "internal"
---| "public"
---| "public"
---| "internal"


---Specifies the resource generator to use.
---
---[docs](https://premake.github.io/docs/resourcegenerator/)
---
---@param value resourcegeneratorAllowed
local function resourcegenerator(value) end
_G.resourcegenerator=resourcegenerator

---@alias rttiAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Enable or disable [run-time type information](https://en.wikipedia.org/wiki/Run-time_type_information).
---
---[docs](https://premake.github.io/docs/rtti/)
---
---@param value rttiAllowed
local function rtti(value) end
_G.rtti=rtti

---Imports one or more [custom rules](Custom-Rules.md) into a project.
---
---[docs](https://premake.github.io/docs/rules/)
---
---@param value string[]
local function rules(value) end
_G.rules=rules

---Runs code analysis during the build process for Visual Studio projects.
---
---[docs](https://premake.github.io/docs/runcodeanalysis/)
---
---@param value Boolean
local function runcodeanalysis(value) end
_G.runcodeanalysis=runcodeanalysis

---Specifies the runtime search paths used by the runtime shared library dynamic loader.
---
---[docs](https://premake.github.io/docs/runpathdirs/)
---
---@param value string[]
local function runpathdirs(value) end
_G.runpathdirs=runpathdirs

---@alias runtimeAllowed
---| "Debug"
---| "Release"
---| "Release"
---| "Debug"


---Choose the type of runtime library to use.
---
---[docs](https://premake.github.io/docs/runtime/)
---
---@param value runtimeAllowed
local function runtime(value) end
_G.runtime=runtime

---@alias runtimechecksAllowed
---| "Default"
---| "Off"
---| "StackFrames"
---| "UninitializedVariables"
---| "FastChecks"
---| "Off"
---| "FastChecks"
---| "UninitializedVariables"
---| "StackFrames"
---| "Default"


---Controls whether runtime error checking is enabled for Visual Studio C/C++ projects.
---
---[docs](https://premake.github.io/docs/runtimechecks/)
---
---@param value runtimechecksAllowed
local function runtimechecks(value) end
_G.runtimechecks=runtimechecks

---@alias sanitizeAllowed
---| "Address"
---| "Fuzzer"
---| "Thread"
---| "UndefinedBehavior"
---| "Address"
---| "UndefinedBehavior"
---| "Fuzzer"
---| "Thread"


---Enables various `fsanitize` options for compilers.
---
---[docs](https://premake.github.io/docs/sanitize/)
---
---@param value sanitizeAllowed
local function sanitize(value) end
_G.sanitize=sanitize

---Enables the `Scan Sources for Module Dependencies` option for Visual Studio projects.
---
---[docs](https://premake.github.io/docs/scanformoduledependencies/)
---
---@param value Boolean
local function scanformoduledependencies(value) end
_G.scanformoduledependencies=scanformoduledependencies

---@alias shaderassemblerAllowed
---| "NoListing"
---| "AssemblyCode"
---| "AssemblyCodeAndHex"
---| "AssemblyCode"
---| "NoListing"
---| "AssemblyCodeAndHex"


---Specifies the shader assembler output.
---
---[docs](https://premake.github.io/docs/shaderassembler/)
---
---@param value shaderassemblerAllowed
local function shaderassembler(value) end
_G.shaderassembler=shaderassembler

---Specifies the output file of shader assembly.
---
---[docs](https://premake.github.io/docs/shaderassembleroutput/)
---
---@param value string
local function shaderassembleroutput(value) end
_G.shaderassembleroutput=shaderassembleroutput

---Specifies defines to pass to shader compilation.
---
---[docs](https://premake.github.io/docs/shaderdefines/)
---
---@param value string[]
local function shaderdefines(value) end
_G.shaderdefines=shaderdefines

---Specifies shader entrypoint.
---
---[docs](https://premake.github.io/docs/shaderentry/)
---
---@param value string
local function shaderentry(value) end
_G.shaderentry=shaderentry

---Specifies the generated shader header output file.
---
---[docs](https://premake.github.io/docs/shaderheaderfileoutput/)
---
---@param value string
local function shaderheaderfileoutput(value) end
_G.shaderheaderfileoutput=shaderheaderfileoutput

---Specifies a list of include directories for shader compilation.
---
---[docs](https://premake.github.io/docs/shaderincludedirs/)
---
---@param value string[]
local function shaderincludedirs(value) end
_G.shaderincludedirs=shaderincludedirs

---@alias shadermodelAllowed
---| "2.0"
---| "3.0"
---| "4.0_level_9_1"
---| "4.0_level_9_3"
---| "4.0"
---| "4.1"
---| "5.0"
---| "5.1"
---| "rootsig_1.0"
---| "rootsig_1.1"
---| "6.0"
---| "6.1"
---| "6.2"
---| "6.3"
---| "6.4"
---| "6.5"
---| "6.6"
---| "6.2"
---| "6.4"
---| "4.0_level_9_1"
---| "6.1"
---| "4.1"
---| "6.0"
---| "5.0"
---| "2.0"
---| "4.0"
---| "3.0"
---| "6.6"
---| "rootsig_1.1"
---| "6.3"
---| "4.0_level_9_3"
---| "rootsig_1.0"
---| "6.5"
---| "5.1"


---Specifies the shader model.
---
---[docs](https://premake.github.io/docs/shadermodel/)
---
---@param value shadermodelAllowed
local function shadermodel(value) end
_G.shadermodel=shadermodel

---Specifies the output object of compiled HLSL files.
---
---[docs](https://premake.github.io/docs/shaderobjectfileoutput/)
---
---@param value string
local function shaderobjectfileoutput(value) end
_G.shaderobjectfileoutput=shaderobjectfileoutput

---Specifies a list of options to pass to the shader compiler.
---
---[docs](https://premake.github.io/docs/shaderoptions/)
---
---@param value string[]
local function shaderoptions(value) end
_G.shaderoptions=shaderoptions

---@alias shadertypeAllowed
---| "Effect"
---| "Vertex"
---| "Pixel"
---| "Geometry"
---| "Hull"
---| "Domain"
---| "Compute"
---| "Library"
---| "Mesh"
---| "Amplification"
---| "Texture"
---| "RootSignature"
---| "Pixel"
---| "Hull"
---| "RootSignature"
---| "Geometry"
---| "Texture"
---| "Vertex"
---| "Mesh"
---| "Effect"
---| "Amplification"
---| "Library"
---| "Domain"
---| "Compute"


---Specifies the type of shader.
---
---[docs](https://premake.github.io/docs/shadertype/)
---
---@param value shadertypeAllowed
local function shadertype(value) end
_G.shadertype=shadertype

---Specifies a name for the variable name in the header file.
---
---[docs](https://premake.github.io/docs/shadervariablename/)
---
---@param value string
local function shadervariablename(value) end
_G.shadervariablename=shadervariablename

---@alias sharedlibtypeAllowed
---| "OSXBundle"
---| "OSXFramework"
---| "XCTest"
---| "OSXFramework"
---| "XCTest"
---| "OSXBundle"


---Specifies the shared library type for Apple targets.
---
---[docs](https://premake.github.io/docs/sharedlibtype/)
---
---@param value sharedlibtypeAllowed
local function sharedlibtype(value) end
_G.sharedlibtype=sharedlibtype

---Specify the startup project for a workspace.
---
---[docs](https://premake.github.io/docs/startproject/)
---
---@param value string
local function startproject(value) end
_G.startproject=startproject

---@alias staticruntimeAllowed
---| "Default"
---| "On"
---| "Off"
---| "Off"
---| "On"
---| "Default"


---Specifies if the static runtime should be used.
---
---[docs](https://premake.github.io/docs/staticruntime/)
---
---@param value staticruntimeAllowed
local function staticruntime(value) end
_G.staticruntime=staticruntime

---@alias stlAllowed
---| "none"
---| "gabi++"
---| "stlport"
---| "gnu"
---| "libc++"
---| "none"
---| "libc++"
---| "gabi++"
---| "gnu"
---| "stlport"


---Specifies which C++ Standard Library to use.
---
---[docs](https://premake.github.io/docs/stl/)
---
---@param value stlAllowed
local function stl(value) end
_G.stl=stl

---@alias strictaliasingAllowed
---| "Off"
---| "Level1"
---| "Level2"
---| "Level3"
---| "Off"
---| "Level1"
---| "Level3"
---| "Level2"


---Sets the level of allowed pointer aliasing.
---
---[docs](https://premake.github.io/docs/strictaliasing/)
---
---@param value strictaliasingAllowed
local function strictaliasing(value) end
_G.strictaliasing=strictaliasing

---Specifies if string pooling should be used.
---
---[docs](https://premake.github.io/docs/stringpooling/)
---
---@param value Boolean
local function stringpooling(value) end
_G.stringpooling=stringpooling

---@alias structmemberalignAllowed
---| "1"
---| "2"
---| "4"
---| "8"
---| "16"
---| "4"
---| "2"
---| "16"
---| "8"
---| "1"


---Specifies 1, 2, 4, 8, 16-byte boundary for struct member alignment.
---
---[docs](https://premake.github.io/docs/structmemberalign/)
---
---@param value structmemberalignAllowed
local function structmemberalign(value) end
_G.structmemberalign=structmemberalign

---@alias swiftversionAllowed
---| "4.0"
---| "4.2"
---| "5.0"
---| "4.2"
---| "5.0"
---| "4.0"


---Specifies the version of Swift to compile with.
---
---[docs](https://premake.github.io/docs/swiftversion/)
---
---@param value swiftversionAllowed
local function swiftversion(value) end
_G.swiftversion=swiftversion

---@alias symbolsAllowed
---| "Default"
---| "On"
---| "Off"
---| "FastLink"
---| "Full"
---| "Off"
---| "On"
---| "FastLink"
---| "Full"
---| "Default"


---Turn on/off debug symbol table generation.
---
---[docs](https://premake.github.io/docs/symbols/)
---
---@param value symbolsAllowed
local function symbols(value) end
_G.symbols=symbols

---Specify the target location of the debug symbols.
---
---[docs](https://premake.github.io/docs/symbolspath/)
---
---@param value string
local function symbolspath(value) end
_G.symbolspath=symbolspath

---Specifies the system library search paths.
---
---[docs](https://premake.github.io/docs/syslibdirs/)
---
---@param value string[]
local function syslibdirs(value) end
_G.syslibdirs=syslibdirs

---@alias systemAllowed
---| "aix"
---| "bsd"
---| "emscripten"
---| "haiku"
---| "hurd"
---| "ios"
---| "linux"
---| "macosx"
---| "solaris"
---| "tvos"
---| "uwp"
---| "wii"
---| "windows"
---| "android"
---| "ios"
---| "aix"
---| "emscripten"
---| "android"
---| "solaris"
---| "tvos"
---| "linux"
---| "bsd"
---| "windows"
---| "wii"
---| "hurd"
---| "uwp"
---| "macosx"
---| "haiku"


---Specifies the target operating system.
---
---[docs](https://premake.github.io/docs/system/)
---
---@param value systemAllowed
local function system(value) end
_G.system=system

---Specifies the target operation system min and max versions.
---
---[docs](https://premake.github.io/docs/systemversion/)
---
---@param value string
local function systemversion(value) end
_G.systemversion=systemversion