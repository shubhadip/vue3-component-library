<template>
<div class="hello">
    <h1 class="highlight1">{{textmsg}}</h1>
    <div class="imgtest"></div>
</div>
</template>

<script>
import {
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String
    },
    setup() {
        const textmsg = "I am Hello World Component";
        return {
            textmsg
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="css" scoped>
@import "./helloworld.css";
</style>
