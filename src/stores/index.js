import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import historyStore from "./modules/historyStore";
import playerStore from "./modules/playerStore";
import channelsStore from "./modules/channelsStore";

Vue.use(Vuex);


const state = {
  requesting: false,
  error: {}
};

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
};

export default new Vuex.Store({
  state,
  getters,
  modules: {
    channelsStore,
    historyStore,
    playerStore,
  },
  plugins: [createPersistedState()],
})
