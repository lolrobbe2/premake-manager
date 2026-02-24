import '@vscode-elements/elements/dist/vscode-context-menu';
import '@vscode-elements/elements/dist/vscode-icon';
import '@vscode-elements/elements/dist/vscode-textfield';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { RepoSearchType } from '../../services/ModuleService';
import './TopBar.css';

interface TopBarProps {
   onSearch: (query: string) => void;
   onEnter?: () => void;
   onFilterChange: (type: RepoSearchType) => void;
   currentFilter: RepoSearchType;
   searchQuery: string;
}

const TopBar: FC<TopBarProps> = ({ onSearch, onEnter, onFilterChange, currentFilter, searchQuery }) => {
   const [showMenu, setShowMenu] = useState(false);
   const menuRef = useRef<any>(null);
   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         // This forces the parent to notice a "final" search state
         onEnter?.();
      }
   };
   useEffect(() => {
      if (menuRef.current) {
         // Map through your options and inject the 'checked' property
         menuRef.current.data = [
            {
               label: 'Search by Repo',
               value: RepoSearchType.RepoName,
               checked: currentFilter === RepoSearchType.RepoName
            },
            {
               label: 'Search by User',
               value: RepoSearchType.UserName,
               checked: currentFilter === RepoSearchType.UserName
            },
            {
               label: 'Search by Tag',
               value: RepoSearchType.Tag,
               checked: currentFilter === RepoSearchType.Tag
            },
            { separator: true },
            {
               label: 'Recent',
               value: RepoSearchType.Recent,
               checked: currentFilter === RepoSearchType.Recent
            },
         ];

         const handleSelect = (e: any) => {
            onFilterChange(e.detail.value);
            setShowMenu(false);
         };

         menuRef.current.addEventListener('vsc-context-menu-select', handleSelect);
         return () => menuRef.current?.removeEventListener('vsc-context-menu-select', handleSelect);
      }
      // Add currentFilter to dependencies so the menu re-renders when the selection changes
   }, [onFilterChange, currentFilter]);

   return (
      <div className="top-bar-container">
         <vscode-textfield
            value={searchQuery}
            placeholder={`Search ${currentFilter}...`}
            onInput={(e: any) => onSearch(e.target.value)}
            onKeyDown={handleKeyDown}
         >
            <vscode-icon
               slot="content-after"
               name="clear-all"
               title="Clear"
               action-icon
               onClick={() => onSearch("")}
            ></vscode-icon>

            <div className="filter-wrapper" slot="content-after">
               <vscode-icon
                  name="filter"
                  title="Filter Type"
                  action-icon
                  onClick={() => setShowMenu(!showMenu)}
               ></vscode-icon>
               <vscode-context-menu
                  ref={menuRef}
                  show={showMenu}
                  onBlur={() => setShowMenu(false)}
               ></vscode-context-menu>
            </div>
         </vscode-textfield>
      </div>
   );
};

export default TopBar;