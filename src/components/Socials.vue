<template>
  <div class="social-nav flex justify-around py-8">
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
</template>

<script>
export default {
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

<style></style>
