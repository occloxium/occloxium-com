<template>
  <nav>
    <li>
      <h1>Bartolomey</h1>
    </li>
    <div class="spacer"></div>
    <li>
      <router-link to="/">About</router-link>
    </li>
    <li>
      <router-link to="/work">Work</router-link>
    </li>
    <li>
      <router-link to="/contact">Contact</router-link>
    </li>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss">
nav {
  display: flex;
  background: #ffffff;
  align-items: center;
  & .spacer {
    flex-grow: 1;
  }
  li {
    list-style: none;
    padding: 1em;
    h1 {
      margin: 0;
      text-align: center;
      text-transform: uppercase;
    }
    a {
      padding-left: 2pt;
      color: inherit;
      text-decoration: none;
      letter-spacing: 2pt;
      text-transform: uppercase;
      font-size: 0.8em;
      &:hover, &:active {
        border-bottom: solid 2px black;
      }
    }
  }
  @media only screen and (max-width: 450px){
    display: block;
    li {
      text-align: center;
    }
  }
}
</style>
