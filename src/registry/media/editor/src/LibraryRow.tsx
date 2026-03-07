import '@vscode-elements/elements/dist/vscode-button';
import '@vscode-elements/elements/dist/vscode-table-cell';
import '@vscode-elements/elements/dist/vscode-table-row';
import { IndexReader } from './IndexReader';
import { type IndexLibrary } from "./IndexTypes";
import "./LibraryRow.css";
interface LibraryRowProps {
    owner: string;
    lib: IndexLibrary;
}

export function LibraryRow({ owner, lib }: LibraryRowProps) {
    const handleRemove = async () => {
        await IndexReader.RemoveLibrary(`${owner}/${lib.name}`);
    };

    const handleNameClick = (e: React.MouseEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            IndexReader.EditLibrary(`${owner}/${lib.name}`);
        }
    };
    return (
        <vscode-table-row>
            <vscode-table-cell
                onClick={handleNameClick}
                style={{ cursor: 'pointer', userSelect: 'none' }}
                title="Ctrl + Click to edit"
            >
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