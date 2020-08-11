<template>
  <div class="wrapper">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { Footer } from '@/components';

export default {
  name: 'CaseStudy',
  components: {
    Footer,
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
