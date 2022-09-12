<template>
	<div>
		<nav class="blue darken-3">
			<div class="nav-wrapper">
				<router-link to="/" custom v-slot="{ href, navigate }">
					<a :href="href" @click="navigate" class="brand-logo">Tasks</a>
				</router-link>
				<a href="#" data-target="mobile-demo" class="sidenav-trigger"
					><i class="material-icons">menu</i></a
				>
				<ul class="right hide-on-med-and-down">
					<router-link
						v-for="item in menu"
						:key="item.path"
						:to="item.path"
						custom
						v-slot="{ href, navigate, isExactActive }"
					>
						<li :class="[isExactActive && 'active']">
							<a :href="href" @click="navigate">{{ item.name }}</a>
						</li>
					</router-link>
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-demo">
			<router-link
				v-for="item in menu"
				:key="item.path"
				:to="item.path"
				custom
				v-slot="{ href, navigate, isExactActive }"
			>
				<li :class="[isExactActive && 'active']" @click="mobileMenu.close()">
					<a :href="href" @click="navigate">{{ item.name }}</a>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import { mainNav } from "../router/mainNav";

	export default {
		name: "navBar",
		data: () => ({
			mobileMenu: null,
		}),
		computed: {
			menu() {
				return mainNav.filter((i) => i.name !== "Update task");
			},
		},
		mounted() {
			const sidenavs = document.querySelectorAll(".sidenav"),
				sidenavEl = document.querySelector("#mobile-demo");

			window.M.Sidenav.init(sidenavs);
			this.mobileMenu = window.M.Sidenav.getInstance(sidenavEl);
		},
		destroyed() {
			if (this.mobileMenu && this.mobileMenu.destroy) {
				this.mobileMenu.destroy();
			}
		},
	};
</script>

<style scoped>
	nav {
		padding: 0 15px;
	}
</style>
