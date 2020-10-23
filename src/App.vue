<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <TestWorld />
</template>

<script>
import TestWorld from "./components/testworld/TestWorld.vue";
import HelloWorld from "./components/helloworld/HelloWorld.vue";

export default {
  name: "App",
  components: {
    TestWorld,
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
