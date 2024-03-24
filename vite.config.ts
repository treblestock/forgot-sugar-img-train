//@ts-ignore
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



declare const __dirname: string

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~css': path.resolve(__dirname, 'src', 'assets', 'css'),
      '~img': path.resolve(__dirname, 'src', 'assets', 'img'),
      '~icons': path.resolve(__dirname, 'src', 'assets', 'img', 'icons'),
    },
  },
  plugins: [vue()],
})
