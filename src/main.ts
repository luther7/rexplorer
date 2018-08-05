import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
