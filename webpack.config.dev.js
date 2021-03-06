var path = require('path');

module.exports = {
  devtool: 'eval',
  resolve: {
    root: __dirname + '/src'
  },
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};
