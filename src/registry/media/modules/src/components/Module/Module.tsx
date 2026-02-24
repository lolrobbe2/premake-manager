import '@vscode-elements/elements/dist/vscode-button';
import '@vscode-elements/elements/dist/vscode-label';
import '@vscode-elements/elements/dist/vscode-textarea';

import { type FC, useEffect, useState } from 'react';
import { ModuleService, type RegistryRepo } from '../../services/ModuleService.js';
import { getVsCodeApi } from '../../vscode.js';
import './Module.css';
interface ModuleProps {
   repo: RegistryRepo;
   isActive: boolean;
   onSelect: () => void;
}

const DEFAULT_ICON = "https://premake.github.io/img/premake-logo.png";

const Module: FC<ModuleProps> = ({ repo, isActive, onSelect }) => {
   const [imgSrc, setImgSrc] = useState(ModuleService.getIconUri(repo) || DEFAULT_ICON);
   const [description, setDescription] = useState("Loading description...");
   const vscode = getVsCodeApi();

   const handleCardClick = (isActive: boolean) => {
      if(isActive === true)
         return;
      vscode.postMessage({
         command: 'showModuleDetails',
         repo: repo
      });
   };

   // Handle clicking the install button specifically
   const handleInstallClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevents handleCardClick from firing
      vscode.postMessage({
         command: 'installModule',
         repo: repo
      });
   };
   useEffect(() => {
      const controller = new AbortController();

      const load = async () => {
         const res = await fetch(repo.apiUrl, { signal: controller.signal }).catch(() => null);

         if (!res?.ok) {
            if (!controller.signal.aborted) setDescription("Could not load description.");
            return;
         }

         const data = await res.json().catch(() => ({}));
         setDescription(data.description || "No description available.");
      };

      load();
      return () => controller.abort();
   }, [repo.apiUrl]);

   return (
      <div
         className={`module-container ${isActive ? 'selected' : ''}`}
         onClick={() => {
            onSelect();
            handleCardClick(isActive);   // Send message to extension
         }}
      >
         <div className="icon-container">
            <img
               src={imgSrc}
               className="main-icon"
               alt={repo.repoName || 'module icon'}
               onError={() => imgSrc !== DEFAULT_ICON && setImgSrc(DEFAULT_ICON)}
            />
         </div>
         <div className="module-info">
            <vscode-label>{repo.repoName || "module"}</vscode-label>
            <vscode-label className="module-description">
               <span className="normal">{description}</span>
            </vscode-label>
         </div>
         <div className='install-button'>
            <vscode-button icon="cloud-download" title="Settings" onClick={handleInstallClick}>

            </vscode-button>
         </div>
      </div>
   );
};

export default Module;