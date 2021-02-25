const { ModuleFederationPlugin } = require('webpack').container // eslint-disable-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://app.trueprofit.io/' : 'http://localhost:3002/',
  devServer: {
    port: 3002,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        exposes: {
          './Installer': './src/installer.ts'
        },
        shared: {
          ...deps
        }
      })
    ]
  }
}
