const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [{
            //css loader
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            }]
        },
        {
            //babel loader
            test: /\.js$/,
            exclude: "/node_modules/",
            use:[{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        })
    ]
};