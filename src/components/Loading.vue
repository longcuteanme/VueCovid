<template>
  <div class="fixed flex items-center justify-center w-full h-full bg-white" id="loadingDiv">
    <img src="../assets/covidIcon.png" alt="covid icon"/>
  </div>
</template>

<script>
export default {
    name:"Loading"
}
</script>

<style scoped>
img{
    display: inline-block;
    width:10vw;
    margin: 0px;
    animation: loadingMove 5s infinite;
}
@keyframes loadingMove {
    0% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>