import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import modules from './modules';
import actions from '../actions';
import getters from './getters';


Vue.use(Vuex);

const initialState = {
  activeType: null,
  itemsPerPage: 20,
  items: {/* [id: number]: Item */},
  users: {/* [id: string]: User */},
  lists: {
    top: [/* number */],
    new: [],
    show: [],
    ask: [],
    job: [],
  },
};


const store = new Vuex.Store({
  state: initialState,
  actions,
  mutations,
  getters,
  modules,
});

if (module.hot) {
  // 使 actions 和 mutations 成为可热重载模块
  module.hot.accept(['./mutations', './modules', '../actions', './getters'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
    const newMutations = mutations.default;
    const newModules = modules.default;
    const newActions = actions.default;
    const newGetters = getters.default;
    // 加载新模块
    store.hotUpdate({
      mutations: newMutations,
      modules: newModules,
      actions: newActions,
      getters: newGetters,
    });
  });
}
export default store;
