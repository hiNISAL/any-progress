const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const _ = path => resolve(__dirname, path);

const LIBRARY_NAME = 'AnyProgress';
const EXPORT_FILE_NAME = 'any-progress.js'

const cssLoaders = [
  'style-loader',
  'css-loader',
];

module.exports = {
  entry: {
    progress: _('../src/index.ts'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  output: {
    path: _('../dist'),
    filename: EXPORT_FILE_NAME,
    libraryTarget: 'umd',
    library: LIBRARY_NAME,
    libraryExport: "default",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jepg|gif)/,
        loader: 'url-loader',
        options: {
          name: 'assets/imgs/[name].[ext]',
          limit: 1024
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          ...cssLoaders,
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(
      {
        root: _('../dist'),
        verbose: true,
        dry: false,
      }
    )
  ]
};
