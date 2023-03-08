import Vue from 'vue'
import App from './App.vue'
import waring from '../src/components/index.js';
Vue.use(waring);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
