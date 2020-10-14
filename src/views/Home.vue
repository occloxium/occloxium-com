<template>
  <div>
    <div class="container mx-auto px-8 max-w-3xl">
      <section class="mt-16 md:mt-6 mb-6">
        <h1
          class="md:text-4xl lg:text-6xl text-4xl font-semibold tracking-tight leading-tight"
        >
          <b>Alexander Bartolomey</b> is a Frontend Web Developer, passionate containerizer, Kubernetes enthusiast, Musician &amp; Pizza Lover.
        </h1>
      </section>
      <section>
        <p class="tracking-tight font-medium text-lg md:text-2xl lg:text-4xl">
          I'm a master's student of Computer Science at RWTH Aachen University,
          Germany, with a focus on both automation and orchestration of modern
          software deployment using containers and Kubernetes. Over the course
          of the years, I started a number of projects, some of which you can
          find more about
          <router-link class="underline" to="/work">here</router-link>.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    socials: [
      {
        label: "GitHub",
        url: "https://www.github.com/occloxium",
        icon: {
          prefix: "fab",
          key: "fa-github",
        },
      },
      {
        label: "Spotify",
        url: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
        icon: {
          prefix: "fab",
          key: "fa-spotify",
        },
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/zoomoid",
        icon: {
          prefix: "fab",
          key: "fa-instagram",
        },
      },
      {
        label: "Soundcloud",
        url: "https://www.soundcloud.com/zoomoid",
        icon: {
          prefix: "fab",
          key: "fa-soundcloud",
        },
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ",
        icon: {
          prefix: "fab",
          key: "fa-youtube",
        },
      },
      {
        label: "Zoomoid",
        url: "https://www.zoomoid.de/",
        img: {
          url: "https://www.zoomoid.de/favicon_black.png",
        },
      },
    ],
  }),
};
</script>

<style lang="sass" scoped>
.portrait
  background-image: url(/img/alex.jpg)
  background-position: 40% 15%
  width: 100%
  height: 500px
  max-height: 50vh
  background-size: cover
</style>
