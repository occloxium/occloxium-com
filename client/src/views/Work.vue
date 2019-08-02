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
    </section>
    <section id="anydays">
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
    font-size: 2em;
    max-width: 500px;
    margin: 1em auto 1em;
  }
  p {
    max-width: 500px;
    margin: auto;
  }
</style>

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
      ]
    }
  }
}
</script>
