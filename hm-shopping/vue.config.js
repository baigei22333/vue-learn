const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', // 将路径配置成相对路径
  transpileDependencies: true
})
