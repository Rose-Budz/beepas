import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    reactRouter(),
    vanillaExtractPlugin({
      identifiers: 'debug',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
