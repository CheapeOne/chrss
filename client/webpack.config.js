const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: { displayName: true },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        exclude: /\.global.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // sourceMap: isDevelopment,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.global.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: element => {
                const parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                const lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }

                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element;
              },
            },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  devServer: {
    port: 7000,
    contentBase: path.resolve(__dirname, './assets'),
    contentBasePublicPath: '/assets',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', 'scss'],
    alias: {
      '#': path.resolve(__dirname, './src'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
};
