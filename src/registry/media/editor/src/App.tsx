import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from "./Header";
import { IndexReader } from "./IndexReader";
import { IndexViewer } from "./IndexViewer";

// Import elements for registration
import "@vscode-elements/elements/dist/vscode-badge";
import "@vscode-elements/elements/dist/vscode-button";
import "@vscode-elements/elements/dist/vscode-divider";
import "@vscode-elements/elements/dist/vscode-progress-ring";
import { AddLibraryModal } from './modal/AddLibrary';

function App() {
  const [filterText, setFilterText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshTick, setRefreshTick] = useState(0);

  const refresh = () => setRefreshTick(prev => prev + 1);
  IndexReader.Initialize();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F4') {
        e.preventDefault(); // Stop the webview from blanking out
        refresh();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const indexPromise = useMemo(() => IndexReader.GetIndex(), [refreshTick]);

  const handleAddLibrary = (githubLink: string) => {
    IndexReader.AddLibrary(githubLink);
    refresh();
    // Your logic to handle the new library
  };
  return (
    <div className="main-wrapper">
      {/* Pass the setter function to the Header */}
      <Header onFilterChange={setFilterText} onAddClick={() => setIsModalOpen(true)} />

      {/* Pass the current filter string to the Viewer */}
      <IndexViewer
        indexPromise={indexPromise}
        filter={filterText}
      />

      <AddLibraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddLibrary}
      />
    </div>
  );
}

export default App;