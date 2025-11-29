---@meta

---<h1><a href="https://premake.github.io/docs/http/http-options-table">HTTP options</a></h1>
---<h2>See Also</h2>
---
---@see http.download
---@see http.get
---@see http.post
---
---<h2>Example</h2>
---
---@example
--[[
```lua
local options = {
    timeoutms = 2500,
    sslverifypeer = 0,
    username = "premake",
    password = "hunter2",
}
http.post("http://null.com", "data", options)
```
]]
---@class PremakeHttpOptions
---@field progress function is a Lua callback function that receives two numeric arguments representing total and current download progress in bytes.
---@field headers table<string,string> is a Lua table with HTTP headers to be used on the request.
---@field userpwd string is a username and optional password in the format of `username`:`password` which will be used to authenticate the request
---@field username string is the username which will be used to authenticate the request
---@field password string is the password which will be used to authenticate the request
---@field timeout number is the timeout in seconds.
---@field timeoutms number is the timeout in milliseconds.
---@field sslverifyhost string Verify the host name in the SSL certificate. See [CURLOPT_SSL_VERIFYHOST](https://curl.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html)
---@field sslverifypeer string Verify the SSL certificate. See [CURLOPT_SSL_VERIFYPEER](https://curl.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html)
---@field proxyurl string is the URL which will be used as the proxy for the request. See [CURLOPT_PROXY](https://curl.se/libcurl/c/CURLOPT_PROXY.html)

---@class PremakeHttpAPI
---
---class containing HTTP helper methods
---@see http.download
---@see http.get
---@see http.post
http={}
_G.http = http

---<h1><a href="https://premake.github.io/docs/http/http.download">http.download</a></h1>
---Downloads an HTTP resource from the specified URL to a file.
---@param url string
---@param file string
---@param options PremakeHttpOptions
---@return string result_str is set to "OK" if successful or contains a description of the failure.
---@return number response_code is the HTTP [result code](https://www.rfc-editor.org/rfc/rfc9110.html) of the download.
---
---<h2>Example</h2>
---
---@example
--[[
```lua
local result_str, response_code = http.download("http://example.com/file.zip", "file.zip")
```
--]]
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
function http.download(url,file,options) end

---<h1><a href="https://premake.github.io/docs/http/http.get">http.get</a></h1>
---Perform a HTTP GET request using the specified URL.
---
--[[```lua
http.get(url, { options })
```
--]]
---
---@param url string is the URL to be downloaded.
---@param options PremakeHttpOptions is a table of options used for this HTTP request.
---@return any resource is the content that was retrieved or nil if it could not be retrieved.
---@return string result_str is set to "OK" if successful or contains a description of the failure.
---@return number result_code is the HTTP result code of the get.
---
---<h2>Example</h2>
---
---@example
--[[
```lua
local resource, result_str, response_code = http.get("http://example.com/api.json")
```
--]]
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
function http.get(url,options) end

---<h1><a href="https://premake.github.io/docs/http/http.post">http.post</a></h1>
function http.post(url, data, options) end