<template>
  <div id="header" class="fixed flex justify-between w-screen py-3 bg-white t-0 bg-opacity-95">
    <div id="logoAndQuote" class="flex items-center">
      <img
        class="inline-block w-12"
        src="../assets/covidIcon.png"
        alt="covid icon"
      />
      <div class="inline-block">
        <p>Latest Covid19 data on the web!</p>
        <h1>LiveCovid19.World</h1>
      </div>
    </div>
    <div>
      <ul id="menuBar">
        <li>Home</li>
        <li>Covid Report</li>
        <li>Contact</li>
      </ul>
    </div>
    <div id="search">search</div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#header{
  position: fixed;
  z-index: 100;
  box-shadow: 0px 10px gray;
}
#logoAndQuote{
  padding: 0 30px;
}
#menuBar{
  
}
li{
    display: inline-block;
}
</style>