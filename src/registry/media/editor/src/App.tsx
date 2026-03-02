import "@vscode-elements/elements/dist/vscode-badge";
import "@vscode-elements/elements/dist/vscode-button";
import "@vscode-elements/elements/dist/vscode-divider";
import "@vscode-elements/elements/dist/vscode-progress-ring";

import { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import { IndexReader } from "./IndexReader";

  function App() {
    
    useEffect(() => {
      const init = async () => {
        IndexReader.Initialize();
        const res = await IndexReader.GetIndex();
        const test = 1;
      };

      init();
    }, []);

    // Helper to render a centered loader for a section
  
    return (
      <div className="main-wrapper">
        <Header></Header>
      </div>
    );
  }

  export default App;