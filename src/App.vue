<template>
  <div class="w-screen h-screen" id="app">
    <Loading v-if="false"/>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Loading from './components/Loading.vue' 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Loading,
    Header,
    Footer
  }
}
</script>

<style>

</style>
