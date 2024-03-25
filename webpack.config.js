const {Configuration} = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]_[chunkhash].js",
        clean: true
    },
    stats: "errors-only",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules:[
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                moment: {
                    name: "moment",
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]moment[\\/]/
                }
            }
        }
    }
}


module.exports = config