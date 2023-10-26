import Vue from 'vue'
import App from './App.vue'
import Pivot from "@webdatarocks/vue-webdatarocks";
import '@webdatarocks/webdatarocks/webdatarocks.min.css';

Vue.use(Pivot);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
