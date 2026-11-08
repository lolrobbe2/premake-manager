# Change Log

All notable changes to the "premake-manager" extension will be documented in this file.

### 0.0.1 - alpha

Initial release of premake manager

1) added ability to download premake versions
2) added ability to run premake5 
3) added abiltty to set default action
4) added ability to run default action

### 0.0.2 - alpha
1) fixed the build system using esbuild

### 0.0.3 - alpha
the end of exams update  (i passed all of them!)
#### features/bugfixes
1) added vscode task support
2) added the premake workspace explorer/viewer
3) added premake5 terminal
    - get new or existing terminal: ctrl+alt+p/cmd+alt+p
    - get new terminal: ctrl+alt+m/cmd+alt+m
    - get help for the terminal => just type: help
4) moved from PremakeRunner to the new terminal.
5) fixed bug where premake could no be executed on unix systems
6) added workspace generation command (experimental/ ran out of time)
7) added snippet for tasks
8) added snippet for workspace and include
9) general bug fixes

### 0.1.0 - beta

the summer update

### TL;DR
The extension has been reworked from the ground up to be more streamlined and easier to work with.
This means that the available feature set has been lowered. This is with the goal of supporting plugins and extensions. The major culmination of this goal has been the creation of a CLI application called [premake-manager-cli](https://github.com/lolrobbe2/premake-manager-cli) wich will serve as the common interface for all future extensions. This also ensures the new premakeConfig.yml format is reusable accros future extensions. 

With this new purpose build config file comes module support. (a module registry is in the works, and can be found here [premake-registry](https://github.com/lolrobbe2/premake-registry). The registry is still a work in progress).

Enjoy this new version.

And please leave feedback!


### 0.1.2 - beta

language support hotfix, snippets

### TL;DR

after some back and forth i was able to fix the auto genrating meta files. i also took the liberty of adding a couple of handy snippets

### what is next?

next on the agenda is the module, library registry for premake.

### 0.1.3 - beta

added first class support for modules and libraries!

- Adding a module is now as simple as calling **module add**
- Adding a library is now as simple as calling **library add**

### TL;DR

the registry is live and can be found [here](https://premake-registry.onrender.com/)
feel free to register your own modules and libraries

### what is next?

1) cleaning of the registry code and making it fully functional (almost done, API needs paging).
2) updating Premaker for module, library support
3) vscode visual integration with the registry.

### v0.2.0 common index support, tasks, documentation!

#### What's Changed
* fix: docs/generate bugs by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/40
* Feat: registry (API+UI) by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/41
* feat: add auto install and reduce packaged build (37* improvement) by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/43
* fix: add codicon by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/44
* feat: add prerelease pipeline by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/46
* fix: broken ci by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/48
* feat: added all the index and remotes commands by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/50
* feat: added local common index reader by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/54
* feat: add visual studio code registry editor panel. by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/55
* fix: added setup-editor call by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/57
* fix: skipDuplicate removed for pre-release by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/58
* fix: vsce bug by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/59
* fix: ci 3 by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/60
* fix:hookup terminal interface to providers by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/62
* feat: added documentation website by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/64
* feat: added documentation viewer, readme, hompage by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/66
* fix: trap by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/68
* feat: added source branch to artifact option and updated by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/71
* Feat: add cli path settings by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/73
* Feat:  add cli path settings by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/75
* feat: add support for tasks by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/77
* docs: add new version by @lolrobbe2 in https://github.com/lolrobbe2/premake-manager/pull/79

### v0.3.0

- Added automatic detection of installed build tools (GNU Make, Ninja and MSBuild).
- Added dynamically generated build tasks for every Premake workspace, project and configuration.
- Integrated generated tasks into the VS Code Task system and Build task group.
- Updated language files to latest