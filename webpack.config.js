const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const fileName = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./public")
};

const devServer = () => {
  return {
    progress: true,
    contentBase: path.join(__dirname, `public`),
    host: 'localhost',
    port: 8084,
    compress: false,
    historyApiFallback: true,
    overlay: {
      // warnings: true,
      // errors: true
    }
  }
}

const optimization = () => {
  const config = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    }
  }

  if (isProd) {

    config.minimize = true;

    config.minimizer = [
      new TerserPlugin({
        extractComments: true,
        cache: true,
        parallel: true
      })
    ]
  }

  return config;
};

const plugins = () => {

  const pluginConf = [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: `css/${fileName("css")}`,
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      template: `${path.join(__dirname, './src/index.html')}`,
      filename: './index.html',
    }),
  ]

  return pluginConf;
};



module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: `js/${fileName("js")}`,
    path: PATHS.dist
  },
  devtool: isDev ? "source-map" : false, //"cheap-module-eval-source-map" - not working
  devServer: isDev ? devServer() : {},
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'components': path.join(__dirname, './src/components/'),
      'utils': path.join(__dirname, './src/utils/'),
      'mocks': path.join(__dirname, './src/mocks/'),
      'store': path.join(__dirname, './src/store/'),
      'services': path.join(__dirname, './src/services/'),
      'pages': path.join(__dirname, './src/pages/'),
    }
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.ts(x)?$/,
        use: ["babel-loader", "awesome-typescript-loader"],
        exclude: "/node_modules/"
      },
      {
        // scss
        test: /\.scss$/,
        use : [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          {
            loader: "css-loader",
            options: { sourceMap: isDev }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: './postcss.config.js'
              },
              sourceMap: isDev,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "./../fonts",
          outputPath: "./fonts/"
        }
      },
      {
        // images / icons
        test: /\.(png|jpg|gif|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              publicPath: "./../img",
              outputPath: "./img"
            }
          }
        ],
      },
    ]
  },

  optimization: optimization(),

  plugins: plugins(),
};
