import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        personne: resolve(__dirname, 'personne/index.html'),
      },
    },
  },
});
