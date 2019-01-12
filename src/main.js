import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './common/router';

import axios from 'axios';

import './mock/mock.js';

Vue.prototype.$http=axios;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
