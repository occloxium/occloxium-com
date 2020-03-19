<template lang="html">

  <section class="about-me">
    <h1>About Me</h1>
    <p>
      I'm studying Computer Science at RWTH Aachen University, Germany, with a focus on both automation and orchestration
      of modern software and rapid deployment of prototypical software using web technologies. In the three years I've learned
      a lot about the Do's and Dont's of Software Engineering, ironically not by obeying to the material taught at uni.
    </p>
    <p>
      Talk about geeky CS stuff with me for longer than the average smalltalk conversation time and I'll try to pursuade you
      to containerize anything you ever build.
    </p>
    <p>
      I've adopted a faible for design and typography and will happily chat with you about the quirks and details of typefaces.
      Just begin the conversation by saying the name of any modern mainstream font.
    </p>
  </section>

</template>

<script lang="js">

export default  {
  name: 'AboutMe',
};


</script>

<style scoped lang="scss">
  .about-me {
    h1 {
      font-size: 42pt;
      margin: 0;
      letter-spacing: -0.04em;
    }
    p {
      font-size: 16pt;
      letter-spacing: -0.02em;
    }
  }
</style>
