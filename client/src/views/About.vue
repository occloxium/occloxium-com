<template>
  <div id="about">
    <section class="limited-container">
      <div class="image">
        <img src="@/assets/alex.jpg">
      </div>
    </section>
    <section class="limited-container" id="refs">
      <a
        target="_blank"
        href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=TnpbwVwxTiyG5E-yqNBQLw">
        <i class="fab fa-spotify"></i>
      </a>
      <a
        target="_blank"
        href="https://www.github.com/occloxium">
        <i class="fab fa-github"></i>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/zoomoid">
        <i class="fab fa-instagram"></i>
      </a>
      <a
        target="_blank"
        href="https://www.soundcloud.com/zoomoid">
        <i class="fab fa-soundcloud"></i>
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ">
        <i class="fab fa-youtube"></i>
      </a>
      <a
        class="icon--zoomoid"
        target="_blank"
        href="https://www.zoomoid.de/">
        <img src="https://www.zoomoid.de/favicon.png" width="64" height="64">
      </a>
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
  width: 100%;
}
.image {
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
}
#refs {
  display: flex;
  margin-bottom: 64pt;
  a {
    flex-grow: 1;
    text-align: center;
    &:hover, &:active {
      opacity: 1;
    }
    opacity: 0.5;
    transition: opacity ease 0.2s;
    color: rgba(24,24,24,1);
    font-size: 64px;
    padding: 0 16px;
  }
}
</style>

<script>
import ImageList from '@/components/ImageList.vue'
import Videos from '@/components/Videos.vue'

export default {
  components: {
    ImageList,
    Videos
  }
}
</script>
