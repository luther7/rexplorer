<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div class="align-right column">
        <label>DOMAIN</label>
        <input class="align-right" type="text" v-model="domain"/>
      </div>
      <div id="path" class="column">
        <label>PATH</label>
        <input type="text" v-model="path"/>
      </div>
    </div>
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

            this.$store.commit('updateResponse', response);
        },
    },
});
</script>

<style scoped>
form {
  margin: 10px 0;
}
  
.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.align-right {
  text-align: right;
}

#path {
  width: 60%;
}

label {
  flex: 1 1 auto;
  font-size: 0.8em;
  margin: 0 6px;
}

input {
  margin: 2px 0;
  background-color: #073642;
  color: #839496;
  border: 1pt solid #586e75;
}

button {
  margin: 10px 0;
  float: right;
  background-color: #073642;
  color: #839496;
  border: 1pt solid #586e75;
}

</style>
