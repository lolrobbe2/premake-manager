import { VSCodeUtils } from 'utils/utils';
import * as vscode from 'vscode';
export class project {
    name: string; 
    properties: { key: string, value: string }[];

    constructor(name: string, properties: { key: string, value: string }[] = []){
        this.name = name; 
        this.properties = properties; 
    }

    get trimmedName(): string { 
        return this.name.replace(/"/g, ''); 
    }

    get language(): string {
        const languageProperty = this.properties.find(prop => prop.key === 'language');
        return languageProperty ? languageProperty.value.replace(/"/g, '') : "unkown";
    }

    get iconPath() : vscode.Uri |undefined {
        const basePath = "resources/media/language/";
        switch (this.language) {
            case "C":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c.svg"));
            case "C++":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c-plus-plus.svg"));
            case "C#":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c-sharp.svg"));
            case "c":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c.svg"));
            case "c++":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c-plus-plus.svg"));
            case "c#":
                return vscode.Uri.file(VSCodeUtils.context!.asAbsolutePath(basePath + "c-sharp.svg"));
        }
    }
    get kind(): string | undefined { 
        const kindProperty = this.properties.find(prop => prop.key === 'kind');
        return kindProperty ? kindProperty.value.replace(/"/g, '') : undefined; 
    }
    get location(): string | undefined {
        const locationProperty = this.properties.find(prop => prop.key === 'location');
        return locationProperty ? locationProperty.value.replace(/"/g, '') : undefined; 
    }

    get dialect(): string | undefined {
        const language = this.language;
        if (language === 'c') {
            const dialectProperty = this.properties.find(prop => prop.key === 'cdialect');
            return dialectProperty ? dialectProperty.value.replace(/"/g, '') : undefined;
        }
        else if (language === 'c++') {
            const dialectProperty = this.properties.find(prop => prop.key === 'cppdialect');
            return dialectProperty ? dialectProperty.value.replace(/"/g, '') : undefined;
        }
        else if (language === 'c#') {
            const dialectProperty = this.properties.find(prop => prop.key === 'csversion');
            return dialectProperty ? dialectProperty.value.replace(/"/g, '') : undefined;
        }
        return undefined;
    }
}
