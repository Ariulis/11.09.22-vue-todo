<template>
	<div>
		<h3>The list of tasks</h3>
		<div class="row" v-if="tasks.length">
			<div class="input-field col s6">
				<select ref="select" v-model="filter">
					<option value="" disabled selected>Choose the status</option>
					<option value="active">Active</option>
					<option value="outdated">Outdated</option>
					<option value="completed">Completed</option>
				</select>
				<label>Status sorting</label>
				<button
					type="button"
					class="btn btn-small blue"
					v-if="filter"
					@click="filter = null"
				>
					Clear filter
				</button>
			</div>
		</div>
		<hr />
		<div v-if="tasks.length" class="table">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Date</th>
						<th>Tags</th>
						<th>Description</th>
						<th>Status</th>
						<th>Update task</th>
						<th>Delete task</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(task, idx) in tasks" :key="task.id">
						<td>{{ idx + 1 }}</td>
						<td>{{ task.title }}</td>
						<td>{{ new Date(task.date).toLocaleDateString("ru-RU") }}</td>
						<td>
							<div v-for="tag in task.chips" :key="tag.tag">{{ tag.tag }}</div>
						</td>
						<td class="task-description-table">
							<div>{{ task.description }}</div>
						</td>
						<td>{{ task.status }}</td>
						<td>
							<router-link
								:to="`/update/${task.id}`"
								custom
								v-slot="{ href, navigate }"
							>
								<a :href="href" @click="navigate" class="btn btn-small">Update</a>
							</router-link>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-small red"
								@click="modal.open(), (deletingTaskId = task.id)"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p v-else>There are no tasks yet</p>
		<!-- Modal -->
		<div id="delete-task-modal" class="modal" ref="modal">
			<div class="modal-content">
				<h4>Delete task</h4>
				<p>Are you sure that you want to delete the task?</p>
			</div>
			<div class="modal-footer">
				<button
					type="button"
					class="btn btn-small"
					@click="deleteTaskModalAction($event)"
				>
					Cancel
				</button>
				<button
					type="button"
					class="btn btn-small red"
					@click="deleteTaskModalAction($event)"
					id="delete-task-modal-btn"
				>
					Delete
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		metaInfo() {
			return {
				title: "The tasks list",
			};
		},
		data: () => ({
			select: null,
			filter: null,
			modal: null,
			deletingTaskId: null,
		}),
		computed: {
			tasks() {
				return this.$store.getters.tasks.filter((task) => {
					if (this.filter) {
						return task.status === this.filter;
					}
					return true;
				});
			},
		},
		methods: {
			deleteTaskModalAction(event) {
				this.modal.close();
				if (event.target.id === "delete-task-modal-btn") {
					this.$store.dispatch("deleteTask", this.deletingTaskId);
				}
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.select = window.M.FormSelect.init(this.$refs.select);
				this.modal = window.M.Modal.init(this.$refs.modal);
			});
		},
		destroyed() {
			if (this.select && this.select.destroy) {
				this.select.destroy();
			}
			if (this.modal && this.modal.destroy) {
				this.modal.destroy();
			}
		},
	};
</script>

<style scoped>
	.table {
		overflow-x: auto;
	}
	.task-description-table {
		max-width: 200px;
	}
	.task-description-table div {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	#delete-task-modal-btn {
		margin-left: 10px;
	}
</style>
