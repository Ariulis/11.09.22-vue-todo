export const mainNav = [
	{
		path: "/",
		name: "Tasks list",
		component: () => import("../views/ListTasks"),
	},
	{
		path: "/create",
		name: "Create task",
		component: () => import("../views/CreateTask"),
	},
	{
		path: "/update/:id",
		name: "Update task",
		component: () => import("../views/UpdateTask"),
	},
];
