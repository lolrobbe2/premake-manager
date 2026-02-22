import '@vscode-elements/elements/dist/vscode-progress-ring';
import "@vscode/codicons/dist/codicon.css";
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Module from "./components/Module/Module";
import TopBar from "./components/TopBar/TopBar";
import { ModuleService, type RegistryRepo, RepoSearchType } from './services/ModuleService';
import { getVsCodeApi } from './vscode';

function App() {
  const [repos, setRepos] = useState<RegistryRepo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<RepoSearchType>(RepoSearchType.Recent);
  const [loading, setLoading] = useState(false);
  const vscode = getVsCodeApi();

  const loadModules = useCallback(async (query: string, type: RepoSearchType) => {
    setLoading(true);
    try {
      const data = await ModuleService.getModules(type, query, 0);
      setRepos(data);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const performSearch = useCallback((query: string, type: RepoSearchType) => {
    console.log("Searching for:", query, "with filter:", type);
    loadModules(query, type);
  }, [loadModules]);

  const handleSearch = (query: string, immediate = false) => {
    setSearchQuery(query);
    if (immediate) {
      performSearch(query, filterType);
    }
  };

  const handleDeselectClick = (repo: RegistryRepo) => {
    vscode.postMessage({
      command: 'closeModuleDetails',
      repo: repo
    });
  };

  // Unified fetch function
  const [selectedName, setSelectedName] = useState<string | null>(null);

  useEffect(() => {
    // If query is empty, maybe you want it instant, otherwise debounce
    const timer = setTimeout(() => {
      performSearch(searchQuery, filterType);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, filterType, performSearch]);

  return (
    <div className="main-container">
      <TopBar
        searchQuery={searchQuery}
        currentFilter={filterType}
        onFilterChange={setFilterType}
        // Pass the new handler
        onSearch={(q) => handleSearch(q, false)}
        onEnter={() => performSearch(searchQuery, filterType)}
      />

      <div className="content">
        {loading ? (
          <vscode-progress-ring></vscode-progress-ring>
        ) : (
          <div className="module-list">
            {repos.map((repo) => (
              <Module
                key={`${repo.userName}/${repo.repoName}`}
                repo={repo}
                onSelect={() => {
                  if (selectedName !== repo.repoName)
                    setSelectedName(repo.repoName);
                  else {
                    setSelectedName(null);
                    handleDeselectClick(repo);
                  }
                }
                }
                isActive={selectedName == repo.repoName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;