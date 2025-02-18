# premake-manager
this is an unofficial extension to manage [premake](https://premake.github.io) projects

![GitHub package.json version](https://img.shields.io/github/package-json/v/lolrobbe2/premake-manager?style=for-the-badge&color=blue) ![GitHub Release](https://img.shields.io/github/v/release/lolrobbe2/premake-manager?include_prereleases&sort=date&style=for-the-badge&color=green)


## Features

1) install/manage multiple versions of premake at the same time.
2) easily run premake actions
3) auto detect premake5.lua
## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.
## installing test version
type >VSIX in the top bar and press enter and select the package.
## commands:

1) premake.action.run
    run premake action
2) premake.setversion
    set the used premake version
3) premake.action.default.set
    set default premake action
4) premake.action.default.run
    run default premake action
5) premake.cleanup
    cleanup the .premake folder
6) premake.terminal.new
    opens a new premake5 terminal
7) premake.terminal.get
    gets an existing premake5 terminal or opens a new one
## Extension Settings

## github access
github is used to make it so you are not rate limited!

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

**Enjoy!**
