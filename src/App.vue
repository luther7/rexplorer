<template>
  <div id="app">
    <Response />
    <RequestForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Response from './components/Response.vue';
import RequestForm from './components/RequestForm.vue';

export default Vue.extend({
    name: 'app',
    components: {
        Response,
        RequestForm,
    },
});
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
