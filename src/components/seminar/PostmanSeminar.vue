<template>
  <div class="rule">
    <h1 class="heading">
      <span>{{ event.name }}</span>
    </h1>
    <p><span>Description : </span> {{ event.overview }}</p>
    <p class="rule-highlight">Description of the round :</p>
    <div class="speaker">
      <div class="col-6 col-md-4 col-lg-3 mt-lg-3 mt-md-3 pb-5 anime"  v-for="speaker in event.speakers" :key="speaker.title">
        <div class="card text-center text-white bg-dark ">
          <img :src="`https://github.com/${speaker.github}.png`" class="card-img-top" :alt="imageAlt" />
          <div class="card-body">
            <h5 class="card-title">{{ speaker.title }}</h5>
            <p class="card-text">
              <a
                class="btn border"
                :href="`https://github.com/${speaker.github}`"
                target="_blank"
                >View On Github</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="main-announce" class="w-100">
      <a
        href="https://lu.ma/s1ah6f4l"
        class="btn btn-lg mt-2 btn-outline-light rounded-0 cf-register"
        ><span class="glowing-text">Participate NOW</span></a
      >
    </div>
  </div>
</template>

<style>


.anime h5 {
    color: #FAF1E6;
}

.anime {
    transition: .3s transform;
}

.anime:hover {
    transform: scale(1.05);
}
.rule {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rule-highlight {
  font-size: 2em;
}

.rule p {
  width: 80%;
  color: #fff;
  font-size: 1.5em;
}

p span {
  color: var(--theme1);
  font-weight: 500;
}

.list-rule {
  width: 75%;
  color: #fff;
  font-size: 1.4em;
}

.speaker{
  width: 100%;
  display: flex;
}
</style>

<script>
export default {
  name: "PostmanSeminar",
  data() {
    return {
      event: {
        name: "All About API",
        overview:
          "A comprehensive seminar on API basics and Postman tailored to equip participants with a solid understanding of API basics, including request-response mechanisms, methods, and their applications. Dive deep into practical sessions where you'll set up a project on Replit, design APIs employing every key method (GET, POST, PUT, DELETE), and master testing them using Postman.",
        speakers: [
          {
            title: "Siddhartha Mishra",
            github: "SiddharthaMishra-dev",
          },
          {
            title: "Arvind Srivastav",
            github: "alwenpy",
          },
        ],
      },
    };
  },
};
</script>
