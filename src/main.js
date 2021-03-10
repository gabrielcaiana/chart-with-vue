import Vue from "vue";
import App from "./App.vue";
import store from "./store";


Vue.config.productionTip = false;
import VueTree from '@ssthouse/vue-tree-chart'
Vue.component('vue-tree', VueTree)

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
