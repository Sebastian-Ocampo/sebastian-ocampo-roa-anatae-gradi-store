const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const JS_DIR = path.resolve(__dirname, './src');

const entry = {
  theme: './src/templates/index.js'
}

const output = {
  filename: '[name].js',
  path: path.resolve(__dirname, 'assets')
};

const rules = [
  {
    test: /\.js$/,
    include: [JS_DIR],
    exclude: /node_modules/,
    use: 'babel-loader'
  }
];

module.exports = {

  entry: entry,

  output: output,

  module: {
    rules: rules,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ]
  },

}