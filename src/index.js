import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Element from 'element-ui'
import './assets/theme/index.css';
import 'vue-status-indicator/styles.css'
import App from './App.vue'
import Marketplace from './components/Marketplace.vue'
import Services from './components/Services.vue'
import Store from './store'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/services' },
    { path: '/services', component: Services },
    { path: '/marketplace', component: Marketplace }
  ]  
})

const store = new Vuex.Store(Store)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
