<template>
	<div id="app">
		<NavBar />
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
	import NavBar from "./components/NavBar";

	export default {
		name: "App",
		components: {
			NavBar,
		},
	};
</script>

<style>
	@import "~materialize-css/dist/css/materialize.min";
	html,
	body,
	#app,
	.container {
		height: 100%;
	}
</style>
