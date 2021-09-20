<template>
  <div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "routerWidget",
  setup() {
    return {};
  }
};
</script>
<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
