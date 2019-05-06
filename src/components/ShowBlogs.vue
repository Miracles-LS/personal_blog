<template>
    <div v-theme:column="'wide'" id="show-blogs">
      <h1>博客总览</h1>
      <input type="text" placeholder="搜索" v-model="search">
      <router-link :to="'/blog/'+ blog.id" v-for="(blog, index) in filteredBlogs" :key="index">
        <div class="single-blog">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            <article>{{blog.content | snippet}}</article>
            </div>
        </router-link>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import AV from '../leancloud.js'
  export default {
    name: 'show-blogs',
    data() {
        return {
            blogs:[],
            search:""
        }
    },
    computed: {
        filteredBlogs(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search); //boolearn。es6 匹配搜索与blog的title
            })
        }
    },
    created(){
        var query = new AV.Query('Blog');
        var blogsArr=[];
        query.find().then( (data) =>{
            for(let key in data){
                let blogObj={};
                blogObj = data[key]._serverData;
                blogObj.id = data[key].id;
                blogsArr.push(blogObj);
            }
            console.log(blogsArr)
            this.blogs = blogsArr
            
        })

        // this.axios.get('http://jsonplaceholder.typicode.com/posts')
        // .then((res)=>{
        //     this.blogs = res.data.slice(0,10);
        // })
    },
    //本地自定义过滤器
    filters:{
        // "to-uppercase":function(value){
        //     return value.toUpperCase(); //blog标题大写
        // }
        toUppercase(value){   //es6写法
            return value.toUpperCase(); //blog标题大写
        }
    },
    //本地自定义指令
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2,8);
            }
        }
    }
  }
  </script>
  
  <style>
  #show-blogs{
      max-width: 800px;
      margin: 0 auto;
  }
  .single-blog{
      padding: 20px;
      margin: 20px 0;
      box-sizing: border-box;
      background-color: #eee;
      border: 1px dotted #aaa;
  }
  #show-blogs a{
      text-decoration: none;
      color: #444;
  }
  input[type="text"]{
      box-sizing: border-box;
      padding: 8px;
      width: 100%;
  }
  </style>
  