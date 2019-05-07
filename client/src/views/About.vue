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
        I currently study Computer Science at RWTH Aachen University, Germany, while compensating with
        a lot of 3D art and sketches as well
        as music production for the lack of creativity and expressiveness associated with studying a rather
        theoretical
        field.
      </p>
      <p class="">
        With my rare free time, I contribute to several open-source projects, including a few web
        projects and a
        <a href="https://github.com/occloxium/Monoid">software synthesizer</a>.
      </p>
      <p class="">
        I am doing a series of 3D renderings where I'm creating a new one each day. Some might call
        this
        <a href="https://www.instagram.com/beeple_crap/" target="_blank">"Everydays"</a> but since they
        finish infrequently, I prefer to call them
        <a href="https://www.instagram.com/occloxium/" target="_blank">"Anydays"</a>.
      </p>
      <p class="">
        Under the alias of
        <a href="https://www.zoomoid.de" target="_blank">zoomoid</a>, I produce electronic music, crawling
        my way through the BPM scale. I've recently produced a complete album, available on all trending <a
          href="https://open.spotify.com/album/2zF1wOwINENOR1fTGLqBEF?si=RlgSYU2cQwy3pn9BN0Y9Fw" target="_blank">platforms
          for streaming</a> and, what I would be immensely grateful for, purchase &ndash;
        but also to download for free, as with everything I do.
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
