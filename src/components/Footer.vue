<template>
  <footer class="bg-black text-white text-xs md:px-8 p-4">
    <div class="container mx-auto justify-between md:flex py-4">
      <div class="external mb-4 md:mb-0">
        <h2 class="text-sm font-medium">Navigation</h2>
        <router-link
          v-for="l in internal"
          :key="l.label"
          :to="l.route"
          class="block font-medium opacity-50 hover:opacity-100"
          >{{ l.label }}</router-link
        >
      </div>
      <div class="external mb-4 md:mb-0">
        <h2 class="text-sm font-medium">External Resources</h2>
        <div v-for="l in external" :key="l.label" class="opacity-50 font-medium hover:opacity-100">
          <a :href="l.route">{{ l.label }}</a>
          <a v-if="l.github" :href="l.github.url" class="ml-2">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div class="socials md:text-right">
        <h2 class="text-sm font-medium">Socials</h2>
        <a class="block opacity-50 font-medium hover:opacity-100" v-for="s in socials" :key="s.label" :href="s.route">
          {{ s.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    internal: [
      {
        route: "/",
        label: "About",
      },
      {
        route: "/projects",
        label: "Projects",
      },
      {
        route: "/work",
        label: "Work",
      },
      {
        route: "/Contact",
        label: "Contact",
      },
    ],
    external: [
      {
        route: "https://www.zoomoid.de",
        label: "zoomoid.de",
      },
      {
        route: "https://haveibeenstolen.bartolomey.me",
        label: "have-i-been-stolen",
        github: {
          url: "https://github.com/occloxium/have-i-been-stolen",
        },
      },
      {
        route: "https://demo.zoomoid.de",
        label: "demo-man",
        github: {
          url: "https://github.com/occloxium/demo-man",
        },
      },
      {
        route: "https://pizza.bartolomey.me",
        label: "aix-pizza-time",
        github: {
          url: "https://github.com/aix-pizza-time",
        },
      },
    ],
    socials: [
      {
        route: "https://github.com/occloxium",
        label: "Github",
      },
      {
        route: "https://git.rwth-aachen.de/zoomoid",
        label: "RWTH GitLab",
      },
      {
        route: "https://instagram.com/zoomoid",
        label: "Instagram",
      },
      {
        route: "https://soundcloud.com/zoomoid",
        label: "Soundcloud",
      },
      {
        route: "https://open.spotify.com/artist/6RRD9ulVsLuDIqFzuFvSL8",
        label: "Spotify",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
