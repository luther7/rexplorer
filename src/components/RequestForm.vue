<template>
  <form @submit.prevent="submit">
    <label>
      Response Test:
      <input type="text" v-model="response"/>
    </label>
    <button type="submit">Submit</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'RequestForm',
    data() {
        return {
            response: '',
        };
    },
    methods: {
        submit() {
            this.$store.commit('updateResponse', this.response);
        },
    },
});
</script>

<style scoped>
</style>
