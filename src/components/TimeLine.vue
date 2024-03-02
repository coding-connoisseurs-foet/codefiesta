<template>
  <div class="container text-white pb-5">
    <div class="row example-basic">
      <div class="col-md-12 p-5 example-title text-center">
        <h1 class="display-4 fw-bold">The Fiesta Timeline</h1>
        <hr>
      </div>
      <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul class="timeline m-0 p-0">
          <li class="position-relative timeline-item period">
            <div class="timeline-content">
              <h2 class="timeline-title">DAY 01</h2>
            </div>
          </li>
          <li class="position-relative timeline-item" v-for="(event, index) in events.day01" :key="index">
            <div class="lead">{{ event.time }}</div>
            <div class="timeline-marker"></div>
            <div class="timeline-content card m-2">
              <h3 class="timeline-title m-2">{{ event.name }}</h3>
              <p class="m-2">{{ event.description }}</p>
            </div>
          </li>
          <li class="position-relative timeline-item period">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h2 class="timeline-title">DAY 02</h2>
            </div>
          </li>
          <li class="position-relative timeline-item" v-for="(event, index) in events.day02" :key="index">
            <div class="lead">{{ event.time }}</div>
            <div class="timeline-marker"></div>
            <div class="timeline-content card m-2">
              <h3 class="timeline-title m-2">{{ event.name }}</h3>
              <p class="m-2">{{ event.description }}</p>
            </div>
          </li>
          <li class="position-relative timeline-item period">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h2 class="timeline-title">DAY 03</h2>
            </div>
          </li>
          <li class="position-relative timeline-item" v-for="(event, index) in events.day03" :key="index">
            <div class="lead">{{ event.time }}</div>
            <div class="timeline-marker"></div>
            <div class="timeline-content card m-2">
              <h3 class="timeline-title m-2">{{ event.name }}</h3>
              <p class="m-2">{{ event.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  color: white;
}

/*==================================
    TIMELINE
==================================*/
/*-- GENERAL STYLES
    ------------------------------*/
.timeline {
  line-height: 1.4em;
  list-style: none;
}

/*----- TIMELINE ITEM -----*/
.timeline-item {
  padding-left: 40px;
}

/*----- TIMELINE MARKER -----*/
.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
}

.timeline-marker:before {
  background: #FE8D41;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}

.timeline-marker:after {
  content: "";
  width: 3px;
  background: #CCD5DB;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}

.timeline-item:last-child .timeline-marker:after {
  content: none;
}

.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid #FE8D41;
}

/*----- TIMELINE CONTENT -----*/
.timeline-content {
  padding-bottom: 40px;
}

.timeline-content p:last-child {
  margin-bottom: 0;
}

/*----- TIMELINE PERIOD -----*/
.period {
  padding: 0;
}

.period .timeline-marker:before {
  background: transparent;
  content: "";
  width: 15px;
  height: auto;
  border: none;
  border-radius: 0;
  top: 0;
  bottom: 30px;
  position: absolute;
  border-top: 3px solid #CCD5DB;
  border-bottom: 3px solid #CCD5DB;
}

.period .timeline-marker:after {
  content: "";
  height: 32px;
  top: auto;
}

.period .timeline-content {
  padding: 40px 0 70px;
}

.period .timeline-title {
  margin: 0;
}
</style>

<script>
import events_schedule from '@/assets/data/events_schedule.json'

export default {
  name: "TimeShedule",
  data() {
    return {
      events: events_schedule
    };
  },
};
</script>