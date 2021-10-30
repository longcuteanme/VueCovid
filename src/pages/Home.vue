<template>
  <div id="Home">
    <div
      id="worldMap"
      class="w-full h-full min-h-screen bg-top bg-no-repeat bg-contain"
    >
      <!-- Config color of whole page -->
      <div
        id="backgroundColor"
        class="w-full h-full min-h-screen px-32 py-10 bg-gray-800 bg-opacity-70"
      >
        <h1 class="mb-1 font-bold text-center text-white text-7xl">LiveCovid19.World</h1>
        <p class="mb-0 text-xl italic text-center text-white">Link API: https://documenter.getpostman.com/view/10808728/SzS8rjbc#71b460b6-a97e-4991-b190-2b0a0523e0d5</p>
        
        <!-- World total -->
        <h1 class="mt-16 mb-1 text-4xl font-bold text-center text-white">WORLD TOTAL</h1>
        <p class="text-xl italic text-center text-white mb-7">Last update: {{lastUpdated}}</p>
        
        <div class="flex justify-between">
          
          <!-- new Case -->
          <div class="text-center">
            <div class="inline-block p-3 m-0 bg-yellow-400 rounded-full hover:bg-yellow-500 icon">
              <a-icon type="plus" />
            </div>
            <h1 class="mt-3 mb-0 text-2xl font-bold text-white">New cases</h1>
            <p class="mt-1 text-xl font-bold text-white">{{newCase}}</p>
          </div>

          <!-- Confirmed case -->
          <div class="text-center">
            <div class="inline-block p-3 m-0 bg-blue-400 rounded-full hover:bg-blue-500 icon">
              <a-icon type="exclamation" />
            </div>
            <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Confirmed</h1>
            <p class="mt-1 text-xl font-bold text-white">{{confirmed}}</p>
          </div>

          <!-- Recovered case -->
          <div class="text-center">
            <div class="inline-block p-3 m-0 bg-green-400 rounded-full hover:bg-green-500 icon">
              <a-icon type="check" />
            </div>
            <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Recovered</h1>
            <p class="mt-1 text-xl font-bold text-white">{{recovered}}</p>
          </div>

          <!-- Death case -->
          <div class="text-center">
            <div class="inline-block p-3 m-0 bg-red-400 rounded-full hover:bg-red-500 icon">
              <a-icon type="close" />
            </div>
            <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Deaths</h1>
            <p class="mt-1 text-xl font-bold text-white">{{deaths}}</p>
          </div>
        </div>

        <!-- Table give info about covid in all contries in the world -->
        <div class="mt-32">
          <TableCountry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment'
import TableCountry from './TableCountry.vue';

export default {
  name: "Home",
  methods: {},
  computed: {
    summary() {
      return this.$store.state.summary;
    },
    newCase(){
      return _.get(this.summary,'Global.NewConfirmed','No data')
    },
    confirmed(){
      return _.get(this.summary,'Global.TotalConfirmed','No data')
    },
    recovered(){
      return _.get(this.summary,'Global.TotalRecovered','No data')
    },
    deaths(){
      return _.get(this.summary,'Global.TotalDeaths','No data')
    },
    lastUpdated(){
      return moment(_.get(this.summary,'Global.Date','No data')).format('HH:mm:ss DD/MM/YYYY')
    }
  },
  components:{
    TableCountry
  },
  mounted() {
    this.$store.dispatch("getSummary");
  },
};
</script>

<style scoped>
#worldMap {
  background-image: url("../assets/worldMap.png");
}
.icon {
  box-shadow: 0px 0px 3px white;
}
.icon >>> .anticon {
  margin: 0px;
  font-size: 50px;
  color:white
}
</style>