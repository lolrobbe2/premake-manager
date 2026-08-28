local p = premake

p.modules.export = {}
p.modules.export._VERSION = p._VERSION

local export = p.modules.export

export.workspace = {}
local workspace = export.workspace

export.project = {}
local project = export.project

export.config = {}
local config = export.config

export.elements = {}

--#region WORKSPACE
export.elements.workspace = function(wks)
	return {
		workspace.workspace,
		workspace.configurations,
		workspace.location,
		workspace.architecture,
		workspace.projects,
		workspace.workspaceTail
	}
end
function export.prepareWorkspace(wks)
	-- set the default location
	wks.location_backup = wks.location
	wks.location = _OPTIONS["exportdir"] .. "export/workspaces"
end

function export.generateWorkspace(wks)
	p.eol("\r\n")
	p.indent("  ")
	p.generate(wks, ".json", workspace.generate)
end

function export.generateProject(prj)
	p.eol("\r\n")
	p.indent("  ")
	p.generate(prj, ".json", project.generate)
end

function workspace.generate(wks)
	export.prepareWorkspace(wks)
	p.callArray(export.elements.workspace, wks)
end

function workspace.workspace(wks)
	p.w('{')
	p.indent("  ", 1)
	p.w('"name":"%s",', wks.name)
end

function workspace.configurations(wks)
	p.w('"configurations":["%s"],', table.concat(workspace.getconfigs(wks), '","'))
end

function workspace.location(wks)
	p.w('"location": "%s",', path.getrelative(os.getcwd(), wks.location_backup))
end

function workspace.architecture(wks)
	p.w('"architecture": "%s",', wks.architecture)
end

function workspace.projects(wks)
	local projectNames = {}
	for _, prj in ipairs(wks.projects) do
		table.insert(projectNames, prj.name)
	end
	p.w('"projects":["%s"]', table.concat(projectNames, '","'))
end

function workspace.workspaceTail(wks)
	p.indent("  ", 0)
	p.w('}')
end

--#endregion workspace

--#region PROJECT
export.elements.project = function(prj)
	return {
		project.project,
		project.kind,
		project.language,
		project.files,
		project.links,
		project.projectTail
	}
end

function export.prepareProject(prj)
	-- set the default location
	prj.location_backup = prj.location
	prj.location = _OPTIONS["exportdir"] .. "export/projects"
end

function project.generate(prj)
	export.prepareProject(prj)
	p.callArray(export.elements.project, prj)
end

function project.prop(prj, key)
	p.w('"%s":"%s",', key, prj[key])
end

function project.project(prj)
	p.w('{')
	p.indent("  ", 1)
	project.prop(prj, "name")
end

function project.kind(prj)
	project.prop(prj, "kind")
end

function project.language(prj)
	project.prop(prj, "language")
end

function project.links(prj)
	local projectDependencies =  p.project.getdependencies(prj,'linkOnly')
	local projectLinkNames = {}
	for _, dependency in ipairs(projectDependencies) do
		if dependency.name ~= "" then
			table.insert(projectLinkNames,dependency.name)
		end
	end
	p.w('"links":[')
	p.indent("  ", 2)
	--manually add the concat part
	if #projectLinkNames > 0 then
		p.w('"' .. table.concat(projectLinkNames, '",\n\t\t"') .. '"')
	end
	p.indent("  ", 1)

	p.w(']')
end

function project.files(prj)
	local files = {}

	for _, block in ipairs(prj._cfgset.blocks) do
		if block.files then
			for _, file in ipairs(block.files) do
				table.insert(files, path.getrelative(prj.basedir, file))
			end
		end
	end

	p.w('"files":[')
	p.indent("  ", 2)
	--manually add the concat part
	p.w('"' .. table.concat(files, '",\n		"') .. '"')

	p.indent("  ", 1)

	p.w('],')
	
end

function project.projectTail(prj)
	p.indent("  ", 0)
	p.w('}')
end

--#endregion

--#region UTILS
function workspace.getconfigs(wks)
	local cfgs = {}
	for cfg in p.workspace.eachconfig(wks) do
		table.insert(cfgs, cfg.buildcfg)
	end
	return cfgs
end

function project.getconfigs(prj)
	local cfgs = {}
	for cfg in p.project.eachconfig(prj) do
		table.insert(cfgs, cfg.buildcfg)
	end
	return cfgs
end


--#endregion
newoption {
	trigger = "exportdir",
	description = "Set the export directory",
	default = "."
}
newaction {
	trigger = "export",
	shortname = "premake5 export module",
	description = "export workspace properties to json, xml",
	onWorkspace = function(wks)
		export.generateWorkspace(wks)
	end,
	onProject = function(prj)
		export.generateProject(prj)
	end
}
