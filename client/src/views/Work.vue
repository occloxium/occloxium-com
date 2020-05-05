<template>
  <div class="wrapper">
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
  name: 'Work',
  components: {
    ImageList,
    Videos,
    CaseStudies
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  // margin-top: 2em;
}

.limited-container {
  // max-width: 768px;
  margin: 0 auto;
  padding: 1em 2em;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 80%
  }

}

.full-width-container {
  max-width: auto;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%
  }
}

</style>
