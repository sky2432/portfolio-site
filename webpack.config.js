const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    // jQueryをwebpackで読み込む
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};