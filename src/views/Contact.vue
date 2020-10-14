<template>
  <div>
    <section class="container mx-auto pt-12 max-w-3xl px-8">
      <img
        src="/img/alex.jpg"
        class="rounded-lg mb-6"
        alt="Portrait of Alexander Bartolomey"
      />
      <h1 class="text-3xl lg:text-5xl font-bold leading-none mb-4">Expertise &amp; Profession</h1>
      <p class="tracking-tight font-medium text-lg md:text-2xl lg:text-4xl">
        I bring more than 4 years of experience with both front-end and back-end
        technology, vast expertise with <b class="font-semibold">Kubernetes</b>,
        CI/CD, and cloud-native technologies.
      </p><p class="tracking-tight font-medium text-lg md:text-2xl lg:text-4xl">
        I build apps and services mostly
        in <b>NodeJS</b> with <b>Vue/Nuxt</b> featuring PostgreSQL, MongoDB, Redis and most other
        modern stateful backends.
      </p><p class="tracking-tight font-medium text-lg md:text-2xl lg:text-4xl">
        I'm an excellent addition to your small team of developers and infrastructure engineers if incorporating
        modern patterns
      </p>
    </section>
    <section class="container mx-auto pt-12 max-w-3xl pb-12 px-8">
      <h1 class="text-3xl lg:text-5xl font-bold">Contact me</h1>
      <p class="tracking-tight font-medium text-lg md:text-2xl lg:text-4xl">
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
p
  @apply mb-4
</style>
