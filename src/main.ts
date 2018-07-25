import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueHighlightJS from 'vue-highlightjs';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
