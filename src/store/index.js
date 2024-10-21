import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state() {
    return {
      cardsList: [],
    };
  },
  getters: {
    getCardsList(state) {
      return state.cardsList;
    },
  },
  mutations: {
    createCard(state, value) {
      state.cardsList.push(value);
    },
    removeCard(state, idx) {
      state.cardsList.splice(idx, 1);
    },
    updateCard(state, card) {
      state.cardsList.map((obj) => {
        if (obj.id === card.value.id) {
          // return obj.text = card.value.text
          return { ...obj, text: card.value.text };
        }
        return obj;
      });
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
