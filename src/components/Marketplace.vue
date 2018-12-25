<template> 
  <div>
    <div class="head">
      <div class="title">Marketplace</div>
      <el-form ref="form" :model="form" size="medium">
        <el-form-item>
          <el-input v-model="form.name" placeholder="Search for services"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-row :gutter="20">
      <el-col :span="8" :lg="{span: 6}" :sm="{span: 12}" :md="{span: 8}" :xs="{span: 24}" v-for="item in items" :key="item.name">
        <div class="grid-content bg-purple">
          <img class="logo" :src="item.logo">
          <div class="name">{{ item.name }}</div>
          <div class="by">@{{ item.by }}</div>
          <div class="text">{{ item.text }}</div>
          <el-button class="upload" icon="el-icon-upload" circle></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        form: {
          name: ''
        },
    };
  },
  computed: {
    items () {
      return this.$store.state.marketplace.services
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    border-style: dashed;
    border-width: 1px;
    border-color: #dfd7ec;
    padding: 15px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    transition: border-color .3s
}
.grid-content:hover {
    border-color: #b5a9ca;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.logo {
    height: 60px;
    padding: 3px;
    border-radius: 6px;
    display: block;
    margin: 5px auto 20px auto;
}
.by {
  font-size: 12px;
  font-weight: 300;
  color: #737373;
  margin: 6px 0;
  background-color: #f3f3f3;
  display: inline-block;
  padding: 2px 5px;
  border-radius: 6px;
}
.name {
  font-size: 14px;
  font-weight: 600;
}
.text {
  font-size: 14px;
  margin-top: 5px;
  flex-grow: 1;
}
.upload {
  margin-top: 10px;
  align-self: flex-end;
}
.title {
  font-size: 40px;
  font-weight: 300;
  margin: 10px 10px 30px 0px;
  flex: 1;
}
.el-form {
  width: 330px;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>