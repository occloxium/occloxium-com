<template>
  <article>
    <div class="header"></div>
    <div class="title">
      <h2>Case Study:</h2>
      <h1><small>Seminar (Internet Technologies): </small>Building & Deploying LaTeX Documents</h1>
    </div>
    <div class="body">
      <p>
        In the spring of 2019, I got assigned to the seminar on (Advanced) Internet Technologies at the
        COMSYS chair for communication and distributed systems. The seminar covered lots of completely
        different topics. Among them was a topic on current blockchain technology advancements, in particular
        the use of <b>Sharding to increase Blockchain scalability</b>. The paper ultimately produced for the
        seminar is available at <a href="https://seminar.occloxium.com/">https://seminar.occloxium.com/</a>, if you
        are interested in that topic.
      </p>
      <p>
        The formal requirements were usage of the IEEE Transaction LaTeX class for a unified appearance of all papers.
        The last time I wrote a paper back in winter of 2017, the organisation of the directory and later the repository
        got out of hand really fast, disobeying all previously defined guidelines. Directory structure and inclusion of
        files in TeX is pretty broken anyways so this time, I wanted to get it right, or at least better.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CaseStudySeminar',
};
</script>

<style lang="scss" scoped>
$zoomoid-fade: linear-gradient(135deg,
  rgb(109,23,229) 0%, rgb(109,23,229) 19.99%,
  rgb(255,0,0) 20%, rgb(255,0,0) 39.99%,
  rgb(255,174,13) 40%, rgb(255,174,13) 59.99%,
  rgb(133,255,13) 60%, rgb(133,255,13) 79.99%,
  rgb(0,216,255) 80%, rgb(0,216,255) 100%);

.header {
  background: url('../../assets/case-study/seminar/page_1.svg'), $zoomoid-fade;
  background-size: 80%, cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 400px;
  width: 100%;
  display: block;
  box-shadow: 0 8px 8px rgba(0,0,0,0.1);
}
.title {
  padding: 2em 2em 0;
  width: 80%;
  margin: 0 auto;
  h2 {
    font-size: 2em;
    margin: 0;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  h1 {
    padding: 0;
    margin: 0;
    font-size: 4em;
    font-weight: 800;
    small {
      font-size: 70%;
      display: block;
      margin: 0;
      font-weight: 500;
    }
  }
}
.body {
  padding: 0 2em;
  width: 80%;
  margin: 0 auto;
  p {
    font-size: 16pt;
    letter-spacing: -0.04em;
    line-height: 1.5;
    // column-width: 50%;
    // column-fill: auto;
    // column-count: 2;
    // column-gap: 16pt;
  }
  a {
    color: inherit;
  }
}
.title,
.body {
  max-width: 1024px;
}
</style>
