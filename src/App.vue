<template>
  <div id="app">
    <AppNavbar />
    <!-- Common Navbar appears on all pages -->
    <router-view></router-view>
    <!-- This will render the current page based on the route -->
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

#app {
  width: 100vw;
  font-family: Arial Rounded MT;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 0px;
}
</style>
