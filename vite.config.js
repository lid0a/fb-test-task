import { defineConfig } from 'vite';
import path from 'node:path';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [viteSingleFile()],
});
