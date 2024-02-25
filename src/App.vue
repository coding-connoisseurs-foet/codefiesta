<template>
  <main :class="{ home: isHome }">
    <header-view />
    <router-view />
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.home {
  background: linear-gradient(#0000009c, #0000009c),
    url(./assets/images/places/rumi_darwaza.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skyline {
  background: linear-gradient(#0000009c, #0000009c), url(./assets/images/places/lucknow_illustration.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 85vh;
  background-attachment: fixed;
}
</style>

<script>
import HeaderView from "./components/HeaderView.vue";

export default {
  name: "App",
  computed: {
    isHome() {
      return this.$route.name == "home";
    },
  },
  components: { HeaderView },
};
</script>
