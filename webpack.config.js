const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',//入口文件
    mode:"development",//模式：调试
    output: {
        filename: 'index.js',//出口文件名
        path: path.resolve(__dirname, 'dist')//出口文件位置
    },
    devServer: {
        open: true,//自动在浏览器打开
        port: 8080,//端口
        contentBase: 'dist',//指定托管的根目录
        hot: true,//启动热更新
    },
    devtool: "inline-source-map",//source map用于调试时，报错位置指定到具体文件
    module: {
        rules: [
            {
                //配置css-loader
                test: /\.css$/,
                use: ["vue-style-loader", "style-loader", "css-loader"]
            },
            {
                //配置css中使用图片
                test: /\.(png|jpg|gif|svg|bmp|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1048577,
                        name: 'images/[hash:8]_[name].[ext]'
                    }
                }
            },
            {
                //处理字体
                test:/\.(ttf|eot|svg|woff|woff2)$/,
                use:'url-loader'
            },
            { 
                //ES6转ES5
                test: /\.js$/, 
                exclude: /node_modules/, 
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                //配置vue单文件
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins: [
        //热更新插件
        new webpack.HotModuleReplacementPlugin(),
        //自动生成html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),//内存中的生成文件存放位置
            filename: 'index.html'//文件名称
        }),
        //自动清理文件
        new CleanWebpackPlugin(['dist']),
        //解析.vue文件
        new VueLoaderPlugin()
    ]
};