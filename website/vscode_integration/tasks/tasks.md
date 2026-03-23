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