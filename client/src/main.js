// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel.vue'

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)
Vue.use(Vuetify)

Vue.component('panel', Panel)

sync(store, router)

const vuetify = new Vuetify()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  components: { App },
  template: '<App/>'
})
