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
          <p > <span>Venue : </span>{{ event.venue }}</p>
          <p><span>Date : </span>{{ event.date }}</p>
          <p ><span>Time : </span>{{ event.time }}</p>
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
#events{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.btn {
  transition: 0.3s;
  width: 300px;
}


@media screen and (max-width:375px) {
  .btn{
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
          title: "Capture The Flag",
          description:
            "This competition comprises two divisions: Juniors and Seniors.",
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
