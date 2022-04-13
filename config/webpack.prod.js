const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  entry: {
    main: "./src/main-spa.js",
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    publicPath: '/floatingMenu/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'floatingMenu',
      filename: 'remoteEntry.js',
      library: { type: "system" },
      exposes: {
        './FloatingMenu': './src/main-spa.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
