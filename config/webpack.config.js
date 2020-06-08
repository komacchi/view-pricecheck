const { VueLoaderPlugin } = require('vue-loader')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const Path = require('path')

module.exports = {
  // mode: 'development',
  entry: Path.resolve(__dirname, '../src/js/index.js'),
  output: {
    path: Path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
  devServer: {
    port: 3002,
    contentBase: Path.resolve(__dirname, '../dist'),
    watchContentBase: true,
    publicPath: '/',
    open: true,
    // inline: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
}
