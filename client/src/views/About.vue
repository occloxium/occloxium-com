<template>
  <div id="about">
    <section class="limited-container">
      <div class="image">
        <img src="@/assets/alex.jpg">
      </div>
    </section>
    <div class="full-width-container">
      <Videos/>
    </div>
    <div class="limited-container">
      <ImageList/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.limited-container {
  max-width: 768px;
  margin: 0 auto;
  padding: 1em 2em;

}
.full-width-container {
  max-width: auto;
  width: 100vw;
}
.image {
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
}

.text {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  h3 {
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 3em
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    color: #222;

    a {
      border-bottom-color: #999;
      color: inherit;
    }
  }
}
</style>

<script>
import ImageList from '@/components/ImageList.vue'
import Videos from "@/components/Videos.vue"

export default {
  components: {
    ImageList,
    Videos
  }
}
</script>
