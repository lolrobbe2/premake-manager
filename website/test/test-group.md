# test commands

- [test all](#1-all)
- [test group](#2-group)

The Premake Manager selftest commands are used to verify tool health and environment configuration.

> [!ATTENTION]
> While these commands are available in all environments, they are **primarily intended for development cases**. Running them in production is generally unnecessary unless you are troubleshooting a specific installation issue.

## 1 all

Run all registered self-tests across every command group and system check.

**USAGE:**
`premake manager test all [OPTIONS]`

| OPTION     | DESCRIPTION             |
| :--------- | :---------------------- |
| -h, --help | Prints help information |

## 2 group

Run all tests associated with a specific functional group (e.g., `workspace`, `remotes`).

**USAGE:**
`premake manager test group [OPTIONS]`

| OPTION                   | DESCRIPTION                       | REQUIRED |
| :----------------------- | :-------------------------------- | :------- |
| -g, --group <GROUPNAME\> | The name of the test group to run | ✔️       |
| -h, --help               | Prints help information           | ✖️       |