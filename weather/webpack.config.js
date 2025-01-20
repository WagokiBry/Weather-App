// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css", // Output CSS file
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          "css-loader", // Turn CSS into JS modules
        ],
      },
      {
        test: /\.html$/i, // Match HTML files
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        type: "asset/resource",
      },
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Use Babel preset-env
          },
        },
      },
    ],
  },
};
