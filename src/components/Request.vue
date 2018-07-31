<template>
  <form @submit.prevent="submit">
    <label>
       Domain:
      <input type="text" v-model="domain"/>
    </label>
    <label>
       Path:
      <input type="text" v-model="path"/>
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Fetch from '../fetch';

export default Vue.extend({
    name: 'request',
    data() {
        return {
            domain: '',
            path: '',
        };
    },
    methods: {
        async submit() {
            const fetch: Fetch = new Fetch(this.domain);
            const response: string = await fetch.get(this.path);

            this.$store.commit('updateresponse', response);
        },
    },
});
</script>

<style scoped>
input[type=text] {
    width: %100;
    padding: 12px 20px;
    margin-top: 60px;
}
</style>
