import basicSsl from '@vitejs/plugin-basic-ssl'; // Ensure this is installed
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    https: true,
    proxy: {
      // Adjust the key (e.g., '/api') to match your backend route
      '/api': {
        target: 'https://premake-registry-ywxg.onrender.com', // Your API server address
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // 1. Target the specific resources folder
    // This goes up from 'src/registry/media/details' to the project root, 
    // then down into 'resources/media/details'
    outDir: path.resolve(__dirname, '../../../../resources/media/editor'),

    // 2. Keep existing assets safe
    emptyOutDir: false,

    // 3. Library mode for a clean single-file output
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      formats: ['es'],
      fileName: 'editor-bundle', // Name of the final file
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  }
});