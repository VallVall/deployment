const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Deployment learning',
    }),
  ],
};
