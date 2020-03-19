<template>
  <div>
    <Intro></Intro>
    <About></About>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/views/Intro.vue';
import About from '@/views/About.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    About,
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500;700;800&display=swap');

html { font-family: 'Work Sans', sans-serif; }

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
