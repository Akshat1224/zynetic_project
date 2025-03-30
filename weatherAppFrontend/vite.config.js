import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure assets are served correctly
  server: {
    host: true,  // Allows external access in local development
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true, // Generate a manifest for debugging
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  css: {
    postcss: true, // Ensure PostCSS is enabled
  },
});
