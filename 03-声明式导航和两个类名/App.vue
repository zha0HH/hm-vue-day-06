<template>
  <div>
    <div class="footer_wrap">
      <!-- Vue.use(VueRouter)后 会得到两个内置的组件 router-view 和 router-link  -->
      <!-- router-link 是vue-router内置的组件 最终会被解析成a标签在页面展示 -->
      <!-- router-link 跳转的属性是to="/路由地址" to属性会被解析成 href属性-->
      <!-- 
        只要设置了router-link标签 被激活的链接会自动添加 
          router-link-exact-active 
          router-link-active 两个类名 
      -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
    <div class="top">
      <!-- 核心步骤2. 指定路由出口 -->
      <!-- <router-view></router-view> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .router-link-active 模糊匹配 使用场景较多  */
/* .router-link-active {
  background-color: red !important;
} */
 /* 精确匹配  */
/* .router-link-exact-active  {
  background-color: red !important;
} */
.active {
  background-color: blue !important;
}

.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>