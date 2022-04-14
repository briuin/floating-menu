const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = {
  entry: {
    floatingMenu: "./src/index.js"
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js',
    chunkFilename: 'lib_[name].js',
    publicPath: 'https://briuin.github.io/floating-menu/'
  },
  optimization: {
    chunkIds: 'named',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'floatingMenu',
      filename: 'remoteEntry.js',
      library: { type: "system" },
      exposes: {
        './FloatingMenu': './src/components/FloatingMenu',
      },
      shared: {
        ...packageJson.dependencies,
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
