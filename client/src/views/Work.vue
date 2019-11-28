<template>
  <div>
    <div class="full-width-container">
      <CaseStudies></CaseStudies>
    </div>
    <div class="full-width-container">
      <Videos></Videos>
    </div>
    <div class="limited-container">
      <ImageList></ImageList>
    </div>
  </div>
</template>

<script>
import { ImageList, Videos, CaseStudies } from '@/components';

export default {
  components: {
    ImageList,
    Videos,
    CaseStudies
  }
};
</script>

<style lang="scss" scoped>
.limited-container {
  max-width: 768px;
  margin: 0 auto;
  padding: 1em 2em;

}
.full-width-container {
  max-width: auto;
  width: 100%;
}

</style>
