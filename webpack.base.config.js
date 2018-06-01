let path = require('path');


let config = {
    context: __dirname,
    resolve: {
        extensions: ['.scss', '.jsx', '.js'],
        modules: [
            path.resolve('./src/js'),
            path.resolve('./src/js/components'),
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
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: []
};


module.exports = config;