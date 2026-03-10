# module commands

- [module info](#1-info)
- [module install](#2-install)
- [module add](#3-add)
- [module remove](#4-remove)

Manage premake modules

## 1 info

get the info from a module

**USAGE:**
`module info <githublink>`

| ARGUMENT      | DESCRIPTION              | REQUIRED |
| :------------ | :----------------------- | :------- |
| <githublink\> | githublink of the module | ✖️        |

> [!TIP]
> If the githublink is not provided, the CLI will prompt you for it.

## 2 install

install a module given its github link

**USAGE:**
`module install <githublink>`

| ARGUMENT      | DESCRIPTION              | REQUIRED |
| :------------ | :----------------------- | :------- |
| <githublink\> | githublink of the module | ✖️        |

> [!NOTE] 
> This also `adds` the `module` to the `config`.
> 
> [!TIP]
> If the githublink is not provided, the CLI will prompt you for it.

## 3 add

add a module to the configuration

**USAGE:**
`module add <githublink>`

| ARGUMENT      | DESCRIPTION              | REQUIRED |
| :------------ | :----------------------- | :------- |
| <githublink\> | githublink of the module | ✖️        |

> [!WARNING] 
> This does `not install` the module; see the [install](#2-install) command.

> [!TIP]
> If the githublink is not provided, the CLI will prompt you for it.

## 4 remove

remove a module

**USAGE:**
`module remove [githublink]`

| ARGUMENT     | DESCRIPTION              | REQUIRED |
| :----------- | :----------------------- | :------- |
| [githublink] | githublink of the module | ✖️        |

> [!TIP]
> If the githublink is not provided, the CLI will prompt you to select a module to remove.

> [!WARNING]
> It is highly recommended to use the integrated UI of the extension for a safer and more visual management experience. The UI integrates directly with the **unofficial registry**, making module discovery and installation much easier.