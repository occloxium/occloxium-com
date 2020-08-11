<template>
  <div id="about">
    <Navigation></Navigation>
    <header>
      <h1>
        Alexander Bartolomey is a <br/>
        Containerizer,<br/>
        Kubernetes Enthusiast,<br/>
        YAML Engineer,<br/>
        Musician &amp; Pizza Lover.
      </h1>
    </header>
    <section>
      <div class="image">
        <img src="@/assets/alex.jpg">
      </div>
    </section>
    <section class="container">
      <div class="about-me">
        <h1>About Me</h1>
        <p>
          I'm a master's student of Computer Science at RWTH Aachen University, Germany, with a focus on both automation and orchestration
          of modern software deployment using containers and Kubernetes.
        </p>
        <p>
          Over the course of the years, I started a number of projects, some of which you can find more about
          <router-link to="/work">here</router-link>.
        </p>
      </div>
    </section>
    <section>
      <SocialRefs></SocialRefs>
    </section>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
section, header {
  max-width: 768px;
  margin: 0 auto;
  padding: 1em 2em;
}
#about {
  background: linear-gradient(180deg, #fff, #efefef);
}
header {
  h1 {
    margin-top: 2em;
    max-width: 90%;
    font-size: 34pt;
    line-height: 1;
    letter-spacing: -0.04em;
    font-weight: 700;
    hyphens: auto;
  }
}

.image {
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
}
a {
  color: inherit;
}
.about-me {
  h1 {
    font-size: 42pt;
    margin: 0;
  }
  p {
    font-size: 16pt;
  }
}
</style>

<script>
import {SocialRefs, Footer, Navigation} from '@/components/';

export default {
  name: 'Home',
  components: {SocialRefs, Footer, Navigation},
};
</script>

