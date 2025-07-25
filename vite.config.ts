import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Root-relative paths for custom domain
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clear dist folder before build
    sourcemap: true // Optional: helps with debugging
  },
  server: {
    port: 3000, // Default dev server port
    open: true // Optional: auto-open browser
  },
  optimizeDeps: {
    exclude: ['lucide-react'] // Keep if you need this exclusion
  }
});