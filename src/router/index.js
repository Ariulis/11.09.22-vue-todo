import Vue from "vue";
import VueRouter from "vue-router";
import { mainNav } from "./mainNav";

Vue.use(VueRouter);

const routes = [...mainNav],
	router = new VueRouter({
		mode: "history",
		base: process.env.BASE_DIR,
		routes,
	});

export default router;
