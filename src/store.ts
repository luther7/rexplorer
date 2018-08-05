import Vue from 'vue';
import Vuex from 'vuex';
import Requests from './requests';

Vue.use(Vuex);

const requests: Requests = new Requests();

export default new Vuex.Store({
    state: {
        response: null,
        uri: null,
    },
    getters: {
        getResponse: (state) => {
            return state.response;
        },
    },
    mutations: {
        updateResponse(state, response) {
            state.response = response;
        },
    },
    actions: {
        async request({ commit }, uri) {
            commit('updateResponse', await requests.get(uri));
        },
    },
});
