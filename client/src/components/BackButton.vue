<template lang="html">

  <section class="back-button">
    <router-link to="/">
      <i class="material-icons">
        keyboard_arrow_left
      </i>
      <span>
        Go Back
      </span>
    </router-link>
  </section>

</template>

<script lang="js">

export default  {
  name: 'back-button',
  props: [],
  mounted () {

  },
  data () {
    return {

    };
  },
  methods: {

  },
  computed: {

  }
};


</script>

<style scoped lang="scss">
  .back-button {
    & > * {
      box-shadow: 0 2px 5px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #ffd600;
      border-radius: 50px;
      line-height: 2;
      padding: 16px;
      text-decoration: none;
      color: black;
      font-weight: bold;
      & > * {
        line-height: 1;
      }
    }
  }
</style>
