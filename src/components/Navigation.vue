<template>
  <div>
    <div class="desktop bg-black">
      <nav
        class="container mx-auto hidden md:flex items-center justify-around py-4"
      >
        <li
          v-for="link in links"
          :key="link.label"
          class="list-none text-center md:text-left font-medium text-white md:py-0 py-2"
        >
          <router-link :to="link.to">{{ link.label }}</router-link>
        </li>
      </nav>
    </div>
    <div class="mobile relative">
      <button
        @click="show = true"
        class="pl-4 pt-4 absolute top-0 left-0 z-10 md:hidden"
      >
        <i class="material-icons">menu</i>
      </button>
      <transition name="slide">
        <nav
          v-if="show"
          :class="{ hidden: !show }"
          class="container mx-auto md:hidden bg-black z-20 fixed top-0"
        >
          <button
            @click="show = false"
            class="absolute top-0 right-0 pr-4 pt-4 text-white focus:outline-none"
          >
            <i class="material-icons">close</i>
          </button>
          <div class="py-4 px-4">
            <li
              v-for="link in links"
              :key="link.label"
              class="list-none ml-4 text-4xl md:text-left font-medium text-white mb-4"
              @click="show = false"
            >
              <router-link :to="link.to">{{ link.label }}</router-link>
            </li>
          </div>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    links: [
      {
        to: "/",
        label: "About",
      },
      {
        to: "/work",
        label: "Work",
      },
      {
        to: "/contact",
        label: "Contact",
      },
    ],
  }),
};
</script>

<style lang="scss">
@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

.slide-enter-active {
  animation: slide 0.2s ease forwards normal;
}
.slide-leave-active {
  animation: slide 0.2s ease backwards reverse;
}

li {
  a {
    &:hover,
    &:active {
      @apply border-white;
      border-bottom: solid 2px;
    }
  }
}
.mobile {
  nav {
    transition: transform 0.2s ease;
    height: 100vh;
    width: 100vw;
  }
  button {
    outline: none !important;
  }
}
</style>
