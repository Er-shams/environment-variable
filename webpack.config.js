const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');


module.exports = (env) => {
  console.log("********************")
  console.log(process.env.NODE_ENV)
  return {
    entry: "./index.js",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    devServer: {
      static: "./dist",
      devMiddleware: {
        writeToDisk: true,
      },
      historyApiFallback: true,
      //  https://blog.jimmydc.com/webpack-history-api-fallback/
    },
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "public/main.html",
      }),
      new MiniCssExtractPlugin({ filename: "css/[name].css" }),
      new TerserPlugin(),
      new CleanWebpackPlugin(),
      // new webpack.DefinePlugin({
      //   "process.env": {
      //     "Node_Env": JSON.stringify(process.env.NODE_ENV)
      //   }
      // }), // https://webpack.js.org/plugins/environment-plugin
      new Dotenv()
    ],
  };
};
