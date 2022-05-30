<template>
  <div>
    <!-- 点击a链接切换不同的组件 -->
    <a href="#/home">首页</a> &nbsp;&nbsp;
    <a href="#/movie">电影</a>&nbsp;&nbsp;
    <a href="#/about">关于</a>&nbsp;&nbsp;
    <hr>
    <!-- 动态组件 -->
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyHome from './views/MyHome.vue'
import MyMovie from './views/MyMovie.vue'
import MyAbout from './views/MyAbout.vue'
export default {
  components: {
    MyHome,
    MyMovie,
    MyAbout
  },
  data(){
    return {
      comName: 'MyMovie'
    }
  },
  created(){
    // hashchange 可以监听地址栏路由地址的变化
    window.addEventListener('hashchange',()=>{
      // console.log(location.hash) // 获取hash值
      if(location.hash === '#/home') {
        this.comName = 'MyHome'
      }else if(location.hash === '#/movie') {
        this.comName = 'MyMovie'
      }else if(location.hash === '#/about') {
        this.comName = 'MyAbout'
      }
    })
  }
}
</script>

<style>

</style>