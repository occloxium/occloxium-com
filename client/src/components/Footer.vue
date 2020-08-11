<template>
  <footer>
    <div class="column">
      <h2 class="column__title">Navigation</h2>
      <router-link to="/">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="column">
      <h2 class="column__title">External Resources</h2>
      <div>
        <a href="https://zoomoid.de">zoomoid.de</a>
      </div>
      <div>
        <a href="https://haveibeenstolen.zoomoid.de">have-i-been-stolen</a>
        <a class="github-link" href="https://github.com/occloxium/have-i-been-stolen"><i class="fab fa-github"></i></a>
      </div>
      <div>
        <a href="https://demo.zoomoid.de/">demo-man</a>
        <a class="github-link" href="https://github.com/occloxium/demo-man"><i class="fab fa-github"></i></a>
      </div>
      <div>
        <a href="https://pizza.bartolomey.me">aix-pizza-time</a>
        <a class="github-link" href="https://github.com/aix-pizza-time"><i class="fab fa-github"></i></a>
      </div>
    </div>
    <div class="column">
      <h2 class="column__title">Socials</h2>
      <a href="https://github.com/occloxium">Github</a>
      <a href="https://git.rwth-aachen.de/zoomoid">RWTH GitLab</a>
      <a href="https://instagram.com/zoomoid">Instagram</a>
      <a href="https://soundcloud.com/zoomoid">Soundcloud</a>
      <a href="https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8?si=TnpbwVwxTiyG5E-yqNBQLw">Spotify</a>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
footer {
  background: #1a1a1a;
  padding: 2em 4em;
  display: flex;
  font-size: 9pt;
  .column {
    display: block;
    margin-right: 4em;
    h2 {
      color: #666;
      font-size: 1.2em;
      margin: 0;
    }
    a {
      display: block;
      color: #555;
      letter-spacing: 0.2pt;
      font-size: 1em;
      padding: 0.5em 0 0;
      text-decoration: none;
      &:hover, &:active {
        text-decoration: underline;
        color: #666;
      }
    }
    div {
      display: flex;
      a {
        margin-right: 4pt;
      }
    }
  }
  @media only screen and (max-width: 450px){
    display: block;
    .column {
      padding-top: 1em;
    }
  }
}
</style>
