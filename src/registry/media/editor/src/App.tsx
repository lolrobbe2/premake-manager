import { useEffect, useState } from 'react';
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
  useEffect(() => {
    IndexReader.Initialize();
  }, []);
  const handleAddLibrary = (githubLink: string) => {
    console.log("Processing link:", githubLink);
    // Your logic to handle the new library
  };
  return (
    <div className="main-wrapper">
      {/* Pass the setter function to the Header */}
      <Header onFilterChange={setFilterText} onAddClick={() => setIsModalOpen(true)} />

      {/* Pass the current filter string to the Viewer */}
      <IndexViewer
        indexPromise={IndexReader.GetIndex()}
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