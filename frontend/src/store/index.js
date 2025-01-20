import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export default createStore({
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