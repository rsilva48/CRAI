// vite.config.js
//Default HTTP setting for use with a web server as a proxy like Apache

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  },
  plugins: [vue(), eslint(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    }
  })],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  }
})

