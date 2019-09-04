<template>
  <article>
    <div class="header"></div>
    <div class="title">
      <h2>Case Study:</h2>
      <h1><small>Seminar (Internet Technologies): </small>Building &amp; Deploying LaTeX Documents</h1>
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
      <p>
        To make life easier for me, as I wanted my build versions of the paper to be available in a central place
        other than my hard drive, where PDFs would probably have interfered, and my supervisor in a way that 
        I could quickly get feedback on drafts without actually having to send the document via e-mail, again 
        creating interference of versions on his side, I entered the planning phase for a deployment pipeline
        with visual version control integrated using the web.
      </p>
    </div>
    <div class="no-margin">
      <div id="page2"></div>
      <div class="label">
        Schematics of the pipeline architecture 
      </div>
    </div>
    <p>
      Hours at the drawing board spawned the above architecture. Part One, the upper one, covers the actual production of PDF output. 
      On push to the remote repository, a fairly common build pipeline for documents using the typesetting environment LaTeX runs on
      the source files for the paper. LaTeX pipelines have been done before, however, using Docker to build documents seems to be not 
      that widely spread, which is a shame, since the portability gained from doing so eliminates the problem of manually installing 
      TeXLive or another TeX distribution, which are classically pretty stubborn.
    </p>
    <p>
      Using a self-made docker image bundling the <code>latexmk</code> toolchain as well as <code>TikZ</code>, required for graphics and
      the rest of the remaining classes, 3 different PDFs, differing in form and style, are produced and exported as artifacts of that pipeline.
      The <a href="https://www.github.com/occloxium/docker-latexmk">docker image</a> is actually quite versatile, so I will link it here for 
      interested readers. Using it is dead simple, just mount a volume with your source files and override the entrypoint/cmd with latexmk
      to your files.
    </p>
    <p>
      
    </p>
    <div class="no-margin">
      <div id="page3"></div>
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
.no-margin {
  box-sizing: border-box;
  padding: 2em;
  width: 100%;
  div {
    height: 360px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
}
#page2 {
  background-image: url('../../assets/case-study/seminar/page_2.svg');
}
#page3 {
  background-image: url('../../assets/case-study/seminar/page_3.svg');
}
</style>
