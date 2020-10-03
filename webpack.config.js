const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.sass$/,
        use: [
          {
            loader: "vue-style-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          },
          {
            loader: "css-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          },
          {
            loader: "sass-loader",
            options: {
              indentedSyntax: true,
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "vue-style-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          },
          {
            loader: "css-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          includePaths: ["./node_modules"]
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
