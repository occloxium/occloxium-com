<template>
  <div class="background">
    <Navigation></Navigation>
    <div class="wrapper">
      <section id="hiring">
        <h1>I'm available for hire!</h1>
        <p>More than 4 years of experience with both front-end and back-end technology, as well as growing expertise with
        Kubernetes, Continous Deployment, and Cloud-native technologies.</p>
        <p>Current well-established tech-stacks include NodeJS + VueJS/Angular, Python + Flask with MongoDB, PostgreSQL,
        or Redis Caches.</p>
        <p>I strive to incorporate Docker and Containers into almost anything I do, hence I'm experienced in both
        building, maintaining, and deploying containers on small to medium scales using either docker-compose/swarm/stack
        or Kubernetes. The latter is of particular interest of me, as I'm currently deploying a bare-metal cluster.
        <br/><small>In fact, what you are reading right now is served as a built VueJS app from an nginx:alpine
        container with 3-replica redudancy through an ingress-nginx deployment in Kubernetes 1.18!</small>
        </p>
      </section>
      <section id="contact">
        <h2>Contact me</h2>
        <p>You can always reach me via e-mail at <a href="mailto:alex@bartolomey.me">alex@bartolomey.me</a>, as well as
        through
        various social media platforms:</p>
        <SocialRefs></SocialRefs>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import {Navigation, Footer, SocialRefs} from '@/components';

export default {
  components: {
    Navigation,
    Footer,
    SocialRefs,
  }
};
</script>

<style lang="sass" scoped>
.background
    background: linear-gradient(180deg, #fff, #efefef)
.wrapper
  font-size: 18pt
  min-height: 100vh
  margin: 0 auto
  max-width: 769px
  padding: 1em 1em
  #hiring
    margin-top: 8em

  #contact
    margin-top: 4em
  h1
    font-size: 2.5em
  h2
    margin: 0
    font-size: 2em
  p
    line-height: 1.5
  small
    display: block
    margin-top: 1em
    font-size: 0.7em
  a
    color: inherit
</style>
