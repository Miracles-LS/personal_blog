/* eslint-disable */
// leancloud存储服务
var AV = require('leancloud-storage/live-query');
var { Query, User } = AV;
// 即时通讯服务
var { Realtime, TextMessage } = require('leancloud-realtime');
//初始化
var App_ID = 'x2LkeH4wfdgX8Xegf5iARoz0-gzGzoHsz';
var App_KEY = 'zO9SCE5jIuSj0Ewh9Q3itGgs';
AV.init({
    appId: App_ID,
    appKey: App_KEY
})
module.exports =  AV