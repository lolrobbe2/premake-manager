# index commands

- [index new](#1-new)
- [index add library](#2-add-library)
- [index add uri library](#3-add-uri-library)
- [index add dependency](#4-add-dependency)

Manage the common index for libraries and dependencies.

## 1 new

Initialize a new local index from a remote source.

**USAGE:**
`index new [REMOTE] [OPTIONS]`

| ARGUMENT | DESCRIPTION                   | REQUIRED |
| :------- | :---------------------------- | :------- |
| [REMOTE] | remote github url of the repo | ✖️        |

> [!TIP]
> If the **REMOTE** is omitted, the CLI will interactively prompt you for the URL.

## 2 add library

Add a library to the local index by manually specifying its metadata.

**USAGE:**
`index add library [OWNER] [REPO] [DESCRIPTION] [OPTIONS]`

| ARGUMENT      | DESCRIPTION                            | REQUIRED |
| :------------ | :------------------------------------- | :------- |
| [OWNER]       | the owner of the library (github name) | ✖️        |
| [REPO]        | the name of the repo                   | ✖️        |
| [DESCRIPTION] | the library description                | ✖️        |

## 3 add uri library

Add a library from a github uri to the local index. This is a shorthand for adding libraries via link.

**USAGE:**
`index add uri library <githublink\> [OPTIONS]`

| ARGUMENT      | DESCRIPTION                | REQUIRED |
| :------------ | :------------------------- | :------- |
| <githublink\> | github link to the library | ✔️        |

## 4 add dependency

Add a dependency requirement to a library already existing in the local index.

**USAGE:**
`index add dependency [githublink] [OWNER] [REPO] [RANGE] [OPTIONS]`

| ARGUMENT     | DESCRIPTION                                      | REQUIRED |
| :----------- | :----------------------------------------------- | :------- |
| [githublink] | The GitHub link of the library or the owner/repo | ✖️        |
| [OWNER]      | the owner of the dependency (github name)        | ✖️        |
| [REPO]       | the name of the dependency                       | ✖️        |
| [RANGE]      | the version range of the dependency              | ✖️        |

> [!TIP]
> Just like other commands, if you omit these arguments, the CLI will guide you through a selection process.