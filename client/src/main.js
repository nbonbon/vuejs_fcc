// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00bcd4', // Example custom theme color
        secondary: '#424242',
        success: '#4CAF50',
        error: '#FF5252',
        info: '#2196F3',
        warning: '#FFC107'
      },
      dark: {
        primary: '#00bcd4', // Example custom cyan color
        secondary: '#424242',
        success: '#4CAF50',
        error: '#FF5252',
        info: '#2196F3',
        warning: '#FFC107'
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
