<template>
  <div class="event-page skyline">
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
          <p><span>Venue : </span>{{ event.venue }}</p>
          <p><span>Date : </span>{{ event.date }}</p>
          <p><span>Time : </span>{{ event.time }}</p>
          <router-link
            :to="event.to"
            class="btn btn-outline-light rounded-0 my-3"
            >View More</router-link
          >
        </div>
      </div>
    </div>
    <div class="end"></div>
  </div>
</template>

<style scoped>
#events {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

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
          title: "Code Mesh",
          description:
            "This event is a pattern-recognition contest. Here, the participants will have to write the program code for the patterns given to them.",
          venue: "Seminar Hall, FoET, University of Lucknow (Second Campus)",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/codemesh.svg"),
          to: "/codemesh",
        },
        {
          id: 2,
          title: "Code-Flict",
          description:
            "This event is a competitive programming contest. Here, the participant will have to solve the given questions by writing optimised and efficient program codes.",
          Venue: "Seminar Hall, FoET, University of Lucknow (Second Campus)",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/cp.svg"),
          to: "/codeflict",
        },
        {
          id: 3,
          title: "Bug Thug",
          description:
            "This event is a debugging contest. Here, the participant will have to debug a program code by filling in the missing syntax and logic such that the program becomes functional and runs successfully, without any errors.",
          Venue: "Seminar Hall, FoET, University of Lucknow (Second Campus)",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/bug.svg"),
          to: "/bugthug",
        },
        {
          id: 4,
          title: "Meeme Neeti",
          description:
            "This event is a meme-making contest. Here, the participant will get a chance to showcase their creative skills by making a tech-related meme.",
          Venue: "Seminar Hall, FoET, University of Lucknow (Second Campus)",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/meme.svg"),
          to: "/memeneeti",
        },
        {
          id: 5,
          title: "Byte Battle",
          description:
            "This event is a technical quiz and is a team-based competition. Here, the team will have to answer technical questions in a series of rounds, each having its own constraints, based on which the winners will be decided.",
          Venue: "TBD",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/quiz.svg"),
          to: "/bytebattle",
        },
        {
          id: 6,
          title: "Reverse Engineering",
          description:
            "In this event, participants will undertake the challenge of reverse engineering an executable file. They will be tasked with writing code to replicate the functionality of the executable without any additional description of the program.",
          Venue: "TBD",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/reverse.svg"),
          to: "/reverseengin",
        },
        {
          id: 7,
          title: "Design Masters-The Competition",
          description:
            "The seminar on UI/UX Development will be followed by a competition on the same to let the participants showcase their creativity into designing responsive and interactive user interfaces and give them a good practise of all that they've learnt.",
          Venue: "TBD",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/design.svg"),
          to: "/designmaster",
        },
        {
          id: 8,
          title: "Capture The Flag",
          description:
            "The seminar on cyber security will be followed by a competition on the same in which participants will attempt to find text strings called 'flags', that will be secretly hidden in purposefully-vulnerable programs or websites which would help them practice and develop computer security skills.",
          Venue: "TBD",
          date: "TBD",
          time: "TBD",
          image: require("../assets/images/events/flag.svg"),
          to: "/ctflag",
        },
      ],
    };
  },
};
</script>
