import Vue from 'vue';
import Vuex from 'vuex';
import Request from './request';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        error: false,
        errorText: '',
        response: {
            text: '',
        },
    },
    getters: {
        getResponseText: (state) => {
            if (state.error) {
                return state.errorText;
            }

            return state.response.text;
        },
    },
    mutations: {
        updateResponse(state, response) {
            state.response = response;
        },
        updateError(state, errorText: string) {
            state.error = true;
            state.errorText = errorText;
        },
        clearError(state) {
            state.error = false;
            state.errorText = '';
        },
    },
    actions: {
        async request({ commit }, rawRequest: string) {
            try {
                commit('updateResponse', await Request.execute(rawRequest));
                commit('clearError');
            } catch (exception) {
                commit('updateError', exception.message);
            }
        },
    },
});
