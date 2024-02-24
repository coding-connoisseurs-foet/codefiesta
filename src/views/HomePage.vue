<template>
  <div class="w-100 p-0 m-0" id="root">
    <div class="w-100 m-0 p-0 h-100">
      <div class="w-100 h-100">
        <div
          class="text-center d-flex flex-column align-items-center justify-content-center w-100 z-0 h-100"
        >
          <h4 class="text-white z-0" id="cf-tagline">
            The flagship coding festival of Lucknow
          </h4>
          <h1 id="cf-head" class="text-white">Code Fiesta</h1>
          <TimerVue event_date="2024-04-01 11:00" />
          <div id="main-announce" class="w-100">
            <a href="https://lu.ma/s1ah6f4l"
              class="btn btn-lg mt-2 btn-outline-light rounded-0 cf-register"
              ><span class="glowing-text">REGISTER NOW</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

#root{
  height: 85vh;
}
:root {
  --glow-color: #fff;
}

@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");

#cf-head {
  font-family: "Patua One", cursive;
  animation: text-flicker 4s linear infinite;
  text-transform: uppercase;
  font-size: 11vw;
  line-height: 0.7em;
  text-align: center;
  padding: 0 5px;
}

#cf-tagline {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 5px;
  font-size: 1.7vw;
  text-transform: uppercase;
  text-align: center;
  padding: 0 7px;
}

@keyframes slow {
  0% {
    opacity: 0%;
    filter: blur(10px);
  }

  100% {
    filter: blur(0);
  }
}

.cf-register {
  position: relative;
  color: var(--glow-color);
  cursor: pointer;
  border: 0.15em solid var(--glow-color);
  border-radius: 0.45em;
  background: none;
  perspective: 5rem;
  letter-spacing: 5px;
  width: 255px;
  display: block;
  margin: 0 auto;
  padding: 15px 0;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;
}

.cf-register::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: var(--glow-color);
  pointer-events: none;
}

.cf-register::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: var(--glow-color);
  box-shadow: 0 0 2em 0.2em var(--glow-color);
  transition: opacity 100ms linear;
}

.cf-register:hover {
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.cf-register:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.cf-register:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 0.1;
  }

  4% {
    opacity: 0.5;
  }

  19% {
    opacity: 0.5;
  }

  21% {
    opacity: 0.1;
  }

  23% {
    opacity: 1;
  }

  80% {
    opacity: 0.5;
  }

  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }

  20% {
    opacity: 1;
  }

  25% {
    opacity: 0.3;
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }

  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
}

/* --------------media-querry------------ */

@media screen and (max-width: 1080px) {
  #cf-head{
    font-size: 15vw;
  }
  #cf-tagline{
    font-size: 2.5vw;
  }
}
@media screen and (max-width: 700px) {
  #cf-head{
    font-size: 17vw;
  }
  #cf-tagline{
    font-size: 3vw;
  }
}

@media screen and (max-width: 465px) {
  #cf-tagline{
    font-size: 1em;
  }

  #cf-head{
    font-size: 4.6em;
    line-height: 1em;
  }
.cf-register{
  width: 70% !important;
}

#root{
  height: 80vh;
}
  
}



</style>

<script>
import TimerVue from "@/components/TimerVue.vue";
export default {
  name: "HomePage",
  components: {
    TimerVue,
  },
};
</script>
