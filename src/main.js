import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import './css/index.scss'
import App from './App'
import Api from './apis/index'
import store from './store'

Vue.use(MpvueRouterPatch)
Vue.use(Api)

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
