<template>
  <article>
    <div class="box__background" :style="this.bg"></div>
    <div class="box__wrapper" :class="[this.img.tilted ? 'is-tilted' : '']">
      <template v-if="index % 2 === 0" class="left">
        <!-- even elements: text left, image right -->
        <div class="column column--left column--text">
          <h1 v-html="title"></h1>
          <p v-html="body"></p>
        </div>
        <div class="column column--right column--image">
          <a target="_blank" :href="url">
            <img :src="this.img.url"/>
          </a>
        </div>
      </template>
      <template v-else class="right">
        <!-- odd elements: image left, text right -->
        <div class="column column--left column--image">
          <a target="_blank" :href="url">
            <img :src="this.img.url"/>
          </a>
        </div>
        <div class="column column--right column--text">
          <h1 v-html="title"></h1>
          <p v-html="body"></p>
        </div>
      </template>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: -1,
    },
    img: {
      type: Object,
      default: () => ({
        url: '',
        external: true,
        tilted: false,
      }),
    },
    background: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  },
  computed: {
    bg() {
      if (this.background) {
        return {
          backgroundImage: `url(${this.background})`
        };
      } else {
        return {
          background: 'none'
        };
      }
    }
  }
};
</script>

<style lang="scss">
article {
  min-height: 100vh;
  padding-top: 20vh;
  position: relative;
  overflow-x: hidden;
  .box__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    opacity: .5;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      overflow-x: hidden;
      backdrop-filter: grayscale(50%) brightness(130%) contrast(70%);
    }
  }
  .box__wrapper {
    position: relative;
    z-index: 3;
    backdrop-filter: blur(25px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
    grid-template-columns: 1fr 1fr;
    display: grid;
    position: relative;
    align-items: center;
    border-radius: 1em;
    min-height: 60vh;
    padding: 2em 2%;
    margin: 0 auto;
    // color: white;
    width: 95%;
    max-width: 1500px;
    @media only screen and (max-width: 1024px){
      grid-template-columns: 1fr;
    }
  }
  .column {
    color: black;
    padding: 0 0.5em;
    &.column--text, &.column--image {
      max-width: 768px;
    }
    &--text {
      p {
        font-size: 1.2em;
        line-height: 1.5;
        a {
          font-weight: bold;
          color: inherit;
        }
      }
      h1 {
        font-size: 3em;
        margin: 0;
      }
    }
    &--image {
      a {
        display: block;
        img {
          margin: 0 auto;
          display: block;
          border-radius: 6px;
          width: 80%;
        }
      }
    }
  }
  &.is-tilted {
    .column--left {
      a {
        perspective-origin: left;
        perspective: 1500px;
        img {
          transform-style: preserve-3d;
          transform: rotateY(5deg);
          image-rendering: auto;
        }
      }
    }
    .column--right {
      a {
        perspective-origin: right;
        perspective: 1500px;
        img {
          transform-style: preserve-3d;
          transform: rotateY(-5deg);
          image-rendering: auto;
        }
      }
    }
  }
}

</style>
