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


---<h1><a href="https://premake.github.io/docs/globals/_MAIN_SCRIPT_DIR">_MAIN_SCRIPT_DIR</a></h1>
---
---The `_MAIN_SCRIPT_DIR` global variable stores the full path to the directory which contains the main project script.
---This will be the value passed to the `--file` command line argument, or the location of the initial premake5.lua script if no `--file` argument was specified.
---
---@type string
_MAIN_SCRIPT_DIR = "dir"

---<h1><a href="https://premake.github.io/docs/globals/_MAIN_SCRIPT">_MAIN_SCRIPT</a></h1>
---
---The `_MAIN_SCRIPT` global variable stores the full path to the main project script.
---This will be the value passed to the `--file` command line argument, or the location of the initial premake5.lua script if no `--file` argument was specified.
---
---@type string
_MAIN_SCRIPT="path"


---<h1><a href="https://premake.github.io/docs/globals/_OS">_OS</a></h1>
---
---Stores the name of the operating system currently being targeted; see [system()](https://premake.github.io/docs/system) for a complete list of OS identifiers.
---
---The current OS may be overridden on the command line with the `--os` option.
---
---@deprecated This has been deprecated in Premake 5.0 alpha 12. use see _TARGET_OS instead
---@see _TARGET_OS
---@type string
_OS="os"

---<h1><a href="https://premake.github.io/docs/globals/_PREMAKE_COMMAND">_PREMAKE_COMMAND</a></h1>
---The `_PREMAKE_COMMAND` global variable stores the full path to the Premake executable.
---@type string
_PREMAKE_COMMAND="path"

---<h1><a href="https://premake.github.io/docs/globals/_PREMAKE_DIR">_PREMAKE_DIR</a></h1>
---The `_PREMAKE_DIR` global variable stores the full path to the directory which contains the Premake executable.
---@type string
_PREMAKE_DIR="dir"

---<h1><a href="https://premake.github.io/docs/globals/_PREMAKE_VERSION">_PREMAKE_VERSION</a></h1>
---Stores the version of the currently executing instance of Premake, in the form "major.minor.patch.dev".
---
---The current development version (i.e. what's in the git repository) uses the development version "dev", as in "5.0.0.dev".
---When a development release is made, this will become "5.0.0.alpha1", then "5.0.0.alpha2", "5.0.0.beta1" and so on, until the final release "5.0.0".
---@type string
_PREMAKE_VERSION="version"

---<h1><a href="https://premake.github.io/docs/globals/_TARGET_ARCH">_TARGET_ARCH</a></h1>
---Stores the name of the architecture currently being targeted; see [architecture()](https://premake.github.io/docs/architecture) for a complete list of architecture identifiers.
---
---The current architecture may be overridden on the command line with the `--arch` option.
---
---`$ premake5 --arch=x86 gmake`
---@type string
_TARGET_ARCH="arch"

---<h1><a href="https://premake.github.io/docs/globals/_TARGET_OS">_TARGET_OS</a></h1>
---Stores the name of the operating system currently being targeted; see [system()](https://premake.github.io/docs/system) for a complete list of OS identifiers.
---
---The current OS may be overridden on the command line with the `--os` option.
---
---`$ premake5 --os=linux gmake`
---@type string
_TARGET_OS="os"

---<h1><a href="https://premake.github.io/docs/globals/_WORKING_DIR">_WORKING_DIR</a></h1>
---
---The `_WORKING_DIR` global variable stores the full path to the directory which current when Premake was launched.
---@type string
_WORKING_DIR="dir"

---<h1><a href="https://premake.github.io/docs/globals/dofileopt">dofileopt</a></h1>
---Find and execute a Lua source file, but continue without error if the file is not present.
---@param fname string | string[] `fname` is the name of the file to load. This may be specified as a single file path or an array of file paths, in which case the first file found is run.
---@return boolean True if a file was found and executed `nil` otherwise.
---@see include
function dofileopt(fname) end

---<h1><a href="https://premake.github.io/docs/globals/iif">iif</a></h1>
---The `iif` function implements an immediate "if" clause, returning one of two possible values.
---
---`result = iif(condition, trueval, falseval)`
---@param condition boolean condition is the logical condition to test. trueval is the value to return if the condition evaluates to true, falseval if the condition evaluates false.
---@param trueval any
---@param falseval any
---@return any trueval if the condition evaluates true, `falseval` otherwise.
---
---<h2>Example</h2>
---
---@example
--[[
```lua
result = iif(os.is("windows"), "is windows", "is not windows")
```
Note that all expressions are evaluated before the condition is checked; the following expression can not be implemented with an immediate if because it may try to concatenate a string value.
```lua
result = iif(x ~= nil, "x is " .. x, "x is nil")
```
]]
function iif(condition, trueval, falseval) end

---<h1><a href="https://premake.github.io/docs/globals/include">include</a></h1>
---Looks for and executes another script file, if it hasn't been run previously.
---@param path string path is the file system path to a script file or a directory. If a directory is specified, Premake looks for a file named `premake5.lua` in that directory and runs it if found.
---if the file or directory specified has already been included previously, the call is ignored. If you want to execute the same script multiple times, use Lua's dofile() instead.
---@return any result Any values returned by the included script are passed through to the caller.
---
---<h2>Example</h2>
---
---@example
--[[
```lua
-- runs "src/MyApplication/premake5.lua"
include "src/MyApplication"

-- runs "my_script.lua" just once
include "my_script.lua"
include "my_script.lua"
```
]]
---@see dofileopt
---@see includeexternal
function include(path) end

---<h1><a href="https://premake.github.io/docs/globals/includeexternal">includeexternal</a></h1>
---Evaluates a script, and marks any containers created by that script as external.
---
---`includeexternal("path")`
---
---For complex multi-workspace builds, it can be advantageous to have a set of projects that are generated by one workspace, and then used by the other workspaces as-is, without regenerating.
---
---With this function, you can include a script which may contain one or more project or rule definitions. All such containers will be marked as external, and simply referenced, but not regenerated.
---@param path string `path` is the file system path to a script file or a directory. See [include()](https://premake.github.io/docs/globals/include) for a more complete description.
function includeexternal(path) end

---<h1><a href="https://premake.github.io/docs/globals/printf">printf</a></h1>
---The printf performs like its C counterpart, printing a formatted string.
---
---`printf("format", ...)`
---
---It is equivalent to this Lua code:
---
---`print(string.format(format, unpack(arg))`
---@param format string `format` is a formatting string containing C `printf()` style formatting codes. It is followed by a list of arguments to be substituted into the format string.
---@param vararg  any|any[] variable arguments table/list
function printf(format, vararg) end

---<h1><a href="https://premake.github.io/docs/globals/require">require</a></h1>
---An extension of [Lua's require() function](https://www.lua.org/pil/8.1.html) which adds support for Premake modules and version checking.
---
---`require ("modname", "versions")`
---
---Premake will use its [extended set of module locations](https://premake.github.io/docs/Locating-Scripts) when locating the requested module.
---
---@param modname string is the name of the module to be loaded. See [Locating Scripts](https://premake.github.io/docs/Locating-Scripts) for more information about how Premake modules are located.
---@param versions string is an optional string of a version requirements. See the examples below for more information on the format of the requirements string. If the requirements are not met, an error will be raised.
---@return any module The module object.
---
---<h2>Example</h2>
---
---@example
--[[
Require Premake version 5.0 or later.
```lua
require("premake", ">=5.0")
```
If no operator is specified, defaults to ">=". I think it is a little more readable to include it though.
```lua
require("premake", "5.0")
```
Require a version 5.0 alpha 3 or later.
```lua
require("premake", ">=5.0.0-alpha3")
```
Require anything between Premake version 5.1 and 6.0.
```lua
require("premake", ">=5.0 <6.0")
```
The same rules apply to third-party modules.
```lua
require("foo", ">=1.1")
```
]]
---@see _PREMAKE_VERSION
function require(modname,versions) end

---<h1><a href="https://premake.github.io/docs/globals/verbosef">verbosef</a></h1>
---The `verbosef` performs `printf`, printing a formatted string, but only when the verbose flag was set (ex. in the command line).
---
---`verbosef("format", ...)`
---
---@param format string is a formatting string containing C printf() style formatting codes. It is followed by a list of arguments to be substituted into the format string.
---@param vararg any | any[]
function verbosef(format,vararg) end