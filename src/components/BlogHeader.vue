<template>
    <nav id="blog-header">
        <ul>
            <li><router-link to="/" exact>博客</router-link></li>
            <li><router-link to="/add" exact>写博客</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'blog-header',
    }
</script>

<style scoped>
    nav{
      background-color: crimson;
      padding: 30px 0;
      max-width: 1300px;
      margin: 0 auto 40px;
    }
    ul{
        list-style-type: none;
        padding: 20px;
        text-align: center;
        margin: 0;
    }
    li{ 
        display: inline-block;
        margin: 0 10px;
    }
    a{
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
        color: #fff;
    }
    .router-link-active{
        background-color: rgba(255,255,255,0.8);
        color: #444;
    }
</style>