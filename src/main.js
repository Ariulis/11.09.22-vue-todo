import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import store from "./store";
import router from "./router";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");
