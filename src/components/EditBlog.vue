<template>
    <div id="edit-blog">
        <div v-if="!submitted">
            <h2>编辑博客</h2>
            <form>
                <label>博客标题
                    <input type="text" placeholder="请输入博客标题" v-model="blog.title" required>
                </label>

                <label>博客内容
                    <textarea v-model="blog.content"></textarea>
                </label>

                <div id="checkboxes">
                    博客分类：
                    <label>
                        <input type="checkbox" value="Vue.js" v-model="blog.categories">Vue.js
                    </label>
                    <label>
                        <input type="checkbox" value="Node.js" v-model="blog.categories">Node.js
                    </label>
                    <label>
                        <input type="checkbox" value="React.js" v-model="blog.categories">React.js
                    </label>
                    <label>
                        <input type="checkbox" value="Angular.js" v-model="blog.categories">Angular.js
                    </label>
                </div>

                <label>
                    博客作者
                    <select v-model="blog.author">
                        <option v-for="(author, index) in authors" :key="index">{{author}}</option>
                    </select>
                </label>
                <button v-on:click.prevent="editBlog">提交修改</button>
            </form>
        </div>

        <div v-else>
            <h2>修改博客成功</h2>
        </div>
        <!-- <hr>
            <div id="preview">
                <h3>博客总览</h3>
                <p>博客标题：{{blog.title}}</p>
                <p>博客内容：</p>
                <p>{{blog.content}}</p>
                <p>博客分类：</p>
                <ul>
                    <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
                </ul>
                <p>博客作者：{{blog.author}}</p>
            </div> -->
    </div>
</template>

<script>
    /* eslint-disable */
    import AV from '../leancloud.js'
    var Blog = AV.Object.extend('Blog'); // (数据库名)。只注册一次
    export default {
        name: 'edit-blog',
        data() {
            return {
                blog: {
                    title: '',
                    content: '',
                    categories: [],//array checkbox
                    author: ''
                },
                id: this.$route.params.id,
                authors: ["Henry", "Lisa", "Jack"], // array select
                submitted: false
            }
        },
        created() {
            var query = new AV.Query('Blog');
            query.get(this.id).then((res) => {
                console.log(res)
                this.blog = res._serverData
            })
                .catch((error) => {
                    console.log(error)
                })
        },
        methods: {
            editBlog() {
                var blog = AV.Object.createWithoutData('Blog', this.id);
                blog.save(this.blog)
                    .then((res) => {
                        console.log(res)
                        this.submitted = true;
                        setTimeout(() => {
                            this.$router.replace({path:'/'})
                        }, 3000);
                    })
                    .catch((error) => {
                        console.log(error)
                    })

                // this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                //     title: this.blog.title,
                //     body: this.blog.content,
                //     userId: 1
                // })
            }
        },
    }
</script>

<style scoped>
    #edit-blog * {
        box-sizing: border-box;
        color: #757575;
    }

    #edit-blog {
        padding: 20px;
        margin: 20px auto;
        max-width: 600px;
    }

    #edit-blog label {
        display: block;
        margin: 20px 0 10px;
        color: black;
    }

    #edit-blog input[type="text"],
    #edit-blog textarea,
    #edit-blog select {
        display: block;
        width: 100%;
        padding: 8px;
        color: black;
    }

    option {
        font-size: 16px;
        margin: 10px 0;
    }

    textarea {
        height: 200px;
    }

    #checkboxes label {
        display: inline-block;
        margin-top: 0;
    }

    #checkboxes input {
        display: inline-block;
        margin-right: 10px;
    }

    #edit-blog button {
        display: block;
        margin: 20px 0;
        background-color: #24a3b7;
        border: none;
        color: #fff;
        padding: 14px;
        border-radius: 4px;
        font-size: 8px;
        cursor: pointer;
    }

    #preview {
        padding: 10px 20px;
        border: 1px solid #ccc;
        margin: 30px 0;
    }

    h3 {
        margin-top: 10px;
    }
    h2{
      text-align: center;
      color: #004582;
    }
</style>