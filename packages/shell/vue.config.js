const { ModuleFederationPlugin } = require('webpack').container // eslint-disable-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://app.trueprofit.io/' : 'http://localhost:3001/',
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
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
          auth: process.env.NODE_ENV === 'production' ? 'https://app.trueprofit.io/auth/' : 'auth@http://localhost:3002/remoteEntry.js'
        },
        shared: {
          ...deps
        }
      })
    ]
  }
}
