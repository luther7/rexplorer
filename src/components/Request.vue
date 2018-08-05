<template>
  <div class="row">
    <div class="column">
      <textarea-autosize
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        v-model="request"
        :min-height="30"
        :max-height="350"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'request',
    data() {
        return {
            request: '',
        };
    },
    methods: {
        updateRequest()  {
            this.$store.dispatch('request', this.request);
        },
    },
    watch: {
        request() {
            this.updateRequest();
        },
    },
});
</script>

<style scoped>
textarea {
  padding: 10px 10px;
  background-color: #002b36;
  color: #839496;
  border: 1pt solid #586e75;
}
</style>
