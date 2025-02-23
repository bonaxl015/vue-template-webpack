const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const packageJson = require('../../package.json');

const version = packageJson.version;

const production = (
  {
    env = {},
    title = 'Vue Template'
  }
) => ({
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: `./v${version}/index.js`,
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.join(process.cwd(), 'bundle-analyzer/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: `./v${version}/styles.css`,
      chunkFilename: `./v${version}/[id].css`
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../public/index.html'),
      filename: './index.html',
      inject: false,
      templateParameters: {
        env: `<script>window.env = ${JSON.stringify(env)}</script>`,
        js: `./v${version}/index.js`,
        css: `./v${version}/styles.css`,
        version,
        title
      }
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(false),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
    })
  ],
  stats: 'errors-warnings'
});

module.exports = production;
