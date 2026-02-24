import basicSsl from '@vitejs/plugin-basic-ssl'; // Ensure this is installed
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    basicSsl(), // Re-activates HTTPS for local dev
  ],
  server: {
    proxy: {
      // Adjust the key (e.g., '/api') to match your backend route
      '/api': {
        target: 'https://premake-registry-ywxg.onrender.com', // Your API server address
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': { NODE_ENV: 'production' }
  },
  build: {
    outDir: path.resolve(__dirname, '../../../../resources/media/modules'),
    emptyOutDir: false,
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      formats: ['es'],
      fileName: 'modules-bundle',
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
      },
    },
    target: 'esnext',
    cssMinify: true,
    sourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  }
});