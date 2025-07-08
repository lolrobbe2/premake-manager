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
