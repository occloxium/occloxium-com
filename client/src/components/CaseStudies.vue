<template>
  <div class="outer">
    <div class="box" id="zoomoid">
      <div class="left-column">
        <h1>Zoomoid</h1>
        <p>
          Zoomoid is a young, aspiring artist from Aachen, Germany, who draws
          his inspiration from a variety of music to create songs he thinks are
          worth listening to even if he would personally never admit that. He
          makes music to escape the grey world of computer code he's studying
          whenever he can and allows himself to. Combining vast knowledge
          theoretically and a good portion of practical intuition, he strives to
          perfect his very own style with new things and ways to create music.
          <br>
          Explore more of Zoomoid's music here:<br>
          <a href="https://www.zoomoid.de/">https://www.zoomoid.de/</a>
        </p>
      </div>
      <div class="right-column">
        <a target="_blank" href="https://www.zoomoid.de/"
          ><div
            :style="{ 'background-image': 'url(https://www.zoomo.id/favicon_white.png)' }"
            class="inner"
          ></div>
        </a>
      </div>
    </div>

    <div class="box" id="demo-man">
      <div class="left-column">
        <a target="_blank" href="https://demo.zoomoid.de/"
          ><div
            :style="{ 'background-image': `url(${require('@/assets/demo-man.png')})` }"
            class="inner"
          ></div
        ></a>
      </div>
      <div class="right-column">
        <h1>Demo Man</h1>
        <p>
          Demo Man is a container-native microservice architecture running in
          Kubernetes to provide a fully-automated upload and publishing of new
          demos. This way, new files fresh out of the oven can easily be
          published and send in for review, while also providing gorgeous
          visuals and waveforms. Demo Man uses WaveMan.
        </p>
      </div>
    </div>
    <div class="box" id="wave-man">
      <div class="left-column">
        <h1>Wave Man</h1>
        <p>
          WaveMan generates visual waveform representation with Python + LibRosa
          + CairoSVG. It can run in standalone mode and even has an HTTP server
          built-in to use in a microservice environment to query waveforms for
          provided audio. <br />
          Find the project on Github: <br /><a
            href="https://www.github.com/occloxium/wave-man/"
            >https://www.github.com/occloxium/wave-man/</a
          >
        </p>
      </div>
      <div class="right-column">
        <div
          :style="{ 'background-image': `url(${require('@/assets/wave-man.svg')})` }"
          class="inner"
        ></div>
      </div>
    </div>
    <div class="box" id="pizza-time">
      <div class="left-column">
        <a target="_blank" href="https://pizza.bartolomey.me/">
          <div
            :style="{ 'background-image': `url(${require('@/assets/pizza-time.png')})` }"
            class="inner"
          ></div>
        </a>
      </div>
      <div class="right-column">
        <h1>Pizza Time! 🍕</h1>
        <p>
          <a href="https://github.com/aix-pizza-time/">aix-pizza-time</a> is a
          GitHub organisation and microservice architecture for a better Pizza
          Time experience. Together, we drive projects and apps that enhance
          convenience and schedulability of gatherings for making pizza.
        </p>
      </div>
    </div>

    <div class="box" id="have-i-been-stolen">
      <div class="left-column">
        <h1>Have I Been Stolen?</h1>
        <p>
          have-i-been-stolen is a VueJS frontend + PWA implementing Material
          Design to view Velocity Bike History for the Aachen area and estimate
          if it was stolen, as this seems to be a problem.
          <br />
          Try it out live here: <br />
          <a href="https://haveibeenstolen.zoomoid.de/"
            >https://haveibeenstolen.zoomoid.de/</a
          >
        </p>
      </div>
      <div class="right-column">
        <a target="_blank" href="https://haveibeenstolen.zoomoid.de/"
          ><div
            :style="{
              'background-image': `url(${require('@/assets/have-i-been-stolen.png')})`
            }"
            class="inner"
          ></div
        ></a>
      </div>
    </div>

    <div class="box" id="docker-latexmk">
      <div class="left-column">
        <router-link to="/case-study/seminar"
          ><div
            :style="{ 'background-image': 'url(https://cdn.occloxium.com/i/occloxium/case-study/seminar/page_2.svg)' }"
            class="inner"
          ></div
        ></router-link>
      </div>
      <div class="right-column">
        <h1>
          <small>Case Study:<br /></small> Building &amp; Deploying LaTeX
          Documents
        </h1>
        <p>
          In this case study, we explore the feasiblity and applicability of
          deploying a build pipeline for LaTeX documents using GitOps and
          GitLab's CI/CD Runners in conjunction with an HTTP server to deliver
          artifacts to the user.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
.box {
  margin: 0 0;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr;

  display: grid;
  position: relative;
  align-items: center;
  .left-column {
    h1,
    p {
      text-align: right;
      padding-left: 20%;
    }
    padding-left: 2em;
    padding-right: 1em;
  }
  .right-column {
    h1,
    p {
      text-align: left;
      padding-right: 20%;
    }
    padding-left: 1em;
    padding-right: 2em;
  }
  .left-column,
  .right-column {
    position: relative;
  }
  .inner {
    border-radius: 6px;
    // box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12) !important;
    height: 640px;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 2em;
    font-weight: normal;
    letter-spacing: -0.02em;
    line-height: 1.5;
  }
}

@media screen and (max-width: 1024px) {
  .box {
    display: flex;
    flex-direction: column;
    width: 100%;
    .left-column, .right-column {
      padding: 1em;
      height: auto !important;
      width: 90%;
      h1, p {
        text-align: left !important;
        padding: 0;
      }
      h1 {
        font-size: 2.5em;
      }
      p {
        font-size: 1.5em;
      }
    }
    .inner {
      background-size: contain !important;
      margin: 1em;
      min-height: 640px;
    }
  }
  #zoomoid, #wave-man, #have-i-been-stolen {
    flex-direction: column-reverse;
  }
}

#demo-man {
  background: #f58b44;
  & .left-column {
    height: 100vh;
    & .inner {
      height: 100%;
      background-size: auto 100%;
      background-position: center bottom
    }
  }
}
#wave-man {
  & .right-column {
    & .inner {
      background-size: 80%;
      background-position: center center;
    }
  }
}
#zoomoid {
  background: linear-gradient(30deg, rgb(6, 11, 32), rgb(24, 32, 42));
  color: #ffffff;
  & .right-column {
    & .inner {
      background-size: 128px 128px !important;
      background-position: center center
    }
  }
}
#pizza-time {
  $dark_green: darken(#1b9a59, 0.2);
  background-image: linear-gradient(
    110deg,
    #ffffff 0%,
    #ffffff 54.99%,
    #1b9a59 55%,
    $dark_green 100%
  );
  background-size: 100% auto;
  & .left-column {
    height: 100vh;
    & .inner {
      height: 100%;
      background-size: auto 80%;
      background-position-x: 55%;
      background-position-y: bottom;
    }
  }
  & .right-column {
    h1,
    p {
      padding-left: 5%;
    }
  }
}
#have-i-been-stolen {
  background: #ffffff;
  & .right-column {
    height: 100vh;
    & .inner {
      height: 100%;
      background-size: auto 80%;
      background-position: center bottom;
    }
  }
}
#docker-latexmk {
  background-color: #ffd600;
  & .left-column {
    height: 100vh;
    .inner {
      height: 100%;
      background-size: 80%;
      background-position: center center;
    }
  }
}
</style>
