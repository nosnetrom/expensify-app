const path = require('path');

// entry point --> output file
module.exports = {
  entry: './src/app.js', //'./src/playground/redux-expensify.js', //'./src/app.js'
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true // send back index.html for 404s
  }
};

// Loader: transforming certain files in a prescribed way