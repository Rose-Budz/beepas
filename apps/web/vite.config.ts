// @ts-ignore - module resolution warning for plugin, but works at runtime
import { reactRouter } from '@react-router/dev/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// @ts-ignore - import.meta works in Vite context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    reactRouter(),
    vanillaExtractPlugin({
      identifiers: 'debug',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
    },
  },
  ssr: {
    noExternal: ['radix-ui'],
  },
  optimizeDeps: {
    include: ['radix-ui'],
  },
});
