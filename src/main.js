import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";
import "./registerServiceWorker";
import i18n from "@/i18n";
import translate from "@/components/translate.vue";
//import "bootstrap";
import "@/styles.scss";
Vue.config.productionTip = false;
Vue.component("trans-movie", translate);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
