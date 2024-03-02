<template>
	<nav class="w-100">
		<!-- ------for nav in other pages------ -->
		<ul class="w-100 mynav-ul d-flex spl-nav-cont" v-if="this.$route.name != 'home'">
			<li class="special-nav">
				<router-link to="/"> &LeftAngleBracket; Back to Home</router-link>
			</li>
			<li class="special-nav">
				<a href="https://lu.ma/s1ah6f4l">Register Now</a>
			</li>
		</ul>
		<!-- ----for nav----- -->
		<ul class="w-100 mynav-ul d-flex norm-nav" :id="this.toggle ? 'yes-toggle' : ''" v-if="this.$route.name == 'home'">
			<li class="toggle">
				<button @click="toggleNav()">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</li>
			<li v-for="(n, i) in navItems" v-show="this.$route.name == 'home'" :key="i">
				<router-link :to="n.link">{{ n.name }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "HeaderView",
	data() {
		return {
			toggle: false,
			navItems: [
				{
					name: "About Us",
					link: "/aboutus"
				},
				{
					name: "Schedule",
					link: "/schedule"
				},
				{
					name: "Speakers",
					link: "/speakers"
				},
				{
					name: "Sponsors",
					link: "/sponsors"
				},
			],
		};
	},
	methods: {
		toggleNav() {
			this.toggle = !this.toggle;
			console.log(this.toggle);
		},
	},
};

</script>

<style scoped>
/* --------toggle animation ----------- */
#yes-toggle li {
	display: flex !important;
	margin-top: 11px;
	opacity: 1;
}

#yes-toggle .toggle span:nth-child(even) {
	opacity: 0;
}

#yes-toggle .toggle span:first-child {
	transform: translate(0, 7px) rotate(-45deg);
}

#yes-toggle .toggle span:last-child {
	transform: translate(0, -7px) rotate(45deg);

}

#yes-toggle {
	background-color: #000;
}

nav {
	height: 15vh;
}

.mynav-ul {
	flex-wrap: nowrap;
	justify-content: space-evenly;
	list-style: none;
	align-items: flex-end;
	padding: 0;
	height: 100%;
	margin: 0;
}

.mynav-ul li a {
	padding: 0 1em;
	color: white;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 5px;
}

.mynav-ul li:hover {
	color: #fff;
	text-shadow: -1px 1px 8px #ffc, 1px -1px 8px #fff;
}

.mynav-ul li {
	padding: 4px 0px;
	margin: 10px;
	background: rgba(255, 255, 255, 0.075);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	backdrop-filter: blur(3.5px);
	border-radius: 15px;
	-webkit-backdrop-filter: blur(3.5px);
	border: 1px solid rgba(255, 255, 255, 0.18);
}

nav {
	transition: 0.5s;
}

.toggle {
	width: 100%;
	margin: 0 !important;
	border-radius: 0 !important;
	border: none !important;
	background-color: #000 !important;
	height: 70px;
	display: none;
	opacity: 1 !important;
}

.toggle button {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background: rgba(255, 255, 255, 0.075);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);
	border: 1px solid rgba(255, 255, 255, 0.18);
	outline: none;
	border-radius: 10px;
	height: 45px;
	width: 47px;
	padding: 7px;
}

.toggle button:hover {
	text-shadow: -1px 1px 8px #ffc, 1px -1px 8px #fff;
}

.toggle button:hover span {
	text-shadow: -1px 1px 8px #ffc, 1px -1px 8px #fff;
	background-color: #fff;
}

.toggle span {
	display: inline-block;
	width: 30px !important;
	background: rgba(255, 255, 255, 0.7) !important;
	height: 1px !important;
	transition: 0.4s;
}

/* --------------media-querry------------ */

@media screen and (max-width: 685px) {
	.mynav-ul {
		justify-content: center;
	}

	.mynav-ul li {
		margin: 0 1% 0 0;
	}

	.mynav-ul li a {
		padding: 0 10px;
	}

	.spl-nav-cont {
		justify-content: space-evenly !important;
		padding-top: 0 !important;
	}
}

@media screen and (max-width: 574px) {
	.spl-nav-cont {
		flex-direction: row !important;
		align-items: center !important;
	}

	.mynav-ul {
		flex-direction: column;
		align-items: stretch;
		padding-top: 0;
		z-index: 10;
	}

	.mynav-ul li a {
		width: 100% !important;
		text-align: center !important;
	}

	.norm-nav {
		height: fit-content;
		overflow-y: visible;
		position: sticky;
		top: 0;
		z-index: 10;
		height: 50vh !important;
		justify-content: flex-start;
	}

	.norm-nav li {
		background-color: #000;
		box-shadow: none;
		display: none;
		z-index: 10;
		opacity: 0;
		transition: opacity 1s;
	}

	.toggle {
		display: flex !important;
		align-items: flex-end;
		justify-content: flex-end;
	}

	.toggle button {
		margin-right: 5%;
	}

	.mynav-ul li {
		margin: 5px 2%;
	}

}

@media screen and (max-width: 465px) {
	.spl-nav-cont {
		flex-direction: column !important;
		align-items: stretch !important;
		height: 100%;
		justify-content: center !important;
		padding: 0 !important;
	}

	nav {
		height: 20vh;
	}

	.special-nav a {
		display: block;
	}
}
</style>