const { ModuleFederationPlugin } = require('webpack').container // eslint-disable-line @typescript-eslint/no-var-requires
const { WebpackManifestPlugin } = require('webpack-manifest-plugin') // eslint-disable-line @typescript-eslint/no-var-requires
const CircularDependencyPlugin = require('circular-dependency-plugin') // eslint-disable-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies // eslint-disable-line @typescript-eslint/no-var-requires

const moduleFederationName = 'auth'
const moduleFederationPath = process.env.NODE_ENV === 'production' ? 'http://localhost:8080/auth/' : 'http://localhost:3002/'
module.exports = {
  lintOnSave: true,
  publicPath: moduleFederationPath,
  devServer: {
    port: 3002,
    historyApiFallback: true
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].excludeChunks = [
          moduleFederationName // don't include remoteEntry.js to index.html
        ]
        return args
      })
  },
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    },
    plugins: [
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true
      }),
      new WebpackManifestPlugin(),
      new ModuleFederationPlugin({
        name: moduleFederationName,
        library: {
          type: 'var',
          name: moduleFederationName
        },
        filename: process.env.NODE_ENV === 'production' ? 'remoteEntry.[contenthash:8].js' : 'remoteEntry.js',
        exposes: {
          './Manifest': '@/manifest.ts'
        },
        shared: {
          ...deps,
          vue: {
            requiredVersion: deps.vue,
            singleton: true
          }
        }
      })
    ]
  }
}
