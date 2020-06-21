import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
// import NProgress from 'nprogress' // 进度条
// import 'nprogress/nprogress.css'
import './style/moren.css' // 清除css默认样式文件
import './mock/index.js' // 本地数据mock文件
import vueAplayer from 'vue-aplayer'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.use(vueAplayer)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 200, showSpinner: false })
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     sessionStorage.removeItem('username')
//   }
//   let user = sessionStorage.getItem('username')
//   if (!user && to.path != '/login') {
//     next({path: '/login'})
//   } else {
//     NProgress.start()
//     next()
//   }
// })

// router.afterEach(transition => {
//   NProgress.done()
// })
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
