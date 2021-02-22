const path = require('path')

export default {
  // config options
  base: './', // 默认 '/' 配置成 './' 使得
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
}