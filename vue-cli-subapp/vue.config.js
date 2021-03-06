const { name: packageName } = require("./package.json");

const port = 7101; // dev port

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,

  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  }
};
