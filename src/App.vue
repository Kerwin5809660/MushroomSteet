<template>
  <div id="app">
      <router-view></router-view>
      <MainTabbar></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from './components/common/tab-bar/MainTabbar'
  export default {
    name: 'App',
    components:{
      MainTabbar
    }
  }
</script>

<style lang="scss">
  @import "assets/css/base.css";
</style>
