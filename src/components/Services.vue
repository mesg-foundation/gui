<template> 
  <div>
    <div class="head">
      <div class="title">Services</div>
    </div>
    <div class="body">

    </div>
    <el-card class="box-card" v-for="service in services" :key="service.sid">
      <el-tooltip effect="dark" :content="statusName(service.status)" placement="right">
        <status-indicator class="status" v-bind="setStatus(service.status)"></status-indicator>
      </el-tooltip>
      <span class="name">{{ service.name }}</span>
        <span class="sid">
          sid: {{ service.sid }}
        </span>
    </el-card>
    <!-- <el-table :data="services"  style="width: 100%">
      <el-table-column prop="hash" label="Hash"></el-table-column>
      <el-table-column prop="sid" label="SID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="status" label="Status">
        <template slot-scope="scope">
          <el-tooltip effect="dark" :content="statusName(scope.row.status)" placement="right">
            <status-indicator v-bind="setStatus(scope.row.status)"></status-indicator>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import { StatusIndicator } from 'vue-status-indicator'

export default {
  components: {
    StatusIndicator
  },
  computed: {
    services () {
      return this.$store.state.services
    }
  },
  mounted() {
    this.refreshMessage()
  },
  methods: {
    refreshMessage() {
      this.$store.dispatch('refreshServices')
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
}
.el-card:hover {
  background-color: #e4ddef;
  cursor: pointer; 
  color: #5d5d5d;
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
  margin-left: 15px;
}
.el-card:hover .sid {
  color: #5d5d5d;
}
</style>