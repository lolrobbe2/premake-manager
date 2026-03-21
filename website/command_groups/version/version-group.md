# version group

- [version list](#1-list)
- [version install](#2-install)
- [version set](#3-set)

this command group contains all the version commands.

## 1 List

This command lists all the availble premake releases/versions

| OPTION      | DESCRIPTION               |
| ----------- | ------------------------- |
| --releases  | List `available` releases |
| --installed | List `installed` versions |

## 2 install

This command installs a specific premake version.

| OPTION    | DESCRIPTION                                           | required |
| --------- | ----------------------------------------------------- | -------- |
| [VERSION] | version to to set in the config and PATH env variable |    ✖️    |

## 3 set

this command sets the used premake version (IE the `PATH` or `symlink`)

| OPTION    | DESCRIPTION                                           | required |
| --------- | ----------------------------------------------------- | -------- |
| [VERSION] | version to to set in the config and PATH env variable |    ✖️    |
