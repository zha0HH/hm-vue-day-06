<template>
  <div>
    <p>发现音乐</p>
    <p>发现周杰伦</p>
    <p>发现双节棍</p>
    <p>发现谢霆锋</p>
    <button @click="gotoFriend">去找朋友</button>
  </div>
</template>

<script>
import router from '../router/index.js'
export default {
  methods: {
    gotoFriend(){
      // 使用js方式跳转页面,称为编程式导航
      // this.$router.push('路径')
      // this.$router.push({path: '路径'})
      // this.$router.push({name: '路由名称'}) 需要给对应的路由规则添加name属性
      //----------------------
      // this.$router.push('/friend')
      // this.$router.push({ path: '/friend' })
      // this.$router.push({ name: 'partner' })
      router.push({ name: 'partner' })
      // console.log(router === this.$router) // true
      console.log(this)
    }
  }

  // $route 当前路由信息对象 (地址栏的信息被包裹在一个对象中的)
  // $router 是路由实例对象(在router/index.js中导出了路由实例, 最终在main.js中挂载了router)
}
</script>

<style>

</style>