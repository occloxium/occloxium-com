<template>
  <div id="contact">
    <section>
      <h3 class="">Contact</h3>
      <p class="">
        For any business inquiries or requests please contact me via email at
        <a href="mailto:alex@zoomoid.de">alex@zoomoid.de</a>.</p>
      <h3 class="">Social Media</h3>
      <p class="">
        If you'd just like to stalk me on social media, there you go:
      </p>
      <ul class="">
        <a href="https://instagram.com/zoomoid">
          <li class="">
            <span class="usr">@zoomoid</span>
            <span class="ref">Instagram</span>
          </li>
        </a>
        <a href="https://instagram.com/occloxium">
          <li class="">
            <span class="usr">@occloxium</span>
            <span class="ref">Instagram</span>
          </li>
        </a>
        <a href="https://www.youtube.com/channel/UCg0yVDwpB9QphFbsGnV-8tQ/">
          <li class="">
            <span class="usr">Alexander Bartolomey</span>
            <span class="ref">YouTube</span>
          </li>
        </a>
        <a href="https://github.com/occloxium">
          <li class="">
            <span class="usr">occloxium</span>
            <span class="ref">GitHub/GitLab</span>
          </li>
        </a>
        <a href="https://twitter.com/zoomoiid">
          <li class="">
            <span class="usr">zoomoiid</span>
            <span class="ref">Twitter</span>
          </li>
        </a>
      </ul>
      <p class="">If you'd like to go for a coffee, hit me
        up as well, I'm always down for that, assuming you are in my area!</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  #contact {
    margin: 0 auto;
    padding: 1em 2em;
    background: rgba(231, 231, 231, 1);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    max-width: 768px;
    padding-bottom: 120px
  }
  section {
    max-width: 450px;
    margin: 0 auto;
  }
  h3 {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 2em
  }
  a {
    text-decoration: none;
    color: rgba(21,21,21,1);
    }
  a:active, a:hover {
    color: #42b983;
  }
  ul {
    padding-left: 12px;
  }
  li {
    margin: 0 0 8px;
    list-style: none outside none;

    span {
      display: block
    }
    .ref {
      font-size: 0.8em;
    }
  }
</style>
