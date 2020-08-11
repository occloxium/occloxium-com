<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
html { font-family: 'Sora', sans-serif; font-weight: 500; }

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
  font-size: 13pt;
}

h1, h2, h3 {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: 0.25s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
