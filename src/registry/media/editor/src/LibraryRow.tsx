import '@vscode-elements/elements/dist/vscode-button';
import '@vscode-elements/elements/dist/vscode-table-cell';
import '@vscode-elements/elements/dist/vscode-table-row';
import { IndexReader } from './IndexReader';
import { type IndexLibrary } from "./IndexTypes";
import "./LibraryRow.css";
interface LibraryRowProps {
    lib: IndexLibrary;
}

export function LibraryRow({ lib }: LibraryRowProps) {
    const handleRemove = async () => {
        await IndexReader.RemoveLibrary(lib.name);
    };
    return (
        <vscode-table-row>
            <vscode-table-cell>
                {lib.name}
            </vscode-table-cell>

            <vscode-table-cell>
                {lib.description}
            </vscode-table-cell>

            <vscode-table-cell grid-column="4" className='remove-button'>
                <vscode-button aria-label="Remove" onClick={handleRemove}>
                    <span className="codicon codicon-trash"></span>
                </vscode-button>
            </vscode-table-cell>
        </vscode-table-row>
    );
}