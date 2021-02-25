const { ModuleFederationPlugin } = require("webpack").container
const deps = require("./package.json").dependencies
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://app.trueprofit.io/' : 'http://localhost:3001/',
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "shell",
        filename: "remoteEntry.js",
        remotes: {
          auth: "auth@http://localhost:3002/remoteEntry.js"
        },
        shared: {
          ...deps
        }
      })
    ]
  }
}
