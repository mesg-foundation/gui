<template>
  <el-container id="app">
    <el-aside width="200px">
      <MainNav />
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-aside v-if="servicesPage" class="right" width="230px">
      <el-upload
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :show-file-list="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Drop service here or <em>click to upload</em></div>
      </el-upload>
    </el-aside>
  </el-container>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'app',
  computed: {
    servicesPage() {
      return this.$route.path.split("/")[1] == "services"
    }
  },
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
.el-upload  {
  height: 100%;
  width: 100%;
}
.el-aside.right {
  border-left: 1px solid #eee;
  padding: 20px;
}
.el-aside.right > div  {
  height: 100%;
  width: 100%;
}
.el-upload .el-upload-dragger {
  border: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>