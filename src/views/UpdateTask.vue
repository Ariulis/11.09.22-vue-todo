<template>
	<div class="row">
		<div class="col s6 offset-s3">
			<h3>Update task</h3>
			<hr />
			<form @submit.prevent="submitHandler" v-if="task">
				<div class="input-field">
					<input id="title" type="text" class="validate" v-model="title" />
					<label for="title">Title</label>
				</div>

				<div class="input-field">
					<div class="chips" ref="chips"></div>
				</div>

				<div class="input-field">
					<textarea
						v-model.trim="description"
						id="description"
						class="materialize-textarea"
					></textarea>
					<label for="description">Description</label>
					<span class="character-counter" style="float: right; font-size: 12px"
						>{{ description.length }}/2048</span
					>
				</div>

				<div class="input-field">
					<input type="text" class="datepicker" ref="datepicker" />
				</div>

				<button type="submit" class="btn">Update task</button>
				<button
					v-if="task.status !== 'completed'"
					type="button"
					class="btn blue"
					id="complete-task-btn"
					@click="completeTask"
				>
					Complete task
				</button>
			</form>
			<p v-else>There is no a task with such an id</p>
		</div>
	</div>
</template>

<script>
	export default {
		metaInfo() {
			return {
				title: "Create task",
			};
		},
		data: () => ({
			title: "",
			chips: null,
			description: "",
			datepicker: "",
		}),
		computed: {
			task() {
				const taskId = +this.$route.params.id;
				return this.$store.getters.tasks.find((t) => t.id === taskId);
			},
		},
		methods: {
			submitHandler() {
				const task = {
					id: this.task.id,
					status: this.task.status,
					title: this.title,
					chips: this.chips.chipsData,
					description: this.description,
					date: this.datepicker.date,
				};
				this.$store.dispatch("updateTask", task);
				this.$router.push("/");
			},
			completeTask() {
				this.$store.dispatch("completeTask", this.task.id);
				this.$router.push("/");
			},
		},
		mounted() {
			if (this.task) {
				this.title = this.task.title;
				this.description = this.task.description;

				this.$nextTick(() => {
					this.chips = window.M.Chips.init(this.$refs.chips, {
						placeholder: "Tags",
						data: this.task.chips,
					});

					this.datepicker = window.M.Datepicker.init(this.$refs.datepicker, {
						format: "dd.mm.yyyy",
						defaultDate: new Date(this.task.date),
						setDefaultDate: true,
					});
					window.M.updateTextFields();
				});
			}
		},
		destroyed() {
			if (this.chips && this.chips.destroy) {
				this.chips.destroy();
			}
			if (this.datepicker && this.datepicker.destroy) {
				this.datepicker.destroy();
			}
		},
	};
</script>

<style scoped>
	form {
		padding: 10px 0;
	}
	#complete-task-btn {
		margin-left: 10px;
	}
</style>
