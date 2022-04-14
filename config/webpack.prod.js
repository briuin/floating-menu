const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  entry: {
    main: "./src/index.js"
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    chunkFilename: 'lib_[name].js',
    publicPath: '',
  },
  optimization: {
    chunkIds: 'named',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'floatingMenu',
      filename: 'remoteEntry.js',
      library: { type: "system" },
      exposes: {
        './FloatingMenu': './src/components/FloatingMenu',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
