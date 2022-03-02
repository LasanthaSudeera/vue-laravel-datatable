import Vue from 'vue';
import Dev from './serve.vue';
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
