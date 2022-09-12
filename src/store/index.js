import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		createTask({ commit }, task) {
			commit("createTask", task);
		},
	},
	state: {
		tasks: JSON.parse(localStorage.getItem("tasks") || "[]").map((task) => {
			if (new Date(task.date) < new Date()) {
				task.status = "outdated";
			}
			return task;
		}),
	},
	mutations: {
		createTask(state, task) {
			state.tasks.push(task);
			JSON.stringify(localStorage.setItem("tasks", state.tasks));
		},
	},
	getters: {
		tasks: (s) => s.tasks,
	},
});
