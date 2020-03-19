<template>
  <ul class="image-list">
    <li v-for="everyday in everydays" :key="everyday">
      <img :src="`https://cdn.occloxium.com/i/occloxium/p/${everyday}.jpg`">
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      everydays: [
        'DEEPDARKTOWER',
        'PORTAL',
        'SPACEINVADER',
        'ANEWHOME',
        'THEDAYWELEFT',
        'META',
        'AQUEDUCT',
        'WHITEOUT',
        'CIRCULAR_PLANET',
        'SEPTEMBER',
        'PROJECT_SATURN',
        'EVERYDAYDANGER',
        'LONGWAYDOWN',
        'ARTIC',
        'THEGRID',
        'ISOLATION',
        'CRYSTALIZE',
        'THERACE',
        'CUBE',
        'PILLAR',
        'MAGIC',
        'SONIC',
        'ABSTRACT',
        'ESCAPE',
        'FORST',
        'MISSING_YOU',
        'SINGULARITY'
      ].reverse()
    };
  }
};
</script>

<style lang="scss" scoped>
  .image-list {
    display: block;
    flex-wrap: wrap;
    column-count: 2;
    li {
      border-radius: 6px;
      break-inside: avoid-column;
      position: relative;
      box-sizing: border-box;
      list-style-type: none;
      margin: 0 0 16px;

      img {
        box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12) !important;
        border-radius: 6px;
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
      column-count: 2
    }
  }
</style>
