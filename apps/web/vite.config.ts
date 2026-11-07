import { reactRouter } from '@react-router/dev/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

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
    dedupe: ['react', 'react-dom', 'react-router'],
  },
  ssr: {
    noExternal: ['radix-ui'],
  },
  optimizeDeps: {
    include: ['radix-ui', 'react', 'react-dom'],
  },
});
