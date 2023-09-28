<template>
  <main>
    <Transition>
      <HeaderView v-if="!isHome" :class="{'container-fluid px-3' : !isHome}"/>
    </Transition>
    <Transition>
      <router-view/>
    </Transition>
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

</style>

<script>
import HeaderView from "./components/HeaderView.vue";
export default {
  name: "App",
  computed : {
    isHome(){
      return this.$route.name == "home";
    }
  },
  components: {
    HeaderView
  }
};
</script>
