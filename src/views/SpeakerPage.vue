<template>
  <div class="event-page skyline">
    <h1 class="heading"><span>SEMINARS AND THE SPEAKERS</span></h1>
    <div id="events">
      <div
        class="event-card my-3 text-white"
        v-for="event in events"
        :event="event"
        :key="event.id"
      >
        <div class="card-img">
          <img :src="event.image" alt="event" />
        </div>
        <div class="card-body">
          <h5>
            {{ event.title }}
          </h5>
          <p><span>Event Description : </span>{{ event.description }}</p>
          <p><span>Speaker : </span>{{ event.speaker }}</p>
          <router-link
            :to="event.to"
            class="btn btn-outline-light rounded-0 my-3"
          >
            View More
          </router-link>
        </div>
      </div>
    </div>
    <div class="end"></div>
  </div>
</template>

<style>
.event-card {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  min-height: 80vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 57px !important;
}

#events {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.card-img,
.card-body {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-img img {
  width: 80%;
}

.card-body p {
  width: 80%;
  text-align: left;
  font-size: 1.3vw;
  color: #fff;
}
.card-body h5 {
  width: 80%;
  font-size: 3vw;
  text-align: center;
  margin-bottom: 10px;
}

.card-body p span {
  color: #fe8d41;
  font-weight: 600;
}

.btn {
  transition: 0.3s;
  width: 300px;
}

.end {
  height: 10vh;
}

@media screen and (max-width: 955px) {
  .card-img,
  .card-body {
    width: 50%;
  }

  .card-img img {
    width: 90%;
  }

  .card-body p {
    width: 90%;
    font-size: 1em;
  }
  .card-body h5 {
    width: 90%;
    font-size: 2em;
  }
}

@media screen and (max-width: 730px) {
  .event-card {
    flex-direction: column;
    justify-content: space-between;
  }

  .card-img,
  .card-body {
    width: 90%;
    margin-top: 11px;
  }
}

@media screen and (max-width: 375px) {
  .btn {
    width: 90%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Design Masters",
          description:
            "This is a seminar on UI (User-Interface)/ UX (User-Experience) development which aims at teaching how to create visually appealing and user-friendly digital interfaces for websites, apps, etc. The speakers will delve into the latest trends, best practices and practical techniques to help one elevate their designing skills.",
          speaker: "TBD",
          image: require("../assets/images/events/speaker.svg"),
          to: "/designmasters",
        },
        {
          id: 2,
          title: "Cutting-Edge",
          description:
            "This is a seminar on video editing which aims at enhancing the students' editing prowess. The speakers will help discover the right tools, techniques and creative approaches to craft compelling visual narratives and tell captivating stories through the magic of editing.",
          image: require("../assets/images/events/speaker.svg"),
          to: "/video",
        },
        {
          id: 3,
          title: "Guardians of the Digital Realm",
          description:
            "This is a seminar on cyber security aiming at teaching the crucial strategies to protect data from cyber threats, hackers and vulnerabilities. The speakers will explain various encryption techniques, providing the students with practical insights and hands-on knowledge to fortify digital defenses",
          speaker: "TBD",
          image: require("../assets/images/events/speaker.svg"),
          to: "/cyberseminar",
        },
        {
          id: 4,
          title: "All About API",
          description:
            "A comprehensive seminar on API basics and Postman tailored to equip participants with a solid understanding of API basics, including request-response mechanisms, methods, and their applications. Dive deep into practical sessions where you'll set up a project on Replit, design APIs employing every key method (GET, POST, PUT, DELETE), and master testing them using Postman.",
          speaker: "Arvind Srivastava and Siddhartha Mishra",
          image: require("../assets/images/speakers/postman.png"),
          to: "/postman",
        },
      ],
    };
  },
};
</script>
