module.exports = {
  entry: './source/index.js',
  output: {
    path: './destination',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.json']
  }
};
