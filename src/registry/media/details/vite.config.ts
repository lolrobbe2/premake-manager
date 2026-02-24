import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Target the specific resources folder
    // This goes up from 'src/registry/media/details' to the project root, 
    // then down into 'resources/media/details'
    outDir: path.resolve(__dirname, '../../../../resources/media/details'),

    // 2. Keep existing assets safe
    emptyOutDir: false,

    // 3. Library mode for a clean single-file output
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      formats: ['es'],
      fileName: 'details-bundle', // Name of the final file
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  }
});