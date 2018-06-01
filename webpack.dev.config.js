const merge = require('webpack-merge');
let webpackBaseConfig = require("./webpack.base.config");

console.log("[DEV] path:"+__dirname+". ");

module.exports = merge(webpackBaseConfig, {
    devtool: "eval-source-map",
    entry: "./src/js/demo-root.js",
    output: {
        path: '/',
        filename: "bundle.js"
    }
});
