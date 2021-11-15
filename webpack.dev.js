const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash][ext][query]",
  }
});
