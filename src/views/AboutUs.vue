<template>
  <div class="about-us">
    <h1 class="heading"><span>About CodeFiesta</span></h1>
    <div class="about-content">
      <p>
        Code Fiesta is a three-day, multi-faceted technical event which consists
        of a wide range of contests related to coding, developing, creativity
        and a lot more! The event was first held in May 2022 with the sole
        purpose of providing the students with a platform to display their
        technical prowess and to enhance their problem solving skills and
        critical thinking. This technical fest comprises a variety of
        competitions starting from competitive coding to capture the flag to
        meme-making, and a lot more!
      </p>
      <p>
        Each competition has its own score and a collective leaderboard will be
        maintained to decide the final winners.
      </p>
      <p>There will be both individual as well as team events.</p>
    </div>
    <h1 class="heading"><span>About Us</span></h1>
    <div class="about-content">
      <p>
        Coding Connoisseurs is a group of coding enthusiasts with the aim of
        building a community that introduces the students to a better network,
        provides them with opportunities and mentorship, and helps them learn
        and grow more each day.
      </p>
      <p>
        The club was established in 2019 and since then has been working
        tirelessly to improve the overall programming culture at FoET LU by
        hosting a plethora of community events and seminars.
      </p>
      <p>
        The club hopes to be home to a diverse range of people striving to
        pioneer in various tech-related fields and being well-rounded, learned
        individuals!
      </p>
    </div>
    <div class="gallery">
      <h1 class="heading"><span>Code Fiesta 1.0 gallery</span></h1>
      <div class="image">
        <img
          v-for="gal in gallery"
          :key="gal.id"
          v-bind:src="gal.image"
          :alt="gal.id"
        />
      </div>
    </div>
  </div>
  <FaqSection />
  <FooterSection />
</template>

<style>
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.about-content {
  width: 80%;
  padding: 20px;
  border: 1px solid var(--theme1);
  margin-bottom: 50px;
}

.about-content:hover {
  background-color: rgb(255, 77, 0, 0.1);
  border: 1px solid rgb(255, 77, 0, 0.7);
}

.about-content p {
  color: #fff;
  width: 100%;
  font-size: 1.5em;
}

.gallery {
  min-height: 100vh;
  width: 100%;
}

.gallery .image{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.gallery .image img{
  width: 29%;
  margin: 1%;
}
.gallery .image img:hover{
  cursor: pointer;
  width: 30%;
  margin: 0.5%;
}

@media screen and (max-width:750px) {
  .gallery .image img{
  width: 69%;
  margin: 1%;
}
.gallery .image img:hover{
  cursor: pointer;
  width: 70%;
  margin: 0.5%;
}
}


</style>

<script>
import FaqSection from "@/components/FaqSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "AboutUs",
  data() {
    return {
      gallery: [
        {
          id: 1,
          image: require("../assets/images/gallery/gal1.svg"),
        },
        {
          id: 2,
          image: require("../assets/images/gallery/gal2.svg"),
        },
        {
          id: 3,
          image: require("../assets/images/gallery/gal3.svg"),
        },
        {
          id: 4,
          image: require("../assets/images/gallery/gal4.svg"),
        },
        {
          id: 5,
          image: require("../assets/images/gallery/gal5.svg"),
        },
        {
          id: 6,
          image: require("../assets/images/gallery/gal6.svg"),
        },
      ],
    };
  },
  components: { FooterSection, FaqSection },
};
</script>
