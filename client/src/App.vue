<template>
  <div id="app">
    <Header />
    <router-view />
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
#nav a {
  display: block;
  font-weight: bold;
  color: #ffffff;
  flex-grow: 1;
  text-decoration: none;
  outline: none;
  &:hover, &:active {
    color: #42b983;
  }
}

#nav a i, #nav a span {
  display: block;
  text-align: center
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
  height: 100%;
}
</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
