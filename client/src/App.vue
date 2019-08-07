<template>
  <div id="app">
    <Header />
    <About />
  </div>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Material+Icons|DM+Sans:400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0,0,0,1);
}

body {
  & > * {
    font-family: inherit;
  }
  margin: 0;
  height: 100%;
}
</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/views/About.vue'
export default {
  name: 'home',
  components: {
    Header,
    About
  }
}
</script>
