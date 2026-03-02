import "@vscode-elements/elements/dist/vscode-badge";
import "@vscode-elements/elements/dist/vscode-button";
import "@vscode-elements/elements/dist/vscode-divider";
import "@vscode-elements/elements/dist/vscode-progress-ring";

import { useEffect, useState } from 'react';
import './App.css';

  const vscode = (window as any).acquireVsCodeApi ? (window as any).acquireVsCodeApi() : null;
  function App() {

    useEffect(() => {
      window.addEventListener('message', event => {
        const message = event.data;
     
      });
      vscode?.postMessage({ command: 'ready' });
    }, []);

    // Helper to render a centered loader for a section
  
    return (
      <div className="main-wrapper">
      
      </div>
    );
  }

  export default App;