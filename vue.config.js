module.exports = {
  productionSourceMap: false,
  // 是否在开发环境下每次保存代码时都启用 eslint验证。不校验语法
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3344'
        target: 'http://shop.datong0.com'
      }
    }
  }
};
