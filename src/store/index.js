import { createStore } from "vuex";

export default createStore({
  state: {
    page: "home",
  },
  getters: {
    getPage(state) {
      return state.page;
    },
  },
  mutations: {
    setPage(state, payload) {
      state.page = payload;
    },
  },
  actions: {},
  modules: {},
});
