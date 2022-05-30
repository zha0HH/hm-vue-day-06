<template>
  <div>
    <p>发现音乐</p>
     <router-link to="/find/recommend">推荐歌单</router-link> &nbsp;&nbsp;
     <router-link to="/find/rank">排行榜</router-link>&nbsp;&nbsp;
     <router-link to="/find/list">歌单列表</router-link>&nbsp;&nbsp;
     <!-- 二级路由出口 -->
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    
  }
}
</script>

<style>

</style>