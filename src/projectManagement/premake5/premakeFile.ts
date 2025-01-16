import { premakeWorkspace } from './workspace';

export interface PremakeFile {
    filePath: string;
    workspaces: premakeWorkspace[];
    dependencies: string[];
}

export class PremakeFile implements PremakeFile {
    constructor(
        public filePath: string,
        public workspaces: premakeWorkspace[],
        public dependencies: string[]
    ) {}
}
