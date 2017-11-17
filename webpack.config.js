let webpack = require('webpack');
let path = require('path');
let NODE_ENV = (!process.env.NODE_ENV) ? "development" : process.env.NODE_ENV;
let isDevelopment = NODE_ENV !== "production";
console.log(isDevelopment + ":isDev");


let config = {
    context: path.join(__dirname, "src"),
    devtool: isDevelopment ? "eval-source-map" : false,
    entry: "root.js",
    resolve: {
        extensions: ['.scss', '.jsx', '.js'],
        modules: [
            path.resolve('./src/js'),
            path.resolve('./src/style'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                loaders: ['svg-url-loader']
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "dist/bundle.min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ],
    devServer: {
        proxy: {
            '/app': {
                target: 'http://127.0.0.1:8088',
                pathRewrite: {'/#': ''},
                secure: false,
                changeOrigin: true
            }
        }
    }
};

if (!isDevelopment) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: false, minimize: true}));
}

module.exports = config;