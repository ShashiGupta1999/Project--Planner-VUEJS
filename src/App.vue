<template>
  <NavbarComp />
  <router-view />
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';

export default{
  components: {NavbarComp}
}
</script>
<style>
body{
  color: #f4f4f4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}


</style>
