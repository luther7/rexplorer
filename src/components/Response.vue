<template>
  <div class="response">
    <pre v-highlightjs="response">
      <code class="json">
      </code>
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Response',
    computed: {
        response(): string {
            return this.$store.getters.getResponse;
        },
    },
});
</script>

<style scoped>
code {
  font-family: monospace;
}
</style>
