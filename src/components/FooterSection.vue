<template>
  <div class="footer">
    <div class="main-footer">
      <div class="social">
        <h3>Connect With Us</h3>
        <ul class="social-links">
            <li v-for="(n,i) in social" :key="i">
                <a :href="n.link" target="_blank"> <img :src="n.logo"> <p>{{ n.handle }}</p></a>
            </li>
        </ul>
      </div>
      <div class="venue">
        <h3>Venue</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1778.579181561606!2d80.9376662!3d26.9301936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399956ff42559d0d%3A0xfcc6d32a916da8dd!2sFaculty%20Of%20Engineering%20%26%20Technology%2C%20University%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1696440105354!5m2!1sen!2sin" width="300" height="200" id="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>FoET, University of Lucknow Second campus</p>
    </div>
    </div>
    <p class="slogan">🚩 Jai CC 🚩</p>
  </div>
</template>

<style>
.footer {
  min-height: 50vh;
  width: 100%;
  background: linear-gradient(#000, #00000028);
}

.slogan {
  color: #fff;
  text-transform: uppercase;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 1px;
  font-size: 19px;
  border-top: 1px solid #fff;
  padding: 11px 0;
  text-align: center;
  margin: 0;
}

.main-footer {
  height: 450px;
  display: flex;
  justify-content: space-evenly;
}

.social, .venue {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}

.venue p,h3, .social h3{
    text-align: left;
    width: 50%;
    padding: 7px 5px;
}

.social-links{
    list-style-type: none;
}

.social-links li a{
    display: flex;
    text-decoration: none;
    color: #fff;
}
.social-links li a img{
    width: 32px;
}

#map{
    border: none;
    border-radius: 9px;

}
</style>

<script>
export default {
	name: "SocialLinks",
	data(){
		return{
			social: [
				{
					logo: '../assets/images/instagram.png',
					handle: "cod.ngclub",
                    link: "https://www.instagram.com/cod.ngclub/"
				},
				{
					logo: '../assets/images/linkedin.png',
					handle: "coding-connoiseurs",
                    link: "https://www.linkedin.com/company/coding-connoiseurs/"
				},
				{
					logo: '../assets/images/twitter.png',
					handle: "ccfoet_LU",
                    link: "https://twitter.com/ccfoet_LU"
				},
				{
					logo: '../assets/images/telegram.png',
					handle: "CC Info Group",
                    link: "https://t.me/+RaQG2y9OcqYyNTdl"
				},
				{
					logo: '../assets/images/youtube.png',
					handle: "@codingconnoisseurs9569",
                    link: "https://www.youtube.com/@codingconnoisseurs9569"
				},
				{
					logo: '../assets/images/github.png',
					handle: "Coding-Connoisseurs",
                    link: "https://github.com/Coding-Connoisseurs"
				}
				
			]
		}
	}
};

</script>