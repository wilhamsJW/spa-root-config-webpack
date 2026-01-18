const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // ⚠️ ENTRY TEM QUE SER JS
  mode: "development",

  output: {
    filename: "spamanager-root-config.js",
    publicPath: "http://localhost:9000/",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      inject: false,
      templateParameters: {
        isLocal: process.env.NODE_ENV !== "production",
      },
    }),
  ],

  devServer: {
    port: 9000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
