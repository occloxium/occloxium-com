<template>
  <div id="app">
    <nav class="flex">
      <li>
        <router-link to="/">About</router-link>
      </li>
      <li class="flex--span">
        <h1>Bartolomey</h1>
      </li>
      <li>
        <router-link to="/work">Work</router-link>
      </li>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  &--span {
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
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      &:hover, &:active {
        text-decoration: underline;
      }
    }
  }
}
</style>
