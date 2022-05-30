<template>
  <div>
    <p>我的朋友</p>
    <p>我的朋友-周润发</p>
    <p>我的朋友-周迅</p>
    <p>我的朋友-周星驰</p>
    <p>{{ $route.params.id }} {{ $route.params.id2 }}</p>
  </div>
</template>

<script>
export default {
   created(){
     console.log(this.$route)
     console.log(this.$route.params.id)
   }
}
</script>

<style>

</style>