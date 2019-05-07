<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">
        <i class="material-icons">
          face
        </i>
        <span>About</span></router-link>
      <router-link to="/work">
        <i class="material-icons">
          work
        </i>
        <span>Work</span></router-link>
      <router-link to="/contact">
        <i class="material-icons">
          group
        </i>
        <span>Contact</span></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Material+Icons|Major+Mono+Display|Poppins:300|Work+Sans:600');

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(21,21,21,1);
}
#nav {
  max-width: 768px;
  margin: 0 auto;
  padding: 30px;
  display: flex
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
  background: rgba(21,21,21,1);
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
