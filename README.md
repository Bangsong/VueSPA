# 项目前提环境
- `node：v10.14.1`
- `cnpm(也可以使用npm替换所有指令的cnpm)`
# 运行项目：
- 下载项目：`git clone https://github.com/Bangsong/VueSPA.git`
- 下载依赖：`cd VueSPA && cnpm init`
- 运行：`npm run dev`

# 搭建此环境的步骤(若直接下载的此项目可以不用执行这些操作)
## 安装环境
- 初始化`npm`：`cnpm init`
- 安装`webpack`及`webpack-dev-server`：`cnpm i -D webpack webpak-cli webpack-dev-server`
- 安装`vue`：`cnpm i -D vue`
- 安装`vue-loader`及`vue-template-compiler`：`cnpm i -D vue-loader vue-template-compiler vue-style-loader vue-router`
    - `vue-loader`：webpack使用的loader
    - `vue-template-compiler`：用于编译vue单文件，即：后缀为.vue文件
    - `vue-style-loader`：用于处理单文件.vue中的style
    - `vue-router`：vue路由
- 安装`css-loader`及`style-loader`：`cnpm i -D css-loader style-loader`
- 安装`babel-loader`(用于ES6语法转ES5)：`cnpm i -D babel-loader @babel/core @babel/preset-env`
    - `babel-loader`：webpack使用的loader
    - `@babel/core`：babel核心，提供api，babel-loader在处理中需要调用。
    - `@babel/preset-env`：ES6转ES5的规则
- 安装`file-loader`(用于图片资源引用)：`cnpm  i -D file-loader`
- 安装`url-loader`(用于css中使用url引用图片)：`cnpm i -D url-loader`
- 安装`html-webpack-plugin`(自动生成html)：`cnpm i -D html-webpack-plugin`
- 安装`clean-webpack-plugin`(自动清理文件)：`cnpm i -D clean-webpack-plugin`
## 配置环境
- 在根目录下创建`webpakc.config.js`
- 配置`webpack.config.js`
    ``` js
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
    ```
- 在`package.json`中配置wepack-dev-server及webpack编译
    ``` diff
    "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
    +"dev":"webpack-dev-server --open --hot",
    +"build":"webpack"
  },
  ```