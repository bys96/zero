const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
    // app: ["./client.jsx", "WordRelay.jsx"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [{}],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), // 절대경로랑같음
    filename: "app.js",
  }, // 출력
};
