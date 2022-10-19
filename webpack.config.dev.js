const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devServer: {
        static: {
            watch: true,
        },
        port: 3000,
        compress: true,
        open: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: "index.html",
        }),
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules|\.d\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false,
                        },
                    },
                },
            }
        ],
    },
};