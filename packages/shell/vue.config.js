const { ModuleFederationPlugin } = require('webpack').container // eslint-disable-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/' : 'http://localhost:3001/',
  devServer: {
    port: 3001,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        shared: {
          ...deps
        }
      })
    ]
  }
}
