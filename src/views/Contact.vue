<template>
  <div>
    <div class="portrait"></div>
    <section class="container mx-auto pt-12 max-w-3xl px-8">
      <h1 class="text-5xl font-medium">Expertise</h1>
      <p class="font-medium tracking-tight">
        More than 4 years of experience with both front-end and back-end
        technology, as well as growing expertise with Kubernetes, Continous
        Deployment, and Cloud-native technologies. Current well-established
        tech-stacks include NodeJS + Vue/Angular, Python + Flask with MongoDB,
        PostgreSQL and other stateful backends.<br />
        I like to incorporate Docker and Containers into almost anything I do,
        hence I'm experienced in both building, maintaining, and deploying
        containers on small to medium scales using either
        docker-compose/swarm/stack or Kubernetes. The latter is of particular
        interest of me, as I'm currently deploying a bare-metal cluster.
        <br /><small class="mt-4 block leading-normal"
          >In fact, what you are reading right now is served as a built Vue app
          from an nginx:alpine container with 3-replica redudant deployment
          through an ingress-nginx in Kubernetes 1.18!</small
        >
      </p>
    </section>
    <section class="container mx-auto pt-12 max-w-3xl pb-12 px-8">
      <h1 class="text-5xl font-medium">Contact me</h1>
      <p class="font-medium">
        You can always reach me via e-mail at
        <a class="underline" :href="email.url">{{ email.label }}</a
        >, as well as through various social media platforms:
      </p>
      <socials></socials>
    </section>
  </div>
</template>

<script>
import Socials from "@/components/Socials.vue";

export default {
  components: {
    Socials,
  },
  data: () => ({
    email: {
      url: "mailto:alexander@bartolomey.me",
      label: "alexander@bartolomey.me",
    },
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
