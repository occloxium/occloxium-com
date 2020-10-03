<template>
  <div>
    <div class="portrait"></div>
    <div class="container mx-auto px-8 max-w-3xl">
      <section class="mt-12 mb-12">
        <h1 class="md:text-5xl text-3xl font-medium leading-none tracking-tight">
          Alexander Bartolomey is a Containerizer, Kubernetes Enthusiast, YAML
          Engineer, Musician &amp; Pizza Lover.
        </h1>
      </section>
      <section class="mb-12">
        <p class="tracking-tight font-medium text-lg">
          I'm a master's student of Computer Science at RWTH Aachen University,
          Germany, with a focus on both automation and orchestration of modern
          software deployment using containers and Kubernetes. Over the course
          of the years, I started a number of projects, some of which you can
          find more about
          <router-link class="underline" to="/work"
            >here</router-link
          >.
        </p>
      </section>
      <section class="mb-12">
        <div class="social-nav flex justify-around">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="norefer"
            class="block opacity-50 hover:opacity-100"
          >
            <template v-if="s.icon">
              <i :class="[s.icon.prefix, s.icon.key]" class="text-2xl"></i>
            </template>
            <template v-if="s.img">
              <img class="h-6" :src="s.img.url" />
            </template>
          </a>
        </div>
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
  filter: grayscale(1)
  transition: filter 0.2s ease
  &:hover, &:active
    filter: grayscale(0)
</style>
