import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/gsap')) return 'motion';
          if (id.includes('node_modules/react') || id.includes('node_modules/react-router-dom')) return 'react-vendor';
          return undefined;
        },
      },
    },
  },
});
