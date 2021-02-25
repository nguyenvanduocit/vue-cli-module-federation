const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        filename: "remoteEntry.js",
        name: "auth",
        library: { type: "var", name: "auth" },
        exposes: {
          './ButtonLogin': "./src/components/ButtonLogin.vue",
        }
      })
    ]
  }
}
