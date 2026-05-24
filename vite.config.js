// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Enforces absolute paths so assets load properly on Vercel builds
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppresses the noisy "use client" warning from third-party libraries
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
});