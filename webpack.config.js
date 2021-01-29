var path = require('path');

module.exports = ({ mode }) => {
  return {
    mode,
    watch: true,
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      // contentBase: resolveAppPath("public"),
      compress: true,
      historyApiFallback: true,
      contentBase: './src',
      watchContentBase: true,
      port: 9000,
    },
  };
};
