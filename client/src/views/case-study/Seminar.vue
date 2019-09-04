<template>
  <article>
    <div class="header"></div>
    <div class="title">
      <h2>Case Study:</h2>
      <h1>Seminar</h1>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CaseStudySeminar',
};
</script>

<style lang="scss" scoped>
.header {
  background: url('../../assets/case-study/seminar/page_1.svg');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 400px;
  width: 100%;
  display: block;
}
.title {
  padding: 0 2em;
  h2 {
    font-size: 2em;
    margin: 0;
    font-weight: 200;
    letter-spacing: -0.04em;
  }
  h1 {
    padding: 0;
    margin: 0;
    font-size: 4em;
    font-weight: 800;
  }
}
</style>
