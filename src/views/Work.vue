<template>
  <div>
    <article
      class="flex flex-col justify-center mx-auto py-32"
      :class="{
        'text-white': i % 2 === 1,
        'bg-black': i % 2 === 1,
      }"
      v-for="(e, i) in el"
      v-bind:key="i"
    >
      <div class="container p-8 md:grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div class="flex flex-col justify-center mb-12 md:mb-0">
          <img
            :src="e.img.url"
            class="w-full max-w-xs"
            :style="{
              filter: e.invert ? 'invert(1)' : 'none',
            }"
          />
        </div>
        <div>
          <h1 class="text-4xl font-medium tracking-tighter leading-none mb-4">
            {{ e.title }}
          </h1>
          <p class="tracking-tight font-medium leading-normal text-lg">
            {{ e.body }}
          </p>
          <a
            :href="e.link"
            class="block py-4 font-medium leading-normal tracking-tight underline"
          >
            {{ e.link }}
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {},
  data: () => ({
    el: [
      {
        title: "Zoomoid",
        body: `
          Zoomoid is a young and aspiring artist from Aachen, Germany, who draws
          his inspiration from a variety of music to create songs he thinks are
          worth listening to even if he would personally never admit that. He strives to
          perfect his very own style with new things and ways to create music.
          Explore more of Zoomoid's music:`,
        link: "https://www.zoomoid.de/",
        img: {
          url: "/img/zoomoid.png",
        },
        url: "https://zoomoid.de",
      },
      {
        title: "demo-man",
        body: `demo-man is a cloud-native microservice architecture running in
          Kubernetes to provide a fully-automated upload and publishing of new
          demos. This way, new audio demos fresh out of the oven can easily be
          published and send in for review, while also providing gorgeous
          visuals and waveforms. Demo-man also uses a (very fast) version of
          wave-man. Check out the demos!`,
        link: "https://demo.zoomoid.de/",
        img: {
          url: "/img/demo-man.png",
        },
        invert: true,
        url: "https://demo.zoomoid.de/",
      },
      {
        title: "wave-man",
        body: `wave-man generates visual waveform representation with Python + Flask
          + SVG. It can run in standalone mode and even has an HTTP server
          built-in to use in a microservice environment to query waveforms for
          provided audio. Find the project on Github:`,
        link: "https://www.github.com/occloxium/wave-man/",
        img: {
          url: "/img/wave-man.png",
        },
        url: "https://www.github.com/occloxium/wave-man/",
        background: "/img/oscar-keys-10sTDZAj5sA-unsplash.jpg",
      },
      {
        title: "aix-pizza-time",
        body: `aix-pizza-time is a GitHub organisation and microservice architecture for a better Pizza
          Time experience. Together, we drive projects and apps that enhance
          convenience and schedulability of gatherings for making pizza.`,
        img: {
          url: "/img/pizza-time.svg",
        },
        link: "https://github.com/aix-pizza-time/",
        url: "https://pizza.bartolomey.me/",
      },
      {
        title: "have i been stolen?",
        body: `have-i-been-stolen is a VueJS frontend + PWA implementing Material
          Design to view Velocity Bike History for the Aachen area and estimate
          if it was stolen, as this seems to be a problem.
          Try it out live!`,
        link: "https://haveibeenstolen.bartolomey.me/",
        img: {
          url: "/img/hibs.png",
        },
        url: "https://haveibeenstolen.bartolomey.me/",
        background: "/img/henry-co-9QAfsPuGFhs-unsplash.jpg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
