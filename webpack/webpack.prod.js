const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map', //when code comes bigger easier to debug, can comment this line when push into production
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('production mode'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
