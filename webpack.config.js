const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {config} = require('dotenv')

config()

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'frontend'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
              [
                '@babel/plugin-transform-react-jsx',
                {
                  runtime: 'automatic',
                },
              ],
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: {
    errorDetails: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'frontend'),
    },
    compress: true,
    port: process.env.REACT_PORT || 3000,
    historyApiFallback: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
