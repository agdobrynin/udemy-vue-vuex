import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        counter(state) {
            return state.counter;
        }
    },
    mutations: {
        setCounter(state, payload) {
            state.counter += payload;
        }
    },
    actions: {
        asyncSetCounter({commit}, payload) {
            const btn = payload.btn;
            const loader = btn.querySelector("span");
            const selectorLoader = "d-none";
            btn.disabled = true;
            loader.classList.toggle(selectorLoader);
            setTimeout( () => {
                commit("setCounter", payload.value);
                btn.disabled = false;
                loader.classList.toggle(selectorLoader);
            }, payload.delay);
        },
    }
});
