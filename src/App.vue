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
