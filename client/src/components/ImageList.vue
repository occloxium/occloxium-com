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
    }
  }
}
</script>

<style lang="scss" scoped>
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
