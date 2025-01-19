import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    async fetchItems({ commit }) {
      const response = await axios.get('/api/items');
      commit('setItems', response.data);
    }
  },
  modules: {}
});