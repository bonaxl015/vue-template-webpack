const path = require('path');
const autoPrefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          autoPrefixer()
        ]
      ]
    }
  }
};

const base = {
  entry: './src/index.ts',
  target: 'web',
  output: {
    filename: 'index.js',
    path: path.join(process.cwd(), '../../dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: path.join(__dirname, '../../tsconfig.json')
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: true,
              sourceMap: true
            }
          }
        ],
        include: [/\.module\.css$/, /\.module\.scss$/],
        exclude: [/node_modules/]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postCSSLoader,
          'sass-loader'
        ],
        exclude: [/node_modules/, /\.module\.css$/, /\.module\.scss$/]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]',
              outputPath: 'assets',
              publicPath: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]',
              outputPath: 'fonts',
              publicPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-modules-commonjs'
            ]
          }
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = base;
