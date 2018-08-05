<template>
  <form>
    <div class="row">
      <div class="column">
        <label>URI</label>
        <input type="text" v-model="uri"/>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'request',
    data() {
        return {
            uri: '',
        };
    },
    methods: {
        updateUri()  {
            this.$store.dispatch('request', this.uri);
        },
    },
    watch: {
        uri() {
            this.updateUri();
        },
    },
});
</script>

<style scoped>
form {
  margin: 10px 0;
}
</style>
