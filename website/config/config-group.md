# config commands

- [config version](#version)
- [config view](#view)

Manage the global configuration of Premake Manager workspace.

## version

Set or change the active Premake version in the global configuration.

**USAGE:**
`config version [VERSION] [OPTIONS]`

| ARGUMENT  | DESCRIPTION        | REQUIRED |
| :-------- | :----------------- | :------- |
| [VERSION] | version to install | ✖️        |

> [!TIP]
> If the version is not provided, the CLI will interactively prompt you to select from the installed versions.

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

## view

Display the current global configuration settings.

**USAGE:**
`config view [OPTIONS]`

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

> [!NOTE]
> This command provides a read-only view of your current premakeConfig.yml.
