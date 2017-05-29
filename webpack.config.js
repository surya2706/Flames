const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

const plugins = [];

if (!debug) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true, sourcemap: false, comments: false,
    }),
     // create a *.gz compressed file
     new CompressionPlugin()
  );
}

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-cheap-source-map' : false,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'static/build/'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'react', 'stage-2'],
        },
      },
    ],
  },
  plugins,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules'],
  },
};
