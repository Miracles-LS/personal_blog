<template>
  <div id="app">
    <!-- <app-blog></app-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue'

export default {
  name: 'app',
  components: {
    BlogHeader
  }
}
</script>

<style>

</style>
