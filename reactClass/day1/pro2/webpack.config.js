const webpack=require('webpack');
const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');

module.exports={
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {//配置JS
                test:/\.js(x)?/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {//配置css
                test:/\.css/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin("styles.css"),
        new HtmlWebPackPlugin({//模版文件
            template:path.resolve(__dirname,'./src/index.html')
        })
    ]
};