// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {MdButton, MdBadge, MdContent,MdTable, MdField} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdBadge);
Vue.use(MdContent);
Vue.use(MdTable);
Vue.use(MdField);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  vuetify,
  template: '<App/>'
})
