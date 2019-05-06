<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
        </ul>
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
                blog:{}
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
            })

        },
    }
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background-color: #eee;
    border: 1px dotted#aaa;
}
</style>