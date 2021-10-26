<template>
  <div id="header" class="fixed w-screen py-3 bg-white t-0 bg-opacity-95">
    <table class="w-full text-center table-fixed">
      <thead>
        <td id="logoAndQuote" class="flex items-center w-1/3">
          <img
            class="inline-block w-14"
            src="../assets/covidIcon.png"
            alt="covid icon"
          />
          <div class="inline-block ml-3">
            <p class="m-0 text-lg italic text-left">Latest Covid19 data</p>
            <h1 class="m-0 text-2xl font-bold">LiveCovid19.World</h1>
          </div>
        </td>
        <td id="menuBar" class="w-1/3 m-0">
          <ul class="m-0">
            <li>Home</li>
            <li>Covid Report</li>
            <li>Contact</li>
          </ul>
        </td>
        <td id="search" class="w-1/3">
            <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
        </td>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    onSearch:()=>{
      console.log('search')
    }
  }
};
</script>

<style scoped>
#header {
  position: fixed;
  z-index: 100;
  box-shadow: 0px 2px 5px gray;
}
#logoAndQuote {
  padding: 0 30px;
}
#menuBar {
}
li {
  display: inline-block;
  margin:20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}
li:hover{
  color:#B91C1C
}
</style>