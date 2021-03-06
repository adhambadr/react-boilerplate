var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
    debug:true,
  devtool:'#inline-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
     test:/\.(png|woff|ttf|eot)$/, loader: 'url-loader?limit=100000'
    },
    {
      test:/\.svg$/, loader :'svg-url-loader'
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};