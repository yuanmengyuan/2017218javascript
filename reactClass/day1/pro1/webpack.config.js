const webpack=require('webpack');
const path=require('path');
//使用模版文件的一些设置；
const HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
    //入口文件：我们的主入口文件是src下的index;
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        //把编译好的文件放到哪里；我们放到dist目录下
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'//打包后的文件名字
    },
    module:{
        rules:[
            {//配置的是js文件
                test:/\.js(x)?$/,//以 .js 或者 .jsx结尾的文件
                use:'babel-loader',
                exclude:/node_modules/  //不包含
            }
        ]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin(),//具有文件压缩的功能，开发过程中不建议使用，上线的时候；
        new HtmlWebpackPlugin({//把谁作为模版文件；
            template:'./src/index.html'
        })
    ]

};