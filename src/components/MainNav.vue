<template>
  <el-menu :default-active="route" class="el-menu-vertical-demo" :collapse="isCollapse" :router="isRouter">
    <el-menu-item class="logo-item" index="1" disabled>
      <div class="logo"></div>
    </el-menu-item>
    <el-menu-item index="services">
      <i class="el-icon-menu"></i>
      <span slot="title">Services</span>
    </el-menu-item>
    <el-menu-item index="marketplace">
      <i class="el-icon-goods"></i>
      <span slot="title">Marketplace</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      isRouter: true,
    };
  },
  computed: {
    route () {
      return this.$route.path.split("/")[1]
    }
  },
}
</script>

<style scoped>
.el-menu {
  height: 100%;
  background-color: #251440;
  font-weight: 300;
}
.el-menu-item {
  color: #fff;
  height: 40px;
  line-height: 40px;
}
.el-menu-item.is-active {
  background-color: #251440;
}
.el-menu-item:hover {
  background-color: #1a0c31;
}
.el-menu-item.is-active {
  color: #fff;
  font-weight: 600;
}
.logo-item {
  margin: 40px 0 20px 0;
}
.logo-item:hover, .logo-item.is-active {
  background-color: #251440;
}
.logo-item.is-disabled {
  opacity: 0.7;
  cursor: auto;
}
.logo {
  background: url(../assets/white_logo.png);
  background-repeat: no-repeat;
  background-size: 40px;
  width: 40px;
  height: 40px;
}
</style>
