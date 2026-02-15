local json = require("json")

local function exportLoweredList()
    local function contains(arr, item)
        for k, v in pairs(arr) do
            if v == item then
                return true
            end
        end
        return false
    end
    
    local output = {}
    for k, v in pairs(premake.field._loweredList) do
        local allowedList = nil
        if v.allowed ~= nil and type(v.allowed) ~= "function"then
            allowedList = {}
            for k, val in pairs(v.allowed) do
                if type(val) == "string" and not contains(allowedList, val) then
                    table.insert(allowedList, val)
                    -- table.insert(allowedList, val:lower())
                end
            end
        end

        output[k] = {
            kind    = v.kind,
            allowed = allowedList,
            scope   = v.scope,
        }
    end

    local file = assert(io.open("premake_fields.json", "w"))
    file:write(json.encode(output, { indent = true }))
    file:close()
end
local json = {}

-- very simple JSON encoder for arrays of strings
function json.encode_array(arr)
    local parts = {}
    for i, v in ipairs(arr) do
        parts[i] = string.format("%q", v)
    end
    return "[" .. table.concat(parts, ",") .. "]"
end

-- Walk the root container and collect names
local function exportContainers()
    local root = premake.api.rootContainer()
    local names = {}

    for key, container in pairs(root) do
        -- each container has a .name field
        
        table.insert(names, key)
    end

    return json.encode_array(names)
end

-- Example: write to file
local f = io.open("containers.json", "w")
f:write(exportContainers())
f:close()

exportLoweredList()


