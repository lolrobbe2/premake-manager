# tasks (2)

## premake5

### premake example

```json
{
    "label": "Run premake5",
    "type": "premake5",
    "action": "vs2026",
    "group": {
        "kind": "build",
        "isDefault": true
    },
    "detail": "Custom task to run premake5 vs2026"
}
```

**PARAM:**

| OPTION  | DESCRIPTION                              |
| :------ | :--------------------------------------- |
| action  | the action to run using premake5         |
| file    | the premake5.lua file location           |
| options | list of options to append to the command |

## premakeManager

### manager example

```json
{
    "label": "Run premake manager",
    "type": "premakeManager",
    "command": "version list --releases",
    "group": {
        "kind": "build",
        "isDefault": true
    },
    "detail": "Custom task to run list installed releases"
}
```

**PARAM:**

| OPTION  | DESCRIPTION                               |
| :------ | :---------------------------------------- |
| command | The command to run on premake manager cli |


## premakeBuild (automatically generated)

Premake Manager automatically detects installed build tools and generates build tasks for every discovered Premake workspace, project and configuration.

No manual `tasks.json` configuration is required.

### Supported build tools

| Tool | Description |
| :--- | :--- |
| `make` | GNU Make |
| `ninja` | Ninja Build |
| `msbuild` | Microsoft Build Engine (MSBuild), including Visual Studio solutions |

MSBuild supports both `.sln` and `.slnx` solution files.

### Task definition

All automatically generated tasks use the task type:

```json
{
  "type": "premakeBuild"
}
```

### Task name format

Generated task names follow this format:

```text
[<workspaceName>][<configuration>] <projectName> (<tool>)
```

For example:

```text
[Game][Debug] Engine (make)
[Game][Release] Engine (make)
[Game][Debug] Engine (ninja)
[Game][Release] Engine (ninja)
[Game][Debug] Engine (msbuild)
[Game][Release] Engine (msbuild)
```

The task source is `Premake5`, so tasks appear in VS Code under that provider.

### Running tasks from VS Code

Automatically generated tasks can be executed directly through VS Code's task interface:

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Select **Tasks: Run Task**.
3. Find the **Premake5** task provider.
4. Select the desired build task.

Alternatively, use **Terminal → Run Task...** to open the task picker.

Since generated tasks belong to VS Code's **Build** task group, they can also be accessed through **Terminal → Run Build Task...** or `Ctrl+Shift+B`.

### How it works

- Installed build tools are automatically detected.
- Premake workspaces, projects and configurations are discovered.
- A build task is generated for every project, configuration and available build tool.
- Each task invokes its corresponding build tool with the appropriate project and configuration arguments.
- Tasks are automatically assigned to VS Code's Build task group.

### Integration with debugging

Generated build tasks can be linked to debug configurations using VS Code's `preLaunchTask` property. This allows Premake Manager to build the selected project automatically before starting a debugging session.