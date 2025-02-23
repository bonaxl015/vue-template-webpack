const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');

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
    }),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(false),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(true),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, '../../dist'),
    compress: true,
    open: true,
    port,
    hot: true,
    liveReload: true,
    watchFiles: ["../../src/**/*"]
  }
});

module.exports = development;
