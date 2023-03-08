import Vue from 'vue'
import App from './App.vue'
import i18nPluginVue from './utils/i18nPlugin'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(i18nPluginVue, {
    greetings: {
      hello: 'Display-hahaha',
    },
  })