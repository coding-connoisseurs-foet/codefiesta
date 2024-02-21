<template>
	<nav class="w-100">
		<ul class="w-100 mynav-ul d-flex flex-column flex-md-row">
			<li v-if="this.$route.name!='home'">
				<router-link to="/"> &LeftAngleBracket; Back to Home</router-link>
			</li>

			<li v-for="(n,i) in navItems" v-show="this.$route.name=='home'" :key="i">
				<router-link :to="n.link">{{n.name}}</router-link>
			</li>
			<li v-if="this.$route.name!='register' && this.$route.name!='home'">
				<router-link to="/register">Register Now</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "HeaderView",
	data(){
		return{
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
					name: "FAQs",
					link: "/faq"
				},
				{
					name: "Speakers",
					link: "/speakers"
				},
				{
					name: "Sponsors",
					link: "/sponsors"
				},
				{
					name: "Community Partners",
					link: "/community"
				},
			]
		}
	}
};

</script>

<style scoped>
nav{
	height: 15vh;
}
.mynav-ul{
	flex-wrap: nowrap;
	justify-content: space-evenly;
	list-style: none;
	padding-top: 3.5em;
	margin: 0;
}
.mynav-ul li a{
	padding: 0 1em;
	color: white;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 5px;
}
.mynav-ul li:hover{
	color: #fff;
	text-shadow: -1px 1px 8px #ffc, 1px -1px 8px #fff;
}

.mynav-ul li{
	padding: 4px 0px;
	margin: 10px;
	background: rgba(255, 255, 255, 0.075);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
	backdrop-filter: blur( 3.5px );
	border-radius: 15px;
	-webkit-backdrop-filter: blur( 3.5px );
	border: 1px solid rgba( 255, 255, 255, 0.18 );
}

nav{
	transition: 0.5s;
}

/* --------------media-querry------------ */

@media screen and (max-width:850px){
  .mynav-ul{
	flex-direction: column;
	align-items: stretch;
  }

  .mynav-ul li{
	margin-left: 0;
  }
}

</style>