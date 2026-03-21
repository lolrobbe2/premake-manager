# remotes commands

- [remotes view](#1-view)
- [remotes add](#2-add)
- [remotes update](#3-update)
- [remotes remove](#4-remove)
- [remotes reset](#5-reset)

Manage locally configured remote repositories and sources.

## 1 view

Show all the local remotes

**USAGE:**
`remotes view [OPTIONS]`

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

## 2 add

Add a new local remote

**USAGE:**
`remotes add [OWNER] [REPO] [OPTIONS]`

| ARGUMENT | DESCRIPTION       | REQUIRED |
| :------- | :---------------- | :------- |
| [OWNER]  | owner of the repo | ✖️        |
| [REPO]   | name of the repo  | ✖️        |

> [!TIP]
> Since these are not required in the command string, the CLI will interactively prompt you for the **OWNER** and **REPO** if you leave them out.

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

## 3 update

Update outdated remotes

**USAGE:**
`remotes update [FORCE] [OPTIONS]`

| ARGUMENT | DESCRIPTION    | REQUIRED |
| :------- | :------------- | :------- |
| [FORCE]  | force the sync | ✖️        |

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

## 4 remove

Remove a remote

**USAGE:**
`remotes remove [OWNER] [REPO] [OPTIONS]`

| ARGUMENT | DESCRIPTION       | REQUIRED |
| :------- | :---------------- | :------- |
| [OWNER]  | owner of the repo | ✖️        |
| [REPO]   | name of the repo  | ✖️        |

> [!TIP]
> Since these are not required in the command string, the CLI will interactively prompt you for the **OWNER** and **REPO** if you leave them out.

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

## 5 reset

Reset remotes to default

**USAGE:**
`remotes reset [OPTIONS]`

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |
