const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    mode: "development",
    entry: "./src/index.js", // Correct entry point
    output: {
        filename: "bundle.js", // Use a different output filename
        path: path.resolve(__dirname, "dist"),
        uniqueName: "mfeApp",
    publicPath: "auto",
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
    // resolve: {
    //     alias: {
    //         angular: path.resolve(__dirname, "node_modules/angular"),
    //     },
    // },
    resolve: {
      extensions: [".js"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
              mfeApp: 'mfeApp@http://localhost:4400/remoteEntry.js'
            },
            shared: []
          }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,  "index.html"),
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 8081,
        open: true,
        // historyApiFallback: true,
    },
};
