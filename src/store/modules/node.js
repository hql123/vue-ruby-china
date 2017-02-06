
import * as nodeActions from '../actions/node';
import types from '../mutation-types';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
  error: '',
};
const state = {
  lists: initialState,
};

// getters
const getters = {
  groupNodes(store) {
    let nodes = store.lists.items;
    nodes = nodes.length > 0 ? nodes.group(item => item.section_name) : [];
    return nodes;
  },
};

// actions
const actions = nodeActions;
/* eslint-disable */
const mutations = {
  [types.REFRESH_NODES] (state) {
    state.lists = {
      ...state.lists,
      didInvalidate: true,
    };
  },
  [types.REQUEST_NODES] (state) {
    state.lists = {
      ...state.lists,
      isFetching: true,
      didInvalidate: false,
    };
  },
  [types.RECEIVE_NODES_SUCCESS] (state, { nodes }) {
    state.lists = {
      ...state.lists,
      isFetching: false,
      didInvalidate: false,
      items: nodes,
    };
  },
  [types.RECEIVE_NODES_FAILURE] (state, { tab, error }) {
    state.lists = {
      ...state.lists,
      isFetching: false,
      didInvalidate: false,
      error: error,
    };
  },
};
/* eslint-disable */

export default {
  state,
  mutations,
  getters,
  actions,
};
