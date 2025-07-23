const path = require("path");

module.exports = {
  mode: "production", // Remove the warning
  entry: {
    theme: "./assets/js/main.js", // Your main JS file
    // Add other entry points if needed
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets"), // Output to assets folder
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
