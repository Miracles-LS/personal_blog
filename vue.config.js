const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    publicPath: process.env.NODE_ENV === 'production'? '/personal_blog/dist': '/', // 基本路径
    pluginOptions:{
        CleanWebpackPlugin
    }
}