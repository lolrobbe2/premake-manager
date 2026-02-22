import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    // If you still need the process shim for that one library:
    'process.env': { NODE_ENV: 'production' }
  },
  build: {
    outDir: path.resolve(__dirname, '../../../../resources/media/modules'),
    emptyOutDir: false,
    // Use esbuild for minification (default, but explicitly tuned here)
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
        // Removes comments from the output bundle
        comments: false,
      },
    },
    // Esbuild specific minification tweaks
    target: 'esnext', // Smaller code by using modern JS features
    cssMinify: true,
    sourcemap: false,
  },
  // This block tells esbuild to strip consoles and debuggers
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  }
});