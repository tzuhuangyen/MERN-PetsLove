import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

import { nodePolyfills } from 'vite-plugin-node-polyfills';
// 加載 .env 文件中的環境變數
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig(({ mode }) => {
  return {
    base: '/MERN-PetsLove',
    // base: 'https://tzuhuangyen.github.io/MERN-petslove/',
    plugins: [react(), nodePolyfills()],
    build: {
      outDir: 'dist',
      emptyOutDir: false, // 设置为 false，防止构建时清空输出目录
      assetsDir: '.', // 将资源文件输出到名为 assets 的子目录中
      rollupOptions: {
        input: {
          client: 'index.html', // Entry point for client-side code
        },
        output: {
          entryFileNames: ({ name }) => `assets/${name}.js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },

      // 指定 HTML 模板文件的路径
      // template: path.resolve(__dirname, 'client/index.html'),
    },
  };
});
// ViteReactPlugin()
