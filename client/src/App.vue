<template>
  <div id="app">
    <Header />
    <About />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Material+Icons|DM+Sans:400,500,700&display=swap');

#app {
  font-family: 'DM Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0,0,0,1);
}

body {
  margin: 0;
  height: 100%;
}
</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/views/About.vue';
export default {
  name: 'home',
  components: {
    Header,
    About
  }
}
</script>
