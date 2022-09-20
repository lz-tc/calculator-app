const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calculator-app.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'babel-loader' },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  devServer: {
    client: {
      overlay: { warnings: false },
    },
  },
};





