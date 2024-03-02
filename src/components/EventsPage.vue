<template>
  <div class="event-page skyline">
    <div id="events">
      <div class="event-card my-3 text-white" v-for="(event, index) in events_info" :key="index">
        <div class="card-img">
          <img :src="EventImage(event.image)" alt="event" />
        </div>
        <div class="card-body">
          <h5>
            {{ event.title }}
          </h5>
          <p><span>Event Description : </span>{{ event.description }}</p>
          <p> <span>Speaker : </span>{{ event.speaker }}</p>
          <p> <span>Venue : </span>{{ event.venue }}</p>
          <p><span>Date : </span>{{ event.date }}</p>
          <p><span>Time : </span>{{ event.time }}</p>
          <router-link :to="event.to" class="btn btn-lg btn-outline-light my-3">View More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>

<script>
import events_info from '@/assets/data/events_info.json'

export default {
  data() {
    return {
      events_info: events_info
    };
  },
  methods: {
      EventImage(img) {
        if (img.length == 0) {
          return require("@/assets/images/events/codemesh.svg");
        }
        return require("@/assets/images/events/" + img);
      },
    },
};
</script>
