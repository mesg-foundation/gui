<template>
  <div v-loading="loading">
    <div class="head">
      <div class="title">Services</div>
      <!--<input type="file" @change="handleFiles" id="input" webkitdirectory mozdirectory>-->
      <div class="selections">
        <span v-if="count" class="count"><strong>{{ count }}</strong> selected</span>
        <el-button v-on:click="startServices" :disabled="!count" type="success" icon="fas fa-play" circle></el-button>
        <el-button v-on:click="stopServices" :disabled="!count" type="warning" icon="fas fa-stop" circle></el-button>
        <el-button v-on:click="deleteServices" :disabled="!count" type="danger" icon="fas fa-trash-alt" circle></el-button>
        <el-checkbox @change="selectAll" class="all-selected" v-model="allSelected"></el-checkbox>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" :class="{ 'is-active': service.selected }" v-for="service in services" :key="service.sid">
          <div class="body">
            <el-tooltip effect="dark" :content="statusName(service.status)" placement="right">
              <status-indicator class="status" v-bind="setStatus(service.status)"></status-indicator>
            </el-tooltip>
            <div class="info">
              <div class="name">{{ service.name }}</div>
              <div class="sid">
                sid: {{ service.sid }}
              </div>
            </div>
            <el-checkbox @change="select" :checked="service.selected" v-model="service.selected" :key="service.sid"  ></el-checkbox>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import { StatusIndicator } from 'vue-status-indicator';
export default {
  components: {
    StatusIndicator
  },
  data() {
    return {
      value2: true,
      loading: false,
      allSelected: false,
    }
  },
  computed: {
    services () {
      return this.$store.state.services.sort(function(a, b){
        if(a.sid < b.sid) { return -1; }
        if(a.sid > b.sid) { return 1; }
        return 0;
      })
    },
    count() {
      return this.getSelected().length
    },
  },
  mounted() {
    this.$store.dispatch('refreshServices')
  },
  methods: {
    showLoading(){
      this.loading = true;
    },
    hideLoading(){
      this.loading = false;
    },
    startServices(){
      this.showLoading()
      this.$store.dispatch('startServices', this.getSelectedSIDs()).then(()=>{
        this.$store.dispatch('refreshServices')
        this.hideLoading()
        this.allSelected = false
      })
    },
    stopServices(){
      this.showLoading()
      this.$store.dispatch('stopServices', this.getSelectedSIDs()).then(()=>{
        this.$store.dispatch('refreshServices')
        this.hideLoading()
        this.allSelected = false
      })
    },
    deleteServices(){
      this.showLoading()
      this.$store.dispatch('deleteServices', this.getSelectedSIDs()).then(()=>{
        this.$store.dispatch('refreshServices')
        this.hideLoading()
        this.allSelected = false
      })
    },
    handleFiles(event){
      this.$store.dispatch('deployService', event.target.files)
    },
    getSelected() {
      return this.services.filter(service => service.selected)
    },
    getSelectedSIDs() {
      return this.getSelected().map(service => service.sid)
    },
    selectAll(selected) {
      this.services.forEach(service => {
        service.selected = selected
      })
    },
    select(selected) {
      if (!selected) {
        this.allSelected = false
      } else{
        if (this.getSelected().length == this.services.length) {
          this.allSelected = true;
        }
      }
    },
    setStatus(status) {
      var attr = {}
      switch (status){
      case 0:
        attr.negative = true
        break;
      case 1:
        break;
      case 2:
        attr.positive = true
        attr.pulse = true
        break;
      case 3:
        attr.intermediary = true
        break;
      case 4:
        attr.positive = true
        break;
      }
      return attr
    },
    statusName(status) {
      switch (status){
      case 0:
        return "Unknown"
      case 1:
        return "Stopped"
      case 2:
        return "Starting"
      case 3:
        return "Partial"
      case 4:
        return "Running"
      }
    }
  },
}
</script>

<style scoped>
.title {
  font-size: 40px;
  font-weight: 300;
  margin: 10px 10px 30px 0px;
  flex: 1;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-table {
  font-size: 13px;
}
.el-card {
  box-shadow: 0 2px 10px 0 rgba(208, 208, 208, 0.3);
  margin-bottom: 15px;
  border-style: dashed;
  border-width: 1px;
  border-color: #dfd7ec;
  transition: border-color .3s, background-color .3s, color .8s;
}
.el-card:hover, .el-card.is-active {
  background-color: #f7f3ff;
  border-color: #b5a9ca;
}
.body {
  display: flex;
  align-items: center;
}
.status {
  margin-right: 15px;
}
.name {
  font-size: 16px;
  font-weight: 400;
}
.sid {
  font-size: 13px;
  color: #ccc;
  transition: color .8s;
}
.el-card:hover .sid, .el-card.is-active .sid {
  color: #5d5d5d;
}
.el-upload-dragger {
  width: 100%;
}
.info {
  flex: 1;
}
.count {
  font-size: 13px;
  margin-right: 15px;
  text-transform: uppercase;
  color: #666;
}
.all-selected {
  margin: 0 21px;
}
</style>	
 
<style>
.el-checkbox .el-checkbox__inner {
  width: 22px;
  height: 22px;
}

.el-checkbox__inner::after {
  height: 14px;
  left: 8px;
}

.fa {
  font-size: 14px;
}
.selections .el-button {
  margin-left: 4px;
}
.selections .el-button.is-circle {
  padding: 11px 12px 11px 12px
}
</style>
