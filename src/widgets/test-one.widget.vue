<template>
  <div class="font-bold text-24 p-16 text-white bg-red">I am Widget One</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Test1",
  setup() {
    return {};
  }
});
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
