const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'local'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Arthur Burnichon - Tech Product Manager',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/assets/robots/',
                to: ''
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/assets/favicon/',
                to: ''
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from:'./src/assets/media',
                to: 'assets'
            }]
        })
    ]
};