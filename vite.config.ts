import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from "weapp-tailwindcss/vite";
import { WeappTailwindcssDisabled, resolve } from "./shared"
import { plugins as postcssPlugins } from './postcss.config.cjs'
// vite 插件配置
const vitePlugins = [uni(), uvwt({
  rem2rpx: true,
  disabled: WeappTailwindcssDisabled
})];

// https://vitejs.dev/config/
export default defineConfig({
  // 路径配置
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src'), //配置@ 路径
      },
      {
        find: 'lib',
        replacement: resolve('lib'), //配置@ 路径
      },
    ],
  },
  plugins: vitePlugins,
  // 假如 postcss.config.js 不起作用，请使用内联 postcss Latset
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
});
