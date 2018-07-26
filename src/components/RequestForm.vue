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
    computed: {
        message: {
            get(): string {
                return this.$store.state.response;
            },
            set(response: string) {
                this.$store.commit('updateResponse', response);
            },
        },
    },
});
</script>

<style scoped>
</style>
