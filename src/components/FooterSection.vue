<template>
  <div class="footer">
    <div class="main-footer">
        <div class="social">
          <div class="about">
            <a href=""><h3>Who Are We?</h3></a>
            <p>We are Coding Coding Connoisseurs. We aim to build a close knit community of coding enthusiasts to a better network, opportunities, discussions and mentorship. The aim of the club is to improve the overall programming culture at FoET-LU.</p>
              
          </div>
          <div class="media">
              <h3>Connect With Us</h3>
              <ul class="social-links">
                  <li v-for="(n,i) in social" :key="i">
                      <a :href="n.link" target="_blank"> <img :src="n.logo"> <p>{{ n.handle }}</p></a>
                  </li>
              </ul>
          </div>
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

:root{
    --white : #fff;
}

.footer {
  min-height: 50vh;
  width: 100%;
  background: linear-gradient(#000, #00000028);
}

.slogan {
  color: var(--white);
  text-transform: uppercase;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 1px;
  font-size: 19px;
  border-top: 1px solid var(--white);
  padding: 20px 0;
  text-align: center;
  margin: 0;
}

.main-footer {
    padding-top: 22px;
  min-height: 420px;
  display: flex;
  justify-content: space-evenly;
}

.venue {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
}
.social {
    width: 65%;
    display: flex;
    justify-content: space-around;
    color: var(--white);
}

.media, .about{
    width: 50%;
    padding-left: 9%;
}

.social h3{
    width: 60%;
}

.about p{
    width: 78%;
    font-size: 18px;
    padding-left: 9px;
}

.venue p,h3{
    text-align: left;
    width: 303px;
    padding: 7px 5px;
}

.about a{
    color: var(--white);
    text-decoration: none;
}

.social-links{
    list-style-type: none;
    width: 80%;
    padding-left: 5px;
}
.social-links li{
    width: 100%;
}

.social-links li a{
    height: 37px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--white);
}
.social-links li a img{
    width: 35px;
    height: 35px;
}
.social-links li a p{
    font-size: 17px;
    margin: 0;
    padding-left: 5px;
    width: 100%;
}

.main-footer p:hover{
    color: #ff4522;
}

#map{
    border: none;
    border-radius: 9px;
    margin-left: 5px;
}

/* --------------media-querry------------ */
@media screen and (max-width:1013px){
    .main-footer{
        flex-direction: column;
    }

    .social, .venue{
        width: 100%;
    }


}
@media screen and (max-width:704px){
    .social{
        flex-direction: column;
        align-items: center;
    }

    .venue h3, .venue p{
        text-align: center;
    }

    .about p{
        text-align: center;
    }

    .about, .media{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin-bottom: 10px;
    }

    .social-links{
        width: fit-content;
    }

    .social h3{
        width: fit-content;
    }


}
</style>

<script>
export default {
	name: "SocialLinks",
	data(){
		return{
			social: [
				{
					logo: 'https://raw.githubusercontent.com/Kritikasingh2004/codefiesta/main/src/assets/images/instagram.png',
					handle: "cod.ngclub",
                    link: "https://www.instagram.com/cod.ngclub/"
				},
				{
					logo: 'https://raw.githubusercontent.com/Kritikasingh2004/codefiesta/main/src/assets/images/linkedin.png',
					handle: "coding-connoiseurs",
                    link: "https://www.linkedin.com/company/coding-connoiseurs/"
				},
				{
					logo: 'https://raw.githubusercontent.com/Kritikasingh2004/codefiesta/main/src/assets/images/twitter.png',
					handle: "ccfoet_LU",
                    link: "https://twitter.com/ccfoet_LU"
				},
				{
					logo: 'https://raw.githubusercontent.com/Kritikasingh2004/codefiesta/main/src/assets/images/telegram.png',
					handle: "CC Info Group",
                    link: "https://t.me/+RaQG2y9OcqYyNTdl"
				},
				{
					logo: 'https://raw.githubusercontent.com/Kritikasingh2004/codefiesta/main/src/assets/images/youtube.png',
					handle: "@codingconnoisseurs9569",
                    link: "https://www.youtube.com/@codingconnoisseurs9569"
				},
				{
					logo: 'https://raw.githubusercontent.com/Kritikasingh2004/codefiesta/main/src/assets/images/github.png',
					handle: "Coding-Connoisseurs",
                    link: "https://github.com/Coding-Connoisseurs"
				}
				
			]
		}
	}
};

</script>