<template>
  <el-container id="app">
    <el-aside  width="200px">
      <MainNav />
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'app',
  components: {
    MainNav,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');

html {
  height: 100%;
}
body {
  font-family: "Open Sans","Helvetica Neue",Helvetica,sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>