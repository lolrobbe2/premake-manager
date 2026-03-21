# workspace commands

- [workspace new](#1-new)

Manage premake workspaces.

## 1 new

Create a new workspace with accompanying projects.

**USAGE:**
`workspace new [OPTIONS]`

| OPTION                                             | DESCRIPTION                                                                                                  | REQUIRED |
| :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :------- |
| `--workspace <NAME\>`                              | Name of the workspace. Use multiple times for multiple workspaces.                                           | ✖️        |
| `--config <NAME\|CONFIGS\>`                        | Comma-separated list of configurations. Applies to the last defined workspace.                               | ✖️        |
| `--project <NAME\|PROJ_NAME\|LOCATION\|LANGUAGE\>` | Define a project in the format `Name:Project_Name:Location:Language`. Applies to the last defined workspace. | ✖️        |

> [!TIP]
> This command is highly interactive. If you run `workspace new` without flags, the CLI will guide you through an interactive wizard to create workspaces, select configurations, and define projects step-by-step.

> [!IMPORTANT]
> When using flags via the CLI, the order is significant. The `--config` and `--project` arguments are context-sensitive and will be attached to the **workspace** immediately preceding them in the command string.

### Project Format Detail
The `--project` flag requires a specific four-part format separated by colons:
`Name:Project_Name:Location:Language`

**Example:**
`--project "App:MyApplication:./src:C++"`

---
