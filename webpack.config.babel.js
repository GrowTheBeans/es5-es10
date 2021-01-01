import path from 'path'
import webpack from 'webpack'
export default ({
  mode: 'development',
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.min.js',
    publicPath: '/static/'
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
  devServer: {
    hot: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
