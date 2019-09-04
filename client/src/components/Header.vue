<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <span class="spacer">→</span>
    <router-link v-bind:to="'/case-study'">Case Studies</router-link>
    <span v-if="this.except">
      <span class="spacer">→</span>
      <router-link v-bind:to="$route.path">{{$route.name}}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    except: function(){
      return this.$route.path.match(/^\/case-study\/?$/) === null;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 16px 2em;
  background: #ffffff;
  color: rgba(0,0,0,0.87);
  * {
    color: inherit;
    text-decoration: none;
    font-weight: 800;
    font-size: 16pt;
  }
  .spacer {
    font-family: 'Inter Var', sans-serif;
    font-weight: bold;
    padding: 0 8px;
  }
  a:hover, a:active {
    text-decoration: underline;
  }
}
</style>
