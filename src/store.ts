import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        response: '{"state": "init"}',
    },
    mutations: {
        updateResponse(state, response) {
            state.response = response;
        },
    },
    actions: {
    },
});
