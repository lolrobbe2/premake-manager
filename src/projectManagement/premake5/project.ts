import { VSCodeUtils } from 'utils/utils';
import * as vscode from 'vscode';

// Define individual interfaces
export interface SimpleProperty {
    key: string;
    value: string;
}

export interface ArrayProperty {
    key: string;
    value: SimpleProperty[];
}

export interface StringArrayProperty {
    key: string;
    value: string[];
}
// Use any type for PropertyValue
export type PropertyValue = any;

// Updated project class
export class project {
    name: string;
    group: string = ""; //default group is "" / no group
    properties: { key: string, value: PropertyValue }[];

    constructor(name: string, properties: { key: string, value: PropertyValue }[] = [],group: string) {
        this.name = name; 
        this.properties = properties; 
        this.group = group;
    }

    get trimmedName(): string { 
        return this.name.replace(/"/g, ''); 
    }

    get language(): string {
        const languageProperty = this.properties.find(prop => prop.key === 'language');
        return typeof languageProperty?.value === 'string' ? languageProperty.value.replace(/"/g, '') : "unknown";
    }

    get iconPath(): vscode.Uri | undefined {
        const basePath = "resources/media/language/";
        switch (this.language.toLowerCase()) {
            case "c":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c.svg"));
            case "c++":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c-plus-plus.svg"));
            case "c#":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c-sharp.svg"));
            default:
                return undefined;
        }
    }

    get kind(): string | undefined {
        const kindProperty = this.properties.find(prop => prop.key === 'kind');
        return typeof kindProperty?.value === 'string' ? kindProperty.value.replace(/"/g, '') : undefined;
    }

    get location(): string | undefined {
        const locationProperty = this.properties.find(prop => prop.key === 'location');
        return typeof locationProperty?.value === 'string' ? locationProperty.value.replace(/"/g, '') : undefined;
    }

    get dialect(): string | undefined {
        const language = this.language.toLowerCase();
        let dialectProperty;

        if (language === 'c') {
            dialectProperty = this.properties.find(prop => prop.key === 'cdialect');
        } else if (language === 'c++') {
            dialectProperty = this.properties.find(prop => prop.key === 'cppdialect');
        } else if (language === 'c#') {
            dialectProperty = this.properties.find(prop => prop.key === 'csversion');
        }

        return typeof dialectProperty?.value === 'string' ? dialectProperty.value.replace(/"/g, '') : undefined;
    }
}
