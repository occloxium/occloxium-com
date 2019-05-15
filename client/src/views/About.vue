<template>
  <div id="about">
    <section>
      <div class="image">
      <img src="https://cdn.occloxium.com/i/occloxium/alex.jpg">
    </div>
    <div class="text">
      <h3 class="">
        About Me
      </h3>
      <p class="">
        I currently study Computer Science at RWTH Aachen University, Germany.
        Trying to link my field of studies with my personal interests, I build
        web pages and backend architectures that look beautiful on the outside
        while solving any problem or need I'm facing at that time. Have a look a
        at <a href="https://hub.occloxium.com/"
        target="_blank">https://hub.occloxium.com/</a> for demos.
      </p>
      <p>
        I specialize in application of Docker and Container Orchestration with
        Continuous Deployment. Using microservices to build large-scale
        platforms is something I'm actively participating in. If you are
        interested in working with me, hit me up via e-mail.
      </p>
      <p class="">
        With the rest of the time, i pursue other artistic projects. Sometimes I
        do <a href="/#/work">motion graphics</a>.
      </p>
      <p class="">
        Under the alias of
        <a href="https://www.zoomoid.de" target="_blank">zoomoid</a>, I produce electronic music, crawling
        my way through the BPM scale. You can support my by streaming or buying
        my music, but you may also just download it for free from my website, no
        strings attached. Everything around that music project is also
        completely self-made, stickers, cover art, website etc.
      </p>
    </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#about {
  margin: 0 auto;
  padding: 1em 2em;
  background: rgba(231,231,231,1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  max-width: 768px;
}
.image {
  img {
    max-width: 450px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 24px auto;
    display: block;
  }
}

.text {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  h3 {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 2em
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
// @ is an alias to /src
</script>
