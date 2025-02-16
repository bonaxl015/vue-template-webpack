const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const development = ({ env = {}, title = 'Default Title', port = 8888 }) => ({
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.[hash].js',
    path: path.join(__dirname, '../../dist'),
    sourceMapFilename: '[file].map'
  },
  stats: 'normal',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../public/index.html'),
      filename: './index.html',
      inject: false,
      templateParameters: ({ hash }) => ({
        env: env ? `<script>window.env = ${JSON.stringify(env)}</script>` : '',
        js: `index.${hash}.js`,
        css: `styles.${hash}.css`,
        version: 'development',
        title
      })
    }),
    new ESLintPlugin({
      extensions: ['ts', 'js', 'vue'],
      context: path.resolve(__dirname, '../../eslint.config.js'),
      emitWarning: true,
      failOnError: false,
      cache: true,
      threads: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, '../../dist'),
    compress: true,
    open: true,
    port
  }
});

module.exports = development;
