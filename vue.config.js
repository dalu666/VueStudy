
// const path = require('path'); //路径
// const UglifyJsPlugin =require('uglifyjs-webpack-plugin');//npm install uglifyjs-webpack-plugin --save-dev
// // 生产环境
// const isProduction =process.env.NODE_DEV==='production';
// // 引入文件
// function resolve(dir){
//     return path.join(__dirname,dir);
// }

// module.exports={
//     // 基本路径
//     publicPath:'./',
//     //输出文件目录
//     outputDir:'dist',
//     // 放置生成的静态资源（js、css、img、fonts）的 （相当于 outputDir 的）目录
//     // assetsDir：'./',
//     // 指定生成的index.html 的输出路径（相当于 outputDir）。也可以是一个绝对路径
//     // indexPath:'./',
//     // eslint-loader 在保存的时候进行检查
//     lintOnSave:true,
//     devServer:{
//         overlay:{
//             warnings:false,
//             errors:false
//         },
//         lintOnSave:false,
//         compress:false,//开启压缩
//         open:true,//启动时打开浏览器
//         // 跨域请求
//         proxy:{
//             '/api':{
//                 target:'http://localhost:3000',// 需要代理的服务器
//                 wx:true,//与后台形成一个通道 持续的
//                 changeOrigin:true,//跨域否
//                 pathRewrite:{
//                     '/api':'/', // 重写api
//                 }
//             }
//         }
//     },
//     // css 相关配置
//     css:{
//         //是否使用css分离插件  ExtractTextPlugin
//         // extract:true,
//         // //sourceMaps是什么（主要是方便开发人员的错误定位）， 如果为ture打包时间大大增加
//         // sourceMap:false,
//         // // css预设器配置项
//         // loaderOptions:{
//         //     // pass options to sass-loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
//         //     stylus:{
//         //         // 引入全局变量样式
//         //         data:`@import "@/assets/common/stylus/mixin.styl"`
//         //     }
//         // },
//         // // 是否启用css
//         // module:true,
//     },
//     // webpack配置
//     chainWebpack:config=>{
//         // 配置别名，不配置会报错
//         config.resolve.alias
//         .set("@",resolve('src'))
//         .set("@img",resolve("src/assets/images"))
//         // .set("@stylus",resolve('src/assets/common/stylus'))
//         // 生产环境配置
//         if(isProduction){
//             // 删除预加载
//             config.plugins.delete('preload');
//             config.plugins.delete('prefetch')
//             //开启压缩代码
//             config.optimization.minimize(true);
//             // 分割代码
//             config.optimization.splitChunks({
//                 chunks:'all'
//             })
//             // 生产环境注入 cdn
//         }
//     },
//     // 测试环境
//     configureWebpack:config=>{
//         if(isProduction){
//             // 用cdn方法引入

//             // 为生产环境修改配置...
//             config.plugins.push(
//                 // 生产环境自动删除console   uglifyJsPlugin 插件
//                 new UglifyJsPlugin({
//                     uglifyOptions:{
//                         // 删除console 和警告
//                         compress:{
//                             // waring:false,
//                             drop_debugger:true,
//                             drop_console:true
//                         },
//                     },
//                     // 是否生成sourceMap
//                     sourceMap:false,
//                     // 使用多进程并行来提高构建速度
//                     parallel:true
//                 })
//             )
//         }else{
//             // 为开发环境修改配置
//             // 也可以为测试环境配置
//         }
//     },
//     // 生产环境
//     productionSourceMap:false,
//     //  启用并行化，默认的并发数 os.cpus().length-1; 并行化可以显著加速构建
//     parallel:require('os').cpus().length>1,
    
// }
// 036123370be57a70c2028664351808e4
module.exports = {
    publicPath: '/',
    
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

