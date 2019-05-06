/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(VueRouter)

//全局自定义指令
/*  rainbow 已在ShowBlog.vue本地定义了
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    //Math.random().toString(16)生成十六进制的字符串
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})
*/
Vue.directive('theme',{
  // eslint-disable-next-line
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth="1260px";
    }else if(binding.value == "narrow"){
      el.style.maxWidth="560px";
    }
    if(binding.arg == "column"){
      el.style.background="#6677cc";
      el.style.padding="20px";
    }
  }
})

//全局自定义过滤器
/* to-uppercase 已在ShowBlog.vue本地定义了
Vue.filter("to-uppercase", function(value){
  return value.toUpperCase(); //blog标题大写
})
*/
Vue.filter("snippet", function(value){
  return value.slice(0,100) + "..."; //blog内容缩略
})

// 创建路由
const router = new VueRouter({
  routes:Routes, // (缩写) 相当于 routes: routes
  mode:"history"
})

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
