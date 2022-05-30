<template>
  <div>
    <p>我的朋友</p>
    <p>我的朋友-周润发</p>
    <p>我的朋友-周迅</p>
    <p>我的朋友-周星驰</p>
    <!-- 原路返回
        可以使用 back()
        可以使用 go(-1)
     -->
    <!-- <button @click="$router.back()">原路返回</button> -->
    <button @click="$router.go(-1)">原路返回</button>
  </div>
</template>

<script>
export default {
   
}
</script>

<style>

</style>