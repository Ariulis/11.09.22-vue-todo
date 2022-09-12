import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		createTask({ commit }, task) {
			commit("createTask", task);
		},
		deleteTask({ commit }, id) {
			commit("deleteTask", id);
		},
	},
	state: {
		tasks: JSON.parse(localStorage.getItem("tasks") || "[]").map((task) => {
			if (new Date(task.date) < new Date() && task.status !== "completed") {
				task.status = "outdated";
			}
			return task;
		}),
	},
	mutations: {
		createTask(state, task) {
			state.tasks.push(task);
			localStorage.setItem("tasks", JSON.stringify(state.tasks));
		},
		deleteTask(state, id) {
			// const idx = state.tasks.findIndex((task) => task.id === id);
			// state.tasks.splice(idx, 1);
			state.tasks = state.tasks.filter((task) => task.id !== id);
			localStorage.setItem("tasks", JSON.stringify(state.tasks));
		},
	},
	getters: {
		tasks: (s) => s.tasks,
	},
});
