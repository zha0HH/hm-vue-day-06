<template>
  <div>
    <p>我的页面</p>
    <p>我的音乐</p>
    <p>我的 == {{ $route.query.name }}  - {{ $route.query.age }}  {{ $route.query.sex }}</p>
  </div>
</template>

<script>
export default {
  created(){
    // this.$route 是当前路由地址的信息对象
    console.log(this.$route.query)
    console.log(this.$route.query.name)
    console.log(this.$route.query.age)
    console.log(this.$route.query.sex)
  }
}
</script>

<style>

</style>