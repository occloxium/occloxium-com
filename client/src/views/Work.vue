<template>
  <div class="background">
    <Navigation></Navigation>
    <div v-for="(e, i) in el" v-bind:key="i">
      <Showcase
        :index="i"
        :title="e.title"
        :body="e.body"
        :url="e.url"
        :img="e.img"
        :background="e.background"
      ></Showcase>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import {Showcase, Navigation, Footer} from '@/components';

export default {
  name: 'Work',
  components: {
    Showcase,
    Navigation,
    Footer,
  },
  data: () => ({
    el: [
      {
        title: 'Zoomoid',
        body: `
          Zoomoid is a young and aspiring artist from Aachen, Germany, who draws
          his inspiration from a variety of music to create songs he thinks are
          worth listening to even if he would personally never admit that. He strives to
          perfect his very own style with new things and ways to create music.
          Explore more of Zoomoid's music here:
          <a href="https://www.zoomoid.de/">https://www.zoomoid.de/</a>`,
        img: {
          url: '/img/zoomoid.png',
          external: false,
          tilted: false,
        },
        url: 'https://zoomoid.de',
        background: '/img/robert-keane-rlbG0p_nQOU-unsplash.jpg',
      },
      {
        title: 'demo-man',
        body: `demo-man is a cloud-native microservice architecture running in
          Kubernetes to provide a fully-automated upload and publishing of new
          demos. This way, new audio demos fresh out of the oven can easily be
          published and send in for review, while also providing gorgeous
          visuals and waveforms. Demo-man also uses a (very fast) version of
          wave-man. Checkout the demos at <a href="https://demo.zoomoid.de/">demo.zoomoid.de</a>!`,
        img: {
          url: '/img/demo-man.png',
          external: false,
          tilted: false,
        },
        url: 'https://demo.zoomoid.de/',
      },
      {
        title: 'wave-man',
        body: `wave-man generates visual waveform representation with Python + Flask
          + SVG. It can run in standalone mode and even has an HTTP server
          built-in to use in a microservice environment to query waveforms for
          provided audio.
          Find the project on Github: <a href="https://www.github.com/occloxium/wave-man/">
          github.com/occloxium/wave-man/</a>`,
        img: {
          url: '/img/wave-man.png',
          external: false,
          tilted: false,
        },
        url: 'https://www.github.com/occloxium/wave-man/',
        background: '/img/oscar-keys-10sTDZAj5sA-unsplash.jpg',
      },
      {
        title: 'aix-pizza-time',
        body: `<a href="https://github.com/aix-pizza-time/">aix-pizza-time</a> is a
          GitHub organisation and microservice architecture for a better Pizza
          Time experience. Together, we drive projects and apps that enhance
          convenience and schedulability of gatherings for making pizza.`,
        img: {
          url: '/img/pizza-time.png',
          external: false,
          tilted: true,
        },
        url: 'https://pizza.bartolomey.me/',
        background: '/img/mr-tt-xb0wLfZH9Zo-unsplash.jpg',
      },
      {
        title: 'Have I Been Stolen?',
        body: `have-i-been-stolen is a VueJS frontend + PWA implementing Material
          Design to view Velocity Bike History for the Aachen area and estimate
          if it was stolen, as this seems to be a problem.
          <br/>
          Try it out live here:
          <a href="https://haveibeenstolen.zoomoid.de/">
            haveibeenstolen.zoomoid.de</a>`,
        img: {
          url: '/img/hibs.png',
          external: false,
          tilted: false,
        },
        url: 'https://haveibeenstolen.zoomoid.de/',
        background: '/img/henry-co-9QAfsPuGFhs-unsplash.jpg',
      },
      {
        title: `<small>Case Study:<br /></small> Building &amp; Deploying LaTeX
          Documents`,
        body: `In this case study, we explore the feasiblity and applicability of
          deploying a build pipeline for LaTeX documents using GitOps and
          GitLab's CI/CD Runners in conjunction with an HTTP server to deliver
          artifacts to the user. Read more about the case study <a href="/case-study/seminar/">here</a>`,
        img: {
          url: '/img/case-study/seminar/page_2.svg',
          external: false,
          tilted: true,
        },
        url: '/case-study/seminar',
      }
    ]
  }),
};
</script>

<style lang="scss" scoped>
.background {
  background: linear-gradient(135deg, #90caf9, #fff59d);
}
</style>
