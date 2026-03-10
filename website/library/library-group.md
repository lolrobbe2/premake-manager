# library commands

- [library info](#1-info)
- [library install](#2-install)
- [library add](#3-add)
- [library remove](#4-remove)

Manage premake libraries

## 1 info

get the info from a library

**USAGE:**
`library info <githublink>`

| ARGUMENT      | DESCRIPTION               | REQUIRED |
| :------------ | :------------------------ | :------- |
| <githublink\> | githublink of the library | ✖️        |

> [!TIP]
> If the githublink is not provided, the CLI will prompt you for it.

## 2 install

install a library given its github link

**USAGE:**
`library install <githublink>`

| ARGUMENT      | DESCRIPTION               | REQUIRED |
| :------------ | :------------------------ | :------- |
| <githublink\> | githublink of the library | ✖️        |

> [!NOTE] 
> This also `adds` the `library` to the `config`.
> 
> [!TIP]
> If the githublink is not provided, the CLI will prompt you for it.

## 3 add

add a library to the configuration

**USAGE:**
`library add <githublink>`

| ARGUMENT      | DESCRIPTION               | REQUIRED |
| :------------ | :------------------------ | :------- |
| <githublink\> | githublink of the library | ✖️        |

> [!WARNING] 
> This does `not install` the library; see the [install](#2-install) command.

> [!TIP]
> If the githublink is not provided, the CLI will prompt you for it.

## 4 remove

remove a library

**USAGE:**
`library remove [githublink]`

| ARGUMENT     | DESCRIPTION               | REQUIRED |
| :----------- | :------------------------ | :------- |
| [githublink] | githublink of the library | ✖️        |

> [!TIP]
> If the githublink is not provided, the CLI will prompt you to select a library to remove.

> [!WARNING]
> It is highly recommended to use the integrated UI of the extension for a safer and more visual management experience. The UI integrates directly with the **unofficial registry**, making library discovery and installation much easier.