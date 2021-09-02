import Vue from 'vue'
import App from './App.vue'
import Pivot from "vue-webdatarocks";
import 'webdatarocks/webdatarocks.css';

Vue.use(Pivot);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
