import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path'; // 引入 resolve 方法
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig(({ mode }) => {
  return {
    base: '/MERN-petslove/',
    // base: 'https://tzuhuangyen.github.io/MERN-petslove/',
    plugins: [react(), nodePolyfills()],
    // root: resolve(__dirname, './client'),

    // resolve: {
    //   alias: {
    //     '/images': path.resolve(__dirname, 'public/images'),
    //   },
    // },
    build: {
      outDir: 'dist',
      emptyOutDir: false, // 设置为 false，防止构建时清空输出目录
      assetsDir: '.', // 将资源文件输出到名为 assets 的子目录中
      rollupOptions: {
        input: {
          // 相对于项目根目录的路径
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          entryFileNames: ({ name }) => `assets/${name}.js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
      // 指定 HTML 模板文件的路径
      template: path.resolve(__dirname, 'client/index.html'),
    },
  };
});
// ViteReactPlugin()
