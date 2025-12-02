---@meta

os = {}
--#region os.chdir


---<h1><a href="https://premake.github.io/docs/os/os.chdir">os.chdir</a></h1>
---Changes the current working directory.
---
--[[
```lua
ok, err = os.chdir("path")
```
]]
---
---
---@param path string is the file system path to the new working directory.
---@see os.getcwd
---@see os.mkdir
---
function os.chdir(path) end

--#endregion os.chdir
--#region os.chmod


---<h1><a href="https://premake.github.io/docs/os/os.chmod">os.chmod</a></h1>
---Changes the file system permissions of a file.
---
--[[
```lua
ok, err = os.chmod(path, mask)
```
]]
---
---
---@param path number is the path to the file on which the permissions should be changed.
---
---
function os.chmod(path) end

--#endregion os.chmod
--#region os.comparefiles


---<h1><a href="https://premake.github.io/docs/os/os.comparefiles">os.comparefiles</a></h1>
---Compares two files for binary equality.
---
--[[
```lua
equality, err = os.comparefiles("filename1", "filename2")
```
]]
---
---
---@param filename1 string is the file system path to the first file to compare file.
---
---
function os.comparefiles(filename1) end

--#endregion os.comparefiles
--#region os.copyfile


---<h1><a href="https://premake.github.io/docs/os/os.copyfile">os.copyfile</a></h1>
---Copies a file from one location to another.
---
--[[
```lua
ok, err = os.copyfile("source", "destination")
```
]]
---
---
---@param source string is the file system path to the file to be copied.
---
---
function os.copyfile(source) end

--#endregion os.copyfile
--#region os.execute

---<h1><a href="https://premake.github.io/docs/os/os.execute">os.execute</a></h1>
---Execute a system command
---
--[[
```lua
os.execute("command")
```
]]
---
---
---
function os.execute() end

--#endregion os.execute
--#region os.executef


---<h1><a href="https://premake.github.io/docs/os/os.executef">os.executef</a></h1>
---Execute a system command, just like `os.execute()`, but accepting a format string and values as arguments.
---
--[[
```lua
os.executef("format", ...)
```
]]
---
---
---@param table number `format` is a printf-style formatting string (see Lua's [string.format()](http://stackoverflow.com/questions/1811884/lua-string-format-options) for examples), followed by a corresponding list of values for token substitution.
---@see os.outputof
---
function os.executef(table) end

--#endregion os.executef
--#region os.findheader


---<h1><a href="https://premake.github.io/docs/os/os.findheader">os.findheader</a></h1>
---Scan the well-known system locations looking for a header file.
---
--[[
```lua
p = os.findheader("headerfile" [, additionalpaths])
```
]]
---
---
---@param headerfile string is a file name or a the end of a file path to locate.
---
---
function os.findheader(headerfile) end

--#endregion os.findheader
--#region os.findlib


---<h1><a href="https://premake.github.io/docs/os/os.findlib">os.findlib</a></h1>
---Scan the well-known system locations looking for a library file.
---
--[[
```lua
p = os.findlib("libname" [, additionalpaths])
```
]]
---
---This function does not work to locate system libraries on macOS 11 or later; it may still be used to locate user libraries. From the release notes:
---
---> New in macOS Big Sur 11.0.1, the system ships with a built-in dynamic linker cache of all system-provided libraries. As part of this change, copies of dynamic libraries are no longer present on the filesystem. Code that attempts to check for dynamic library presence by looking for a file at a path or enumerating a directory will fail.
---
---
---@param libname string is name of the library to locate.
---
---
function os.findlib(libname) end

--#endregion os.findlib
--#region os.get


---<h1><a href="https://premake.github.io/docs/os/os.get">os.get</a></h1>
---Identify the currently targeted operating system.
---
--[[
```lua
id = os.get()
```
]]
---

---@see os.getversion
---<h2>examples</h2>
---
--[[
```lua
if os.get() == "windows" then
   -- do something Windows-specific
end
```
]]
function os.get() end

--#endregion os.get
--#region os.getcwd


---<h1><a href="https://premake.github.io/docs/os/os.getcwd">os.getcwd</a></h1>
---Gets the current working directory.
---
--[[
```lua
cwd = os.getcwd()
```
]]
---

---@see os.chdir
---@see os.mkdir
---@see os.realpath
---
function os.getcwd() end

--#endregion os.getcwd
--#region os.getenv


---<h1><a href="https://premake.github.io/docs/os/os.getenv">os.getenv</a></h1>
---Gets the value of an environment variable from the host system.
---
--[[
```lua
id = os.getenv(var)
```
]]
---
---
---@param var string Environment variable name.
---
---<h2>examples</h2>
---
--[[
```lua
if os.getenv('FOO') == "bar" then
   -- do something specific when FOO=bar
end
```
]]
function os.getenv(var) end

--#endregion os.getenv
--#region os.getnumcpus


---<h1><a href="https://premake.github.io/docs/os/os.getnumcpus">os.getnumcpus</a></h1>
---Gets the number of logical CPU cores.
---
--[[
```lua
os.getnumcpus()
```
]]
---

---
---
function os.getnumcpus() end

--#endregion os.getnumcpus
--#region os.getpass

--TODO invalid MARKDOWN
---<h1><a href="https://premake.github.io/docs/os/os.getpass">os.getpass</a></h1>
---Prompt the user to enter a password.
---
--[[
```lua
password = os.getpass('please enter your password:')
```
]]
---
---
---
---
function os.getpass() end

--#endregion os.getpass
--#region os.getversion


---<h1><a href="https://premake.github.io/docs/os/os.getversion">os.getversion</a></h1>
---Retrieve version information for the host operating system.
---
--[[
```lua
sysinfo = os.getversion()
```
]]
---

---
---<h2>examples</h2>
---
--[[
```lua
local ver = os.getversion()
print(string.format(" %d.%d.%d (%s)",
   ver.majorversion, ver.minorversion, ver.revision,
   ver.description))

-- On Windows XP: "5.1.3 (Windows XP)"
-- On OS X,: "10.6.6 (Mac OS X Snow Leopard)"
```
]]
function os.getversion() end

--#endregion os.getversion
--#region os.host


---<h1><a href="https://premake.github.io/docs/os/os.host">os.host</a></h1>
---Identify the currently executing operating system.
---
--[[
```lua
id = os.host()
```
]]
---

---@see os.get
---<h2>examples</h2>
---
--[[
```lua
if os.host() == "windows" then
   -- do something Windows-specific
end
```
]]
function os.host() end

--#endregion os.host
--#region os.hostarch


---<h1><a href="https://premake.github.io/docs/os/os.hostarch">os.hostarch</a></h1>
---Identify the architecture for the currently executing operating system.
---
--[[
```lua
id = os.hostarch()
```
]]
---

---@see architecture
---<h2>examples</h2>
---
--[[
```lua
if os.hostarch() == "x86_64" then
   -- do something x64-specific
end
```
]]
function os.hostarch() end

--#endregion os.hostarch
--#region os.is


---<h1><a href="https://premake.github.io/docs/os/os.is">os.is</a></h1>
---<div style="border:2px solid #f39c12; padding:1em; background:#fff8e6;"><strong>This function has been deprecated.</strong> Use os.istarget(), os.target(), or os.host() instead.
---</div>
---
---Checks the current operating system identifier against a particular value.
---
--[[
```lua
os.is("id")
```
]]
---@deprecated
---
---@param id string `id` is an operating system identifier; see [system()](system.md) for a complete list of identifiers.
---@see os.istarget
---@see os.target
---@see os.host
---@see os.getversion
---
function os.is(id) end

--#endregion os.is
--#region os.is64bit


---<h1><a href="https://premake.github.io/docs/os/os.is64bit">os.is64bit</a></h1>
---Determines if the host is using a 64-bit processor.
---
--[[
```lua
os.is64bit()
```
]]
---

---
---<h2>examples</h2>
---
--[[
```lua
if os.is64bit() then
   print("This is a 64-bit system")
else
   print("This is NOT a 64-bit system")
end
```
]]
function os.is64bit() end

--#endregion os.is64bit
--#region os.isdir


---<h1><a href="https://premake.github.io/docs/os/os.isdir">os.isdir</a></h1>
---Checks for the existence of directory.
---
--[[
```lua
os.isdir("path")
```
]]
---
---
---@param path string `path` is the file system path to check.
---@see os.isfile
---@see os.stat
---
function os.isdir(path) end

--#endregion os.isdir
--#region os.isfile


---<h1><a href="https://premake.github.io/docs/os/os.isfile">os.isfile</a></h1>
---Checks for the existence of file.
---
--[[
```lua
os.isfile("path")
```
]]
---
---
---@param path string `path` is the file system path to check.
---@see os.isdir
---@see os.stat
---
function os.isfile(path) end

--#endregion os.isfile
--#region os.islink


---<h1><a href="https://premake.github.io/docs/os/os.islink">os.islink</a></h1>
---Determines if the given path is a symlink or reparse point.
---
--[[
```lua
os.islink(path)
```
]]
---
---
---@param path string `path` is the path to the file or directory to be checked.
---
---
function os.islink(path) end

--#endregion os.islink
--#region os.istarget

---<h1><a href="https://premake.github.io/docs/os/os.istarget">os.istarget</a></h1>
---Checks the target operating system against a particular identifier or tag.
---See os.getSystemTags for documentation about OS tags.
---
---@see os.target
---@see os.getSystemTags
---<h2>examples</h2>
---
--[[
```lua
print("Android: " .. os.istarget("android"))
print("Mobile: " .. os.istarget("mobile"))
print("Desktop: " .. os.istarget("desktop"))
```
]]
function os.istarget() end

--#endregion os.istarget
--#region os.linkdir


---<h1><a href="https://premake.github.io/docs/os/os.linkdir">os.linkdir</a></h1>
---Creates a new symbolic link to a directory.
---
--[[
```lua
os.linkdir("src", "dst")
```
]]
---
---
---@param list string `src` is the path of the directory to create a symbolic link to.
---
---
function os.linkdir(list) end

--#endregion os.linkdir
--#region os.linkfile


---<h1><a href="https://premake.github.io/docs/os/os.linkfile">os.linkfile</a></h1>
---Creates a new symbolic link to a file.
---
--[[
```lua
os.linkfile("src", "dst")
```
]]
---
---
---@param list string `src` is the path of the file to create a symbolic link to.
---
---
function os.linkfile(list) end

--#endregion os.linkfile
--#region os.locate


---<h1><a href="https://premake.github.io/docs/os/os.locate">os.locate</a></h1>
---Searches the Premake path for files.
---
--[[
```lua
os.locate("file_name1", ...)
```
]]
---
---
---@param table string `file_name` is file name for which to search.
---@see os.pathsearch
---
function os.locate(table) end

--#endregion os.locate
--#region os.matchdirs


---<h1><a href="https://premake.github.io/docs/os/os.matchdirs">os.matchdirs</a></h1>
---Perform a wildcard match to locate one or more directories.
---
--[[
```lua
matches = os.matchdirs("pattern")
```
]]
---
---
---@param pattern number is the file system path to search.
---@see os.matchfiles
---<h2>examples</h2>
---
--[[
```lua
matches = os.matchdirs("src/*")      -- non-recursive match
matches = os.matchdirs("src/**")     -- recursive match

matches = os.matchdirs("src/test*")  -- may also match partial names
```
]]
function os.matchdirs(pattern) end

--#endregion os.matchdirs
--#region os.matchfiles


---<h1><a href="https://premake.github.io/docs/os/os.matchfiles">os.matchfiles</a></h1>
---Perform a wildcard match to locate one or more files.
---
--[[
```lua
matches = os.matchfiles("pattern")
```
]]
---
---
---@param pattern number is the file system path to search.
---@see os.matchdirs
---<h2>examples</h2>
---
--[[
```lua
matches = os.matchfiles("src/*.c")   -- non-recursive match
matches = os.matchfiles("src/**.c")  -- recursive match
```
]]
function os.matchfiles(pattern) end

--#endregion os.matchfiles
--#region os.mkdir


---<h1><a href="https://premake.github.io/docs/os/os.mkdir">os.mkdir</a></h1>
---Creates a new file system directory.
---
--[[
```lua
os.mkdir("path")
```
]]
---
---
---@param path string `path` is the file system path to be created.
---@see os.chdir
---@see os.getcwd
---@see os.rmdir
---
function os.mkdir(path) end

--#endregion os.mkdir
--#region os.outputof


---<h1><a href="https://premake.github.io/docs/os/os.outputof">os.outputof</a></h1>
---Runs a shell command and return the output.
---
--[[
```lua
result, errorCode = os.outputof("command")
```
]]
---
---
---@param command any is a shell command to run.
---@see os.executef
---<h2>examples</h2>
---
--[[
```lua
-- Get the ID for the host processor architecture
local proc = os.outputof("uname -p")
```
]]
function os.outputof(command) end

--#endregion os.outputof
--#region os.pathsearch


---<h1><a href="https://premake.github.io/docs/os/os.pathsearch">os.pathsearch</a></h1>
---Searches a collection of paths for a particular file.
---
--[[
```lua
p = os.pathsearch("fname", "path1", ...)
```
]]
---
---
---@param fname string is the name of the file being searched.
---@see os.locate
---
function os.pathsearch(fname) end

--#endregion os.pathsearch
--#region os.realpath


---<h1><a href="https://premake.github.io/docs/os/os.realpath">os.realpath</a></h1>
---Returns the canonical absolute path of a filename.
---
--[[
```lua
ok, err = os.realpath(path)
```
]]
---
---This functions calls realpath() on Posix systems and _fullpath on Windows.
---
---
---@param path string is the path to be converted.
---@see os.getcwd
---
function os.realpath(path) end

--#endregion os.realpath
--#region os.remove


---<h1><a href="https://premake.github.io/docs/os/os.remove">os.remove</a></h1>
---Remove files from the file system.
---
--[[
```lua
os.remove("path", ...)
```
]]
---
---
---@param table string `path` is the file system path to be removed.
---@see os.rmdir
---@see os.matchfiles
---<h2>examples</h2>
---
--[[
```lua
local ok, err = os.remove{"**.bak", "**.log"}
if not ok then
	error(err)
end
```
]]
function os.remove(table) end

--#endregion os.remove
--#region os.rename


---<h1><a href="https://premake.github.io/docs/os/os.rename">os.rename</a></h1>
---Rename file system files or directories.
---
--[[
```lua
os.rename("path", "newpath")
```
]]
---
---
---@param list string `path` is the file system path to be renamed.
---@see os.rmdir
---@see os.matchfiles
---<h2>examples</h2>
---
--[[
```lua
local ok, err = os.rename{"file.bak", "file.log"}
if not ok then
	error(err)
end
```
]]
function os.rename(list) end

--#endregion os.rename
--#region os.rmdir


---<h1><a href="https://premake.github.io/docs/os/os.rmdir">os.rmdir</a></h1>
---Removes an existing directory as well as any files or subdirectories it contains.
---
--[[
```lua
os.rmdir("path")
```
]]
---
---
---@param path string `path` is the file system path to be removed.
---@see os.chdir
---@see os.getcwd
---@see os.mkdir
---
function os.rmdir(path) end

--#endregion os.rmdir
--#region os.stat


---<h1><a href="https://premake.github.io/docs/os/os.stat">os.stat</a></h1>
---Function retrieves information about a file.
---
--[[
```lua
info = os.stat("path")
```
]]
---
---
---@param path string is the file system path to the file for which to retrieve information.
---@see os.isdir
---@see os.isfile
---
function os.stat(path) end

--#endregion os.stat
--#region os.target

---<h1><a href="https://premake.github.io/docs/os/os.target">os.target</a></h1>
---Returns the name of the operating system currently being targeted.
---See system for a complete list of OS identifiers.
---
---The targeted OS may be overridden on the command line with the `--os` option.
---```
---$ premake5 --os=macosx xcode4
---```
---
---@see system
---<h2>examples</h2>
---
--[[
```lua
print("Target os: " .. os.target())
```
]]
function os.target() end

--#endregion os.target
--#region os.targetarch


---<h1><a href="https://premake.github.io/docs/os/os.targetarch">os.targetarch</a></h1>
---Returns the id of the architecture currently being targeted.
---See architecture for a complete list of architecture identifiers.
---
--[[
```lua
id = os.targetarch()
```
]]
---
---This will return `nil` by default instead of returning the architecture for the current running
---system due to backwards compatibility.
---
---A target architecture can be set either via setting _TARGET_ARCH or
---by passing an architecture via the `--arch` command line option (which has the most priority).
---

---@see _TARGET_ARCH
---@see os.hostarch
---@see architecture
---<h2>examples</h2>
---
--[[
```lua
print(os.targetarch())
-- "x86_64"
end
```
]]
function os.targetarch() end

--#endregion os.targetarch
--#region os.touchfile


---<h1><a href="https://premake.github.io/docs/os/os.touchfile">os.touchfile</a></h1>
---Updates the last modified date of a file without changing its contents.
---
--[[
```lua
ok, err = os.touchfile("filename")
```
]]
---
---
---@param filename string is the file system path to the target file.
---
---
function os.touchfile(filename) end

--#endregion os.touchfile
--#region os.uuid


---<h1><a href="https://premake.github.io/docs/os/os.uuid">os.uuid</a></h1>
---Returns a Universally Unique Identifier.
---
--[[
```lua
id = os.uuid(name)
```
]]
---
---
---@param name string is an optional string value.
---
---
function os.uuid(name) end

--#endregion os.uuid
--#region os.writefile_ifnotequal


---<h1><a href="https://premake.github.io/docs/os/os.writefile_ifnotequal">os.writefile_ifnotequal</a></h1>
---Writes a string to a file, if the string differs from the current version of the file.
---
--[[
```lua
ok, err = os.writefile_ifnotequal("text", "filename")
```
]]
---
---
---@param text string is the string to be written to the file.
---
---
function os.writefile_ifnotequal(text) end

--#endregion os.writefile_ifnotequal