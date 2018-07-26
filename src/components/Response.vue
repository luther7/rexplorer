<template>
  <div class="response">
    <pre v-highlightjs>
      <code class="json">
        {{ response }}
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
            return this.$store.state.response;
        },
    },
});
</script>

<style scoped>
code {
  font-family: monospace;
}
</style>
