const path = require('path')
import vue from "@vitejs/plugin-vue";

export default {
  // config options
  base: './', // 默认 '/' 配置成 './' 使得
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [vue()],
}