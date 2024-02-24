<template>
  <div id="countdown" style="letter-spacing: 5px" class="z-1">
    <div>
      <span class="cal">{{ days }}</span>
      <span class="cap"> Days</span>
    </div>
    <div>
      <span class="cal">{{ hours }}</span>
      <span class="cap"> Hours</span>
    </div>
    <div>
      <span class="cal">{{ minutes }}</span>
      <span class="cap"> Minutes</span>
    </div>
    <div>
      <span class="cal">{{ seconds }}</span>
      <span class="cap"> Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerVue",
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  },
  props: {
    event_date: String,
  },
  mounted() {
    this.countdown();
    setInterval(this.countdown, 1000);
  },
  methods: {
    countdown() {
      var current_date = new Date().getTime();
      var target_date = new Date(this.event_date).getTime();
      var seconds_left = (target_date - current_date) / 1000;

      this.days = this.pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      this.hours = this.pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      this.minutes = this.pad(parseInt(seconds_left / 60));
      this.seconds = this.pad(parseInt(seconds_left % 60));
    },
    pad(n) {
      return (n < 10 ? "0" : "") + n;
    },
  },
};
</script>

<style>

.cal{
  font-size: 2.6em;
  font-weight: 500;
}
.cap{
  font-size: 0.em;
  font-weight: 600;
}

#countdown {
  color: white;
  display: flex;
  margin: 25px 0;
  width: fit-content;
}
#countdown div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 9px;
}
#countdown div span:first-child {
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
}

/* --------------media-querry------------ */

@media screen and (max-width:430px){
  .cal{
    font-size: 1.7em;
  }
  #countdown{
    width: fit-content;
  }
  .cap{font-size: 0.85em;}

  #countdown div{
    margin: 0 4px;
  }
}
@media screen and (max-width:290px){
  .cal{
    font-size: 1.5em;
  }
  .cap{font-size: 0.7em;}

  #countdown div{
    margin: 0 3px;
  }
}
</style>
