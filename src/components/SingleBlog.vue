<template>
    <div id="single-blog">
        <div v-if="!deleted">
            <h1>博客详情</h1>
            <h2>博客标题：{{blog.title}}</h2>
            <article>博客内容：{{blog.content}}</article>
            <p>博客作者：{{blog.author}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
            </ul>
            <button v-if="!noObject" v-on:click="deleteSingleBlog" id="deleteBtn">删除</button>
            <!-- <button v-if="!noObject" v-on:click="editSingleBlog">修改</button> -->
            <router-link :to="'/edit/'+ id">修改</router-link>
        </div>
        <h2 v-else>删除博客成功</h2>
        <!--<h2 v-else-if="editted">你已经修改博客成功</h2> -->
    </div>
</template>

<script>
    /* eslint-disable */
    import AV from '../leancloud.js'
    export default {
        name: 'single-blog',
        data() {
            return {
                id:this.$route.params.id,
                blog:{},
                noObject:false,
                deleted:false
                // editted:false
            }
        },
        created() {
            // this.axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
            // .then((res)=>{
            //     this.blog = res.data;
            // })

            var query = new AV.Query('Blog');
            query.get(this.id).then((res)=>{
                this.blog = res._serverData;
            })
            .catch((error)=>{
                console.log(error);
                this.noObject=true;
            })

        },
        methods: {
            deleteSingleBlog(){
                var Blog = AV.Object.createWithoutData('Blog', this.id);
                Blog.destroy().then( (success)=> {
                    // 删除成功
                    console.log(success);
                    this.deleted=true;
                    setTimeout(() => {
                        this.$router.replace({path:'/'})                        
                    }, 3000);
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            editSingleBlog(){

            }
        },
    }
</script>

<style scoped>
#single-blog{
    max-width: 1220px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(238, 238, 238, 0.35);
    color: #757575;
}
#single-blog div{
    max-width: 960px;
    margin: 0 auto;
}
h1{
    text-align: center;
    color: #004582;
}
h2{
    color: #757575;
}
#deleteBtn{
    border: none;
}
#deleteBtn,a{
    background-color: #24a3b7;
    color: #fff;
    width: 60px;
    height: 30px;
}
a{
    display: inline-block;
    line-height: 30px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    margin-left: 20px;
}
</style>