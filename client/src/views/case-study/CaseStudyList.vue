<template>
  <div class="wrapper">
    <h1>Case Studies</h1>
    <div class="card-list">
      <div v-for="article in articles" v-bind:key="article.name">
        <router-link :to="'/case-study/' + article.link">
          <div class="card">
            <div class="card-banner">
              <div :style="{'background-image': 'url(' + article.image + ')' }" class="inner"></div>
            </div>
            <div class="card-title">
              {{article.title}}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      articles: [
        {
          name: 'Seminar',
          title: 'Seminar (Internet Technologies): Building & Deploying LaTeX Documents',
          image: 'https://cdn.occloxium.com/i/occloxium/case-study/seminar/page_2.svg',
          link: 'seminar'
        },
        {
          name: 'Hub',
          title: 'Occloxium Hub',
          link: 'hub',
          image: 'https://cdn.occloxium.com/i/occloxium/case-study/hub/occloxium-hub.svg'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 2em;
  h1 {
    max-width: 100%;
  }
}
.card-list {
  background: #efefef;
}
a {
  text-decoration: none;
  color: inherit;
}
.card {
  border-radius: 8pt;
  box-shadow: 0 0px 2px rgba(0,0,0,0.45);
  margin: 1em;
  max-width: 768px;
  width: 80%;

  background: #ffffff;
  box-sizing: border-box;
  & .card-banner {
    padding: 2em;
    border-radius: 8pt;
    background-color: #ffab00;
    height: 250px;
    & .inner {
      background-size: 100% cover;
      background-position: center center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  }
  & .card-title {
    padding: 1em;
    font-weight: 800;
    font-size: 2em;
    text-decoration: none;
    color: rgba(0,0,0,0.87)
  }
}
</style>
