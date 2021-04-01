const defaultSettings = require('./src/settings.js')

const name = defaultSettings.title || '报名网站' // page title

const port = 5200 // dev port

const url = {
  target: 'https://121.36.28.24' //
}

module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/': {
        target: url.target, // 程航
        secure: false,
        changeOrigin: true // 是否跨域
        // pathRewrite: {
        //   '^/apis': ''   //需要rewrite的,
        // }
      },
      '/apis': {
        target: url.target, // 程航
        changeOrigin: true, // 是否跨域
        secure: false // 跨https
        // pathRewrite: {
        //   '^/apis': ''   //需要rewrite的,
        // }
      }
    }
    // before: require('./mock/mock-server.js')
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/mixin.scss";`
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = name
        return args
      })
  }
}
