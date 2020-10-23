<template>
  <div class="hello">
    <h1 class="highlight">{{ textmsg }}</h1>
    <img src="../../assets/img/download.jpeg" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestWorld",
  props: {
    msg: String
  },
  setup() {
    const textmsg = "I am Test World Component";
    return {
      textmsg
    };
  }
});
</script>

<style lang="css" scoped>
@import "./testworld.css";
</style>
