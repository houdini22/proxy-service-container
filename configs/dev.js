const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["./src/main.tsx"],
  output: {
    path: path.resolve("./dist"),
    filename: "proxy-service-container.dev.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
