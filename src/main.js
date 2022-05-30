import Vue from 'vue'
import App from './App.vue'
// 导入路由实例对象,在vue实例中挂载即可
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 5. 将路由对象注入到vue实例中
  // router: router,
  router,
}).$mount('#app')
