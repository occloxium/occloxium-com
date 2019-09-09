<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import {Header, Footer} from '@/components';

export default {
  name: 'CaseStudy',
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #efefef;
  min-height: 100vh;
  overflow-y: hidden;
}
</style>
