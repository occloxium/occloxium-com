<template>
  <div id="app" class="flex flex-col">
    <Navigation></Navigation>
    <div class="flex-grow">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
html {
  font-family: nimbus-sans, sans-serif;
  font-weight: 400;
  font-variant: common-ligatures;
  font-size: 16pt;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: 0.25s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
