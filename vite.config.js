import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'src/index.html'),
      nested: resolve(__dirname, 'src/restaurant.html'),
    },
  },
  build: {
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
