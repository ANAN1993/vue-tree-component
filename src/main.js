import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from 'vue2-svg-icon/Icon.vue'
import myTree from './components/tree'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(myTree)
Vue.component('icon', Icon)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
