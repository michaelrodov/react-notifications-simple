let webpack = require('webpack');
let path = require('path');
const package = require('./package');
const merge = require('webpack-merge');
let webpackBaseConfig = require("./webpack.base.config");

console.log("[DEV] path:"+__dirname+". ");

module.exports = merge(webpackBaseConfig, {
    devtool: "eval-source-map",
    entry: "./src/js/root.js",
    output: {
        path: '/',
        filename: "bundle.js"
    }
});
