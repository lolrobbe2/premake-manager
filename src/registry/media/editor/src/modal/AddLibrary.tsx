import '@vscode-elements/elements/dist/vscode-button';
import '@vscode-elements/elements/dist/vscode-divider';
import '@vscode-elements/elements/dist/vscode-textfield';
import { useState } from 'react';
import './AddLibrary.css';

interface AddLibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (link: string) => void;
}

export function AddLibraryModal({ isOpen, onClose, onAdd }: AddLibraryModalProps) {
    const [repoLink, setRepoLink] = useState("");

    if (!isOpen) return null;

    const handleAdd = () => {
        if (repoLink.trim()) {
            onAdd(repoLink);
            setRepoLink("");
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Add Library</h3>
                </div>

                <vscode-divider></vscode-divider>

                <div className="modal-body">
                    <p>Enter the GitHub repository URL to index a new library.</p>
                    <vscode-textfield
                        placeholder="https://github.com/owner/repo"
                        onInput={(e: any) => setRepoLink(e.target.value)}
                        style={{ width: '100%' }}
                        focused
                    >
                    </vscode-textfield>
                </div>

                <vscode-divider></vscode-divider>

                <div className="modal-footer">
                    <vscode-button onClick={handleAdd}>Add</vscode-button>
                    <vscode-button secondary onClick={onClose}>Cancel</vscode-button>
                </div>
            </div>
        </div>
    );
}