const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    mobile: './src/mobile.jsx',
    desktop: './src/desktop.jsx',
  },
  output: {
    clean: true,
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:3]',
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        desktopStyles: {
          type: 'css/mini-extract',
          name: 'desktop',
          chunks: chunk => chunk.name === 'desktop',
          enforce: true,
        },
        mobileStyles: {
          type: 'css/mini-extract',
          name: 'mobile',
          chunks: chunk => chunk.name === 'mobile',
          enforce: true,
        },
      },
    },
  },
};
