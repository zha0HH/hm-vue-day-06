<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <!-- 路由跳转传递参数
          方式一 /path?k=v&k=v 携带参数
                获取参数 this.$route.query.参数名
          方式二 /path/参数1   使用这种方式传递参数需要修改路由规则   
                { path:'/friend/:id', component: Friend }
                获取参数 this.$route.params.参数名
       -->
      <router-link to="/my?name=光光子&age=18&sex=man">我的音乐</router-link>
      <!-- restful接口规范 -->
      <router-link to="/friend/123/456">朋友</router-link>
    </div>
    <div class="top">
      <!-- 核心步骤2. 指定路由出口 -->
      <!-- <router-view></router-view> -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
export default {
  // created(){
  //   // this.$route 是当前路由地址的信息对象
  //   console.log(this.$route.query)
  //   console.log(this.$route.query.name)
  //   console.log(this.$route.query.age)
  //   console.log(this.$route.query.sex)
  // }
}
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