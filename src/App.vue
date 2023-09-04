<template>
  <HeaderView/>
  <div class="background-image"></div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderView from './components/HeaderView.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background-image {
    background-image: url(@/assets/bg-option-2.jpg);
    background-position: 50%;
    background-size: cover;
    height: 100vh;
    width: 100%;
    filter: blur(3px);
}
</style>
