import { project } from 'projectManagement/premake5/project';
import { VSCodeUtils } from 'utils/utils';
import * as vscode from 'vscode';

export class ProjectItem extends vscode.TreeItem {
    static visibleProperties: string[] = [
        'kind',
        'location',
        'cppdialect',
        'cdialect',
        'csversion',
    ];
    constructor(public readonly project: project) {
        super(project.trimmedName, vscode.TreeItemCollapsibleState.Collapsed);
        this.tooltip = `Project: ${project.name}`;
        this.iconPath = project.iconPath;
    }

getChildren(): vscode.TreeItem[] {
    const propertyItems = this.project.properties.map(property => {
        if (ProjectItem.visibleProperties.includes(property.key.toLocaleLowerCase())) {
            let displayValue = '';

            if (typeof property.value === 'string') {
                displayValue = property.value.replace(/"/g, '');
            } else if (Array.isArray(property.value)) {
                displayValue = property.value.map(val => {
                    if (typeof val === 'string') {
                        return val.replace(/"/g, '');
                    } else {
                        return `${val.key.replace(/"/g, '')}: ${val.value.replace(/"/g, '')}`;
                    }
                }).join(', ');
            } else {
                displayValue = `${property.value.key.replace(/"/g, '')}: ${property.value.value.replace(/"/g, '')}`;
            }

            const item = new vscode.TreeItem(`${property.key.replace(/"/g, '')}: ${displayValue}`, vscode.TreeItemCollapsibleState.None);
            item.tooltip = `${property.key.replace(/"/g, '')}: ${displayValue}`;
            item.iconPath = this.getIconPath(property.key.replace(/"/g, ''), displayValue);
            return item;
        }
        return null;
    }).filter(item => item !== null) as vscode.TreeItem[];

    return propertyItems;
}


    getIconPath(key:string,value:string): vscode.IconPath {
        const basePath = "resources/media/project=kind/";
        switch (key.toLowerCase()) {
            case 'kind':
            {
                switch (value.toLowerCase()) {
                    case 'staticlib':
                        return new vscode.ThemeIcon('library');
                    case 'sharedlib':
                        return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "dll-file.png"));
                    case 'consoleapp':
                        return new vscode.ThemeIcon('console');
                    case 'utility':
                        return new vscode.ThemeIcon('settings-gear');
                    default:
                        break;
                }
            }
            break;
            case 'csversion':
            case 'cdialect':
            case 'cppdialect':
                return new vscode.ThemeIcon('versions');
            case 'location':
                return new vscode.ThemeIcon('folder');
            default:
                return new vscode.ThemeIcon('star');
        }
        return new vscode.ThemeIcon('star');
    }
}
