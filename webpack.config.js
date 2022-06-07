const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');


const pages = [
  new HtmlWebpackPlugin({
    chunks: ['main'],
    filename: 'index.html',
    template: path.resolve(__dirname, 'src', 'mainPage', 'index.html')
  }),
  new HtmlWebpackPlugin({
    chunks: ['add'],
    filename: 'add.html',
    template: path.resolve(__dirname, 'src', 'addPage', 'index.html')
  }),
  new HtmlWebpackPlugin({
    chunks: ['notpermitted'],
    filename: 'notpermitted.html',
    template: path.resolve(__dirname, 'src', 'notpermittedPage', 'index.html')
  }),
  new HtmlWebpackPlugin({
    chunks: ['answer'],
    filename: 'answer.html',
    template: path.resolve(__dirname, 'src', 'answerPage', 'index.html')
  }),
]

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'mainPage','index.js'),
    add: path.resolve(__dirname, 'src', 'addPage','index.js'),
    notpermitted: path.resolve(__dirname, 'src', 'notpermittedPage','index.js'),
    answer: path.resolve(__dirname, 'src', 'answerPage','index.js'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'js/[name].bundle.[contenthash].js',
    chunkFilename: 'js/[id].bundle_[chunkhash].js',
    sourceMapFilename: '[file].map'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    ...pages,
    new MiniCssExtractPlugin({
      filename: 'style/bundle.[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'manifest.json'),
          to: path.resolve(__dirname, 'public')
        },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: false,
  }
}