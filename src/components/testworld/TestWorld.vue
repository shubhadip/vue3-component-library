<template>
  <div class="hello">
    <h1 class="highlight">{{ textmsg }}</h1>
    <img src="../../assets/img/download.jpeg" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TestWorld",
  components: {},
  props: {
    msg: String
  },
  setup() {
    const textmsg = "I am Test World Component";
    const selected = ref(new Date());
    return {
      textmsg,
      selected
    };
  }
});
</script>

<style lang="css" scoped>
@import "./testworld.css";
</style>
