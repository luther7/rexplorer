<template>
  <div id="header">
    <h3>{{ heading }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'heading',
    props: [
        'heading',
    ],
});
</script>

<style scoped>
#header {
  display: flex;
}
h3 {
  flex: 1;
  width: %20;
}
</style>
