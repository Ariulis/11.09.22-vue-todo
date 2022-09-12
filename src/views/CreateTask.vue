<template>
	<div class="row">
		<div class="col s6 offset-s3">
			<h3>Create task</h3>
			<hr />
			<form @submit.prevent="submitHandler">
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

				<button type="submit" class="btn">Create task</button>
			</form>
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
		methods: {
			submitHandler() {
				const task = {
					id: Date.now(),
					status: 'active',
					title: this.title,
					chips: this.chips.chipsData,
					description: this.description,
					date: this.datepicker.date,
				};
				this.$store.dispatch("createTask", task);
				this.$router.push("/");
			},
		},
		mounted() {
			this.chips = window.M.Chips.init(this.$refs.chips, {
				placeholder: "Tags",
			});

			this.datepicker = window.M.Datepicker.init(this.$refs.datepicker, {
				format: "dd.mm.yyyy",
				defaultDate: new Date(),
				setDefaultDate: true,
			});
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
</style>
