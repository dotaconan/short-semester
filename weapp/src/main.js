import Vue from 'vue'
import App from './App'
// import net from './utils/request'
// import net from 'axios'
var Fly = require('flyio/dist/npm/wx')
var net = new Fly()

Vue.prototype.$net = net

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
