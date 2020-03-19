<template>
<div>
  <!-- <div class="shrink-wrapper">
    <h1>zoomoid - Wild World</h1>
    <div class="embed">
      <iframe src="https://player.vimeo.com/video/263726213" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <div class="shrink-wrapper">
    <h1>zoomoid - Head In The Clouds</h1>
    <div class="embed">
      <iframe src="https://www.youtube.com/embed/lBmZLseIHGw" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div> -->
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.shrink-wrapper {

  margin: 0 auto;
}
.embed {
  display: block;
  width: 100%;
  position: relative;
  margin: 48px auto;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
}
h1 {
  letter-spacing: -0.04em;
  font-size: 32pt;
  max-width: 90%;
  margin: 0 auto;
  padding: 0;
}
</style>
