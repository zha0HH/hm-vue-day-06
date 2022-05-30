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
export default {
  methods: {
    gotoFriend(){
      // ================编程式导航query传参==============================
      // 使用js方式跳转页面,称为编程式导航,传递参数 
      // this.$router.push('路径?k=v&k=v')
      // this.$router.push({path: '路径', query: {k: v, k: v}})
      // this.$router.push({name: '路由名称', query: {k: v, k: v} }) 需要给对应的路由规则添加name属性
      // query方式获取  $route.query.参数名
      //----------------------
      // this.$router.push('/friend?name=zs&age=18')
      // this.$router.push({ path: '/friend', query: {name: 'ww', age: 98} })
      // this.$router.push({ name: 'partner', query: {name: 'zl6', age: 100} })
      // ==================编程式导航query传参===========================
      // ==================编程式导航params传参===========================
    
      // this.$router.push('/friend/100') 使用这种方式传递参数 需要修改路由规则(挖坑)
      // 使用params传参会忽略path(不能传递参数), 需要使用name
      // 使用name+params传参 是将参数放在内存中(并不会在地址栏中显示),如果携带的参数是敏感的参数就可以使用这种方式传递
      // 使用name+params传参 刷新页面携带的参数会丢失(本地存储方案)
      this.$router.push({ name: 'partner', params: { id: 999 } })
    }
  }
}
</script>

<style>

</style>