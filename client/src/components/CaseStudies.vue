<template>
  <div class="outer">
    <a target="_blank" href="https://pizza.bartolomey.me/">
      <div class="box">
        <div :style="{'background-image': 'url(https://cdn.occloxium.com/i/occloxium/pizza-time.png)',
        'background-size': 'cover', 'background-position': 'left bottom' }" class="inner"></div>
        <div class="text"><span>Pizza Time! 🍕</span></div>
      </div>
    </a>
    <a target="_blank" href="https://haveibeenstolen.zoomoid.de/">
      <div class="box">
        <div :style="{'background-image': 'url(https://cdn.occloxium.com/i/occloxium/have-i-been-stolen.png)',
        'background-size': '150% auto', 'background-position': 'center top' }" class="inner"></div>
        <div class="text"><span>Have I Been Stolen?</span></div>
      </div>
    </a>
    <router-link to="/case-study/seminar">
      <div class="box">
        <div :style="{
          'background-color': '#ffd600',
          'background-image': 'url(https://cdn.occloxium.com/i/occloxium/case-study/seminar/page_2.svg)' }" class="inner"></div>
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
  a {
    text-decoration: none;
    display: block;
  }
}
.box {
  box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12) !important;
  margin: 4em 0;
  width: 100%;
  min-height: 640px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  filter: grayscale(100%);
  border-radius: 6px;

  &:hover, &:active {
    filter: none;
  }
  transition: filter ease-in-out 0.1s;
  .inner {
    border-radius: 6px;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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
    background: transparentize(#ffffff, 0.25);
    font-size: 24pt;
    font-weight: bold;
  }
}
</style>
