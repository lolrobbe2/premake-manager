import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IndexDebugReader } from './IndexDebugReader.ts'
if (import.meta.env.DEV) {
  IndexDebugReader.Initialize();
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Detect if we are in development mode
if (import.meta.env.DEV) {
  document.body.classList.add('is-debug');

}
