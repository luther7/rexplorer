<template>
  <div id="app">
    <Header heading="rexplorer"/>
    <Response />
    <Request />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Response from './components/Response.vue';
import Request from './components/Request.vue';

export default Vue.extend({
    name: 'app',
    components: {
        Header,
        Response,
        Request,
    },
});
</script>

<style>
#app {
    font-family: 'Source Code Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 60px 60px 60px 60px;
}
label {
    flex: 1 1 auto;
    font-size: 0.8em;
    margin: 0 6px;
}
input {
    margin: 2px 0;
    background-color: #073642;
    color: #839496;
    border: 1pt solid #586e75;
}
button {
    margin: 10px 0;
    float: right;
    background-color: #073642;
    color: #839496;
    border: 1pt solid #586e75;
}
.row {
    display: flex;
    flex-direction: row;
}
.column {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}
</style>
