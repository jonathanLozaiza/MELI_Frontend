import Vue from "vue";
import Vuex from "vuex";
import API from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: undefined,
    item: undefined,
    query: "",
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getItem(state) {
      return state.item;
    },
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setItems(state, data) {
      state.items = data;
    },
    setItem(state, data) {
      state.item = data;
    },
    cleanItems(state) {
      state.items = undefined;
    },
    cleanItem(state) {
      state.item = undefined;
    },
  },
  actions: {
    async getItemsAction({ commit }, query) {
      try {
        if (typeof query !== "string" || query === "") {
          return null;
        }
        const { data } = await API.get(`/api/items?q=${query}`);
        commit("cleanItems");
        commit("setItems", data);
        return { ok: true };
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async getItemAction({ commit }, id) {
      try {
        if (typeof id !== "string" || id === "") {
          return null;
        }
        const { data } = await API.get(`/api/items/${id}`);
        commit("cleanItem");
        commit("setItem", data);
        return { ok: true };
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
  },
  modules: {},
});
