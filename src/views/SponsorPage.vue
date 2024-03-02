<template>
  <div class="container-fluid">
    <div class="community">
      <h1 class="heading">
        <span>Community Partners</span>
      </h1>
      <div class="image-cont">
        <div class="image m-5 border rounded" v-for="com in community" :key="com.name">
          <img :src="com.logo" :alt="com.name" />
        </div>
      </div>
    </div>
    <div class="community">
      <h1 class="heading">
        <span>Previous Sponsors</span>
      </h1>
    </div>
    <div class="community">
      <h1 class="heading">
        <span>Our Sponsors</span>
      </h1>
    </div>
    <div class="community">
      <h1 class="heading">
        <span>Instresed In Sponsoring Us?</span>
      </h1>
      <div class="spn-promo">

        <button class="btn btn-lg mt-2 btn-outline-light rounded-0 cf-register">
          <span class="glowing-text">SPONSOR US</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      community: [
        {
          name: "cc",
          logo: require("../assets/images/partners/cc.png"),
        },
        {
          name: "aws",
          logo: require("../assets/images/partners/aws.png"),
        },
        {
          name: "gdsc",
          logo: require("../assets/images/partners/GDSC.png"),
        },
        {
          name: "github",
          logo: require("../assets/images/partners/github.svg"),
        },
        {
          name: "postman",
          logo: require("../assets/images/partners/postman.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.community {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.community .image-cont {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}

.image {
  height: 230px;
  width: 230px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image:hover {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.7);
}

.community img {
  width: 80%;
}

.spn-promo {
  display: flex;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
