import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        response: '{"state": "init"}',
    },
    mutations: {
        updateResponse(state) {
            state.response = '{"state": "updated"}';
        },
    },
    actions: {
    },
});
