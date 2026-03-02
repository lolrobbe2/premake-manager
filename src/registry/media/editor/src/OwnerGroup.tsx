import '@vscode-elements/elements/dist/vscode-collapsible';
import '@vscode-elements/elements/dist/vscode-table';
import '@vscode-elements/elements/dist/vscode-table-body';
import '@vscode-elements/elements/dist/vscode-table-header';
import '@vscode-elements/elements/dist/vscode-table-header-cell';

import type { IndexLibrary } from "./IndexTypes";
import { LibraryRow } from "./LibraryRow";
import './OwnerGroup.css';
interface OwnerLibsProps {
    ownerName: string;
    libs: IndexLibrary[];
    isFiltering: boolean;
}

export function OwnerLibs({ ownerName, libs, isFiltering }: OwnerLibsProps) {
    const columnWidths = ["10%", "85%", "5%"];
    return (
        <vscode-collapsible title={ownerName} description={`${libs.length} items`} className="collapsible" open={isFiltering ? true : undefined}>
            <vscode-icon name="add" codicon-add slot="actions" id="codicon-add"></vscode-icon>
            <div>
                <vscode-table zebra bordered-rows bordered-columns columns={columnWidths}>
                    <vscode-table-header slot="header">
                        <vscode-table-header-cell>Library</vscode-table-header-cell>
                        <vscode-table-header-cell>Description</vscode-table-header-cell>
                        <vscode-table-header-cell></vscode-table-header-cell>
                    </vscode-table-header>
                    <vscode-table-body slot="body">

                        {libs.map((lib) => (
                            <LibraryRow key={lib.name} lib={lib}></LibraryRow>
                        ))}
                    </vscode-table-body>

                </vscode-table>
            </div>
        </vscode-collapsible >
    );
}