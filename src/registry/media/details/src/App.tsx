import "@vscode-elements/elements/dist/vscode-badge";
import "@vscode-elements/elements/dist/vscode-button";
import "@vscode-elements/elements/dist/vscode-divider";
import "@vscode-elements/elements/dist/vscode-progress-ring";

import { useEffect, useState } from 'react';
import './App.css';

  const vscode = (window as any).acquireVsCodeApi ? (window as any).acquireVsCodeApi() : null;
  function App() {
    const [header, setHeader] = useState<any>(null);
    const [content, setContent] = useState<string | null>(null);
    const [sidebar, setSidebar] = useState<any>(null);

    useEffect(() => {
      window.addEventListener('message', event => {
        const message = event.data;
        switch (message.command) {
          case 'setHeader': setHeader(message.data); break;
          case 'setContent': setContent(message.data); break;
          case 'setSidebar': setSidebar(message.data); break;
        }
      });
      vscode?.postMessage({ command: 'ready' });
    }, []);

    // Helper to render a centered loader for a section
    const SectionLoader = () => (
      <div className="section-loader">
        <vscode-progress-ring></vscode-progress-ring>
      </div>
    );

    return (
      <div className="main-wrapper">
        {/* HEADER REGION */}
        <header className="header">
          {!header ? <SectionLoader /> : (
            <>
              <div className="icon-container">
                <img src={header.icon} className="main-icon" alt="" />
              </div>
              <div className="header-info">
                <h1>{header.name}</h1>
                <a href={header.repoUrl} className="vscode-link">{header.user}</a>
                <div className="badge-container">
                  <vscode-badge>{header.isLib ? "Library" : "Module"}</vscode-badge>
                </div>
                <vscode-button onClick={() => vscode?.postMessage({ command: 'install' })}>
                  Install
                </vscode-button>
              </div>
            </>
          )}
        </header>

        <div className="main-container">
          {/* MAIN CONTENT REGION */}
          <main className="readme-content">
            {!content ? <SectionLoader /> : (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
          </main>

          {/* SIDEBAR REGION */}
          <aside className="side-panel">
            {/* Divider is always visible */}
            <vscode-divider></vscode-divider>

            <div className="side-section">
              <h3>Resources</h3>
              {!sidebar ? <SectionLoader /> : (
                <a href={sidebar.url} className="repo-link">Repository</a>
              )}
            </div>

            {/* Divider is always visible */}
            <vscode-divider></vscode-divider>

            <div className="side-section">
              <h3>Tags</h3>
              {!sidebar ? <SectionLoader /> : (
                <div className="tag-container">
                  {sidebar.tags.map((t: string) => (
                    <vscode-badge key={t} variant="counter">{t}</vscode-badge>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    );
  }

  export default App;