<template>
  <div class="w-screen h-auto bg-gray-800" id="app">
    <Loading v-if="loading"/>
    <Header/>
    <router-view class="pt-24"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Loading from './components/Loading.vue' 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  computed:{
    loading(){
      return this.$store.state.loading
    }
  },
  components: {
    Loading,
    Header,
    Footer
  }
}
</script>

<style>

</style>
