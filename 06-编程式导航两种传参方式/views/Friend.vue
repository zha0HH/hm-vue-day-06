<template>
  <div>
    <p>我的朋友</p>
    <p>我的朋友-周润发</p>
    <p>我的朋友-周迅</p>
    <p>我的朋友-周星驰</p>
    <!-- {{ $route.query.name }} -- {{ $route.query.age }} -->
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
   created(){
     console.log(this.$route);
     if(this.$route.params.id) {
       localStorage.setItem('id', this.$route.params.id)
     }
   }
}
</script>

<style>

</style>