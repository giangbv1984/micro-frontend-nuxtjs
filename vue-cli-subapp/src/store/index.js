import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "vue-app"
  },
  mutations: {
    update(state, data) {
      Object.keys(data).forEach(key => {
        state[key] = data[key];
      });
    },
    updateParentState(_, data) {
      if (this.$sdk) {
        this.$sdk.globalState.setGlobalState(data);
      }
    }
  },
  actions: {},
  modules: {}
});
