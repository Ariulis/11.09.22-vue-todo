<template>
	<div>List of tasks</div>
</template>

<script>
	export default {
		metaInfo() {
			return {
				title: "The tasks list",
			};
		},
		data: () => ({
			tasks: [],
		}),
		mounted() {
			this.tasks = this.$store.getters.tasks;
			console.log(this.tasks);
		},
	};
</script>
