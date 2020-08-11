<template>
  <div class="refs">
    <a
      target="_blank"
      href="https://www.github.com/occloxium">
      <i class="fab fa-github"></i>
    </a>
    <a
      target="_blank"
      href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=TnpbwVwxTiyG5E-yqNBQLw">
      <i class="fab fa-spotify"></i>
    </a>
    <a
      class="icon--zoomoid"
      target="_blank"
      href="https://www.zoomoid.de/">
      <img src="https://www.zoomoid.de/favicon_black.png">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.refs {
  display: flex;
  margin-bottom: 64pt;
  a {
    flex-grow: 1;
    &:hover, &:active {
      opacity: 1;
    }
    opacity: 0.5;
    transition: opacity ease 0.2s;
    color: rgba(24,24,24,1);
    font-size: 3em;
    text-align: center;
    & > img {
      max-width: 1em;
      max-height: 1em;
    }
  }
  flex-wrap: wrap;
}
</style>
