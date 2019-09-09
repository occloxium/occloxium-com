<template>
  <div class="outer">
    <router-link to="/case-study/seminar">
      <div class="box">
        <div :style="{'background-image': 'url(https://cdn.occloxium.com/i/occloxium/case-study/seminar/page_2.svg)' }" class="inner"></div>
        <div class="text"><span>Case Study: Building &amp; Deploying LaTeX Documents</span></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
.outer {
  padding-bottom: 4em;
}
.box {
  width: 100%;
  min-height: 500px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  filter: grayscale(100%);
  &:hover, &:active {
    filter: none;
  }
  transition: filter ease-in-out 0.1s;
  .inner {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #ffd600;
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center center;
    filter: blur(0);
    transform: scale(1.1);
  }
  .text {
    position: relative;
    // display: block;
    z-index: 2;
    text-align: center;
    margin: 0 auto;
    // text-shadow: 0 0 2px 4px rgba(0,0,0,1);
    padding: 8px;
    color: black;
    background: transparentize(#ffd600, 0.25);
    font-size: 24pt;
    font-weight: bold;
    backdrop-filter: blur(0);
  }
}
</style>
