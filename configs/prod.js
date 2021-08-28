const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: ["./src/main.tsx"],
  output: {
    path: path.resolve("./dist"),
    filename: "proxy-service-container.js",
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
