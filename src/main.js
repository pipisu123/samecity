import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import {myRequest} from './util/api.js'
import store from './store'

Vue.use(uView);
Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
