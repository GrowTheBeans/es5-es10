import path from 'path'
import webpack from 'webpack'
export default ({
  mode: 'development',
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true&timeout=100', './js/index.js'],
  output: {
    path: path.join(__dirname, '/static/'),
    filename: 'js/[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
