<template>
<div>
  <div class="embed">
    <iframe src="https://player.vimeo.com/video/263726213" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="embed">
    <iframe src="https://www.youtube.com/embed/LG7J5D6n78U" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="embed">
    <iframe src="https://www.youtube.com/embed/aoDXE9Wol0A" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="embed">
    <iframe src="https://www.youtube.com/embed/lBmZLseIHGw" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.embed {
  width: 100%;
  position: relative;
  margin: 48px 0;
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
</style>
