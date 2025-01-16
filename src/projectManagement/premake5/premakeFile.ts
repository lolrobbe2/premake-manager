import { PropertyValue } from './project';
import { premakeWorkspace } from './workspace';

export class option {
    trigger: string;
    description: string;

    constructor(trigger: string, description: string) {
        this.trigger = trigger;
        this.description = description;
    }
}

export interface PremakeFile {
    filePath: string;
    workspaces: premakeWorkspace[];
    dependencies: string[];
    rootProperties: { key: string, value: PropertyValue }[];
}

export class PremakeFile implements PremakeFile {
    constructor(
        public filePath: string,
        public workspaces: premakeWorkspace[],
        public dependencies: string[],
        public rootProperties: { key: string, value: PropertyValue }[] = []
    ) {}

    get options(): option[] {
        return this.rootProperties
            .filter(property => property.key === 'newoption')
            .map(property => {
                if (Array.isArray(property.value) && typeof property.value[0] === 'object') {
                    const trigger = property.value.find(v => v.key === 'trigger')?.value || '';
                    const description = property.value.find(v => v.key === 'description')?.value || '';
                    return new option(trigger, description);
                }
                return null;
            })
            .filter(option => option !== null) as option[];
    }
}
