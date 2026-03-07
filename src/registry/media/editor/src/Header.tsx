import '@vscode-elements/elements/dist/vscode-button';
import '@vscode-elements/elements/dist/vscode-icon';
import '@vscode-elements/elements/dist/vscode-textfield';
import "@vscode/codicons/dist/codicon.css";
import './Header.css';

interface HeaderProps {
    onFilterChange: (text: string) => void;
    onAddClick: () => void; // Prop to trigger the modal
}

const Header = ({ onFilterChange, onAddClick }: HeaderProps) => {
    // We use a ref to clean up listeners if needed, 
    // though React's synthetic onInput usually works for vscode-elements
    const handleInput = (e: any) => {
        // vscode-elements textfield stores value in e.target.value
        onFilterChange(e.target.value);
    };

    return (
        <header className="header-container">
            <div className="header-center">
                <vscode-textfield
                    placeholder="Search libraries..."
                    onInput={handleInput}
                >
                    <vscode-icon name="search" slot="content-before"></vscode-icon>
                </vscode-textfield>
            </div>

            <div className="header-bottom">
                <vscode-button onClick={onAddClick}>
                    <vscode-icon name="add" slot="content-before"></vscode-icon>
                    Add Library
                </vscode-button>
            </div>
        </header>
    );
};

export default Header;