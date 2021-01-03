<template>
  <div class="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">

  @import url('../src/styles/normalize.css');
  .app { 
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr 50px;
  }
  @media only screen and (max-width: 800px) {
      .app {
        grid-template-rows: 180px 1fr 50px;
      }
  }
</style>
