<template>
  <div class="header">
    <div class="inner">
      <h1>Alexander Bartolomey is a YAML Engineer, Kubernetes Enthusiast, Containerizer, Musician &amp; Pizza Lover.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
};
</script>

<style lang="scss" scoped>
.header {
  .inner {
    max-width: 768px;
    margin: 0 auto;
    color: black;
    padding: 2em 1em;
    h1 {
      margin-top: 2em;
      max-width: 90%;
      //font-size: 2.5em;
      font-size: 34pt;
      line-height: 1;
      // margin: 0;
      letter-spacing: -0.04em;
      font-weight: 700;
      // text-transform: uppercase;
      hyphens: auto;
    }
    h2 {
      margin: 0;
      margin-top: 1em;
      line-height: 1;
      font-size: 32pt;
      letter-spacing: -0.04em;
      font-weight: 600;
    }
  }
  background: white;
  padding: 2em 12px 0 12px;
}
</style>
