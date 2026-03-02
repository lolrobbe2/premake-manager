// Import elements to register them in the Custom Elements Registry
import '@vscode-elements/elements/dist/vscode-button';
import '@vscode-elements/elements/dist/vscode-icon';
import '@vscode-elements/elements/dist/vscode-textfield';
import "@vscode/codicons/dist/codicon.css";
import './Header.css';
const Header = () => {
    return (
        <header className="header-container">
            <div className="header-center">
                <vscode-textfield placeholder="Search libraries...">
                    <vscode-icon name="search" slot="content-before"></vscode-icon>
                </vscode-textfield>
            </div>

            <div className="header-bottom">
                <vscode-button>
                    <vscode-icon name="add" slot="content-before"></vscode-icon>
                    Add Library
                </vscode-button>
            </div>
        </header>
    );
};

export default Header;