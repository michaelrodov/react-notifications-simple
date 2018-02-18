let webpack = require('webpack');
let path = require('path');
const merge = require('webpack-merge');
let webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig, {
    devtool: "eval-source-map",
    entry: "root.js",
    output: {
        filename: "bundle.js"
    }
});
