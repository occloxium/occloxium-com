<template>
  <div id="work">
    <section id="visuals">
      <h3 class="mdc-typography--headline3">
        Visual Loops
      </h3>
      <p class="mdc-typography--body1">If interest arises to use on of the
        loops <b>or</b> if you would like to collaborate on content creation,
        feel free to reach out to me via e-mail as I'm always looking for an
        opportunity to learn more techniques for creating impressive visuals</p>
      <div class="embed">
        <iframe src="https://player.vimeo.com/video/263726213" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="embed">
        <iframe src="https://www.youtube.com/embed/LG7J5D6n78U" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="embed">
        <iframe src="https://www.youtube.com/embed/aoDXE9Wol0A" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="embed">
        <iframe src="https://www.youtube.com/embed/qRuEaTvd_SM" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="embed">
        <iframe src="https://www.youtube.com/embed/WYZgSi7qyCQ" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
    <section id="anydays">
      <h3 class="mdc-typography--headline3">
        Anydays
      </h3>
      <p class="mdc-typography--body1">Some of my Anydays, sort of in
        randomized order (For full list and chronological order, visit my
        instagram profile)
      </p>
      <ul class="image-list">
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/MISSING_YOU.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/FORST.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/ESCAPE.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/ABSTRACT.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/SONIC.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/MAGIC.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/PILLAR.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/CUBE.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/THERACE.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/CRYSTALIZE.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/ISOLATION.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/THEGRID.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/ARTIC.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/LONGWAYDOWN.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/EVERYDAYDANGER.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/PROJECT_SATURN.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/SEPTEMBER.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/CIRCULAR_PLANET.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/WHITEOUT.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/AQUEDUCT.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/META.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/THEDAYWELEFT.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/ANEWHOME.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/SPACEINVADER.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/PORTAL.jpg">
        </li>
        <li class="">
          <img class="" src="https://cdn.occloxium.com/i/occloxium/p/DEEPDARKTOWER.jpg">
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  #work {
    margin: 0 auto;
    padding: 1em 2em;
    background: rgba(231,231,231,1);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    max-width: 768px;
  }
  h3 {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 2em
  }
  .embed {
    width: 100%;
    position: relative;
    margin: 48px 0;
    padding-top: 56.25%;

    iframe {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }
  }
  .image-list {
    display: block;
    flex-wrap: wrap;
    column-count: 2;
    padding: 0;
    li {
      break-inside: avoid-column;
      position: relative;
      box-sizing: border-box;
      list-style-type: none;
      margin: 0 0 16px;
      img {
        width: 100%;
        display: block;
        height: auto;
      }
    }
    @media screen and (max-width: 481px){
      column-count: 1
    }
    @media screen and (max-width: 768px){
      column-count: 2
    }
    @media screen and (min-width: 768px){
      column-count: 3
    }
  }
</style>
