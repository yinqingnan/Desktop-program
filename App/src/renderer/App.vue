<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my-proj',
    mounted () {
      this.$router.push({path: '/login'})
    }
  }
</script>

<style>

  /* CSS */
#app{
  width: 100%;
  height: 100vh;
}
</style>
