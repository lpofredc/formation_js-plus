var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    contentBase: resolveAppPath("public"),
    compress: true,
    historyApiFallback: true,
    port: 9000,
  },
};
