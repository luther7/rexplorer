<template>
  <form @submit.prevent="submit">
    <label>
       Domain:
      <input type="text" v-model="domain"/>
       Path:
      <input type="text" v-model="path"/>
    </label>
    <button type="submit">Submit</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';
import Requests from '../requests';

export default Vue.extend({
    name: 'Request',
    data() {
        return {
            domain: '',
            path: '',
        };
    },
    methods: {
        async submit() {
            const requests: Requests = new Requests(this.domain);
            const response: Promise<string> = await requests.get(this.path);

            this.$store.commit('updateResponse', response);
        },
    },
});
</script>

<style scoped>
</style>
