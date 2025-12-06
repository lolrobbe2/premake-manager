---Creates a new workspace.
---@param value string
local function workspace(value) end
_G.workspace=workspace;

---Creates a new project.
---@param value string
local function project(value) end
_G.project=project;

---Creates a new project.
---@param value string
local function group(value) end
_G.group=group;


---Starts a "workspace group", a virtual folder to contain one or more projects.
---@param value string
local function group(value) end
_G.group=group;

---Looks for and executes another script file, if it hasn't been run previously.
---@param value string
local function include(value) end
_G.include=include;


---Premake's filter system allows you target build settings to the exact configurations in which you want them to appear.
---@param value string
local function filter(value) end
_G.filter=filter;

---A usage specifies a reusable configuration scope which can be later consumed by uses.
---@param value string
local function usage(value) end
_G.usage=usage;