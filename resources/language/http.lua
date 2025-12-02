---@meta

http = {}
--#region options

---@class httpOptions
---<h1><a href="https://premake.github.io/docs/http/options">options</a></h1>
---@field progress any is a Lua callback function that receives two numeric arguments representing total and current download progress in bytes.
---@field headers table is a Lua table with HTTP headers to be used on the request.
---@field userpwd string is a username and optional password in the format of username:password which will be used to authenticate the request
---@field username string is the username which will be used to authenticate the request
---@field password any is the password which will be used to authenticate the request
---@field timeout any is the timeout in seconds.
---@field timeoutms any is the timeout in milliseconds.
---@field sslverifyhost string Verify the host name in the SSL certificate. See [CURLOPT_SSL_VERIFYHOST](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html)
---@field sslverifypeer any Verify the SSL certificate. See [CURLOPT_SSL_VERIFYPEER](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html)
---@field proxyurl any is the URL which will be used as the proxy for the request. See [CURLOPT_PROXY](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html)

--#endregion options
--#region http.download


---<h1><a href="https://premake.github.io/docs/http/http.download">http.download</a></h1>
---Downloads an HTTP resource from the specified URL to a file.
---
--[[
```lua
http.download(url, file, { options })
```
]]
---
---
---@param url any 
---@param file any 
---@param options httpOptions `url` is the URL to be downloaded.
---@see http.get
---<h2>examples</h2>
---
--[[
```lua
local result_str, response_code = http.download("http://example.com/file.zip", "file.zip")
```
]]
---
--[[
```lua
function progress(total, current)
  local ratio = current / total;
  ratio = math.min(math.max(ratio, 0), 1);
  local percent = math.floor(ratio * 100);
  print("Download progress (" .. percent .. "%/100%)")
end

local result_str, response_code = http.download("http://example.com/file.zip", "file.zip", {
    progress = progress,
    headers = { "From: Premake", "Referer: Premake" },
    userpwd = "username:password"
})
```
]]
function http.download(url, file, options) end

--#endregion http.download
--#region http.get


---<h1><a href="https://premake.github.io/docs/http/http.get">http.get</a></h1>
---Perform a HTTP GET request using the specified URL.
---
--[[
```lua
http.get(url, { options })
```
]]
---
---
---@param url any 
---@param options httpOptions `url` is the URL to be downloaded.
---@see http.download
---@see http.post
---<h2>examples</h2>
---
--[[
```lua
local resource, result_str, response_code = http.get("http://example.com/api.json")
```
]]
---
--[[
```lua
function progress(total, current)
  local ratio = current / total;
  ratio = math.min(math.max(ratio, 0), 1);
  local percent = math.floor(ratio * 100);
  print("Download progress (" .. percent .. "%/100%)")
end

local resource, result_str, response_code = http.get("http://example.com/api.json", {
    progress = progress,
    headers = { "From: Premake", "Referer: Premake" },
    userpwd = "username:password"
})
```
]]
function http.get(url, options) end

--#endregion http.get
--#region http.post


---<h1><a href="https://premake.github.io/docs/http/http.post">http.post</a></h1>
---Perform a HTTP POST request to the specified URL.
---
--[[
```lua
http.post(url, data, { options })
```
]]
---
---
---@param url any 
---@param data any 
---@param options httpOptions `url` is the URL to POST to.
---@see http.download
---@see http.get
---<h2>examples</h2>
---
--[[
```lua
local resource, result_str, response_code = http.post("http://example.com/api.json", "somedata")
```
]]
function http.post(url, data, options) end

--#endregion http.post