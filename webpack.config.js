const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
             }
           }
         ]
      }
    ]
    
  },
  
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './public',
  }
};
