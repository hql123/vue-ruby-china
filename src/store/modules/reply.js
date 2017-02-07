
import * as replyActions from '../actions/reply';
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
const getters = {};

// actions
const actions = replyActions;
/* eslint-disable */
const mutations = {
  /* topic list */
  [types.REQUEST_REPLIES] (state) {
    state.lists = {
      ...state.lists,
      isFetching: true,
    };
  },
  [types.RECEIVE_REPLIES_SUCCESS] (state, { replies }) {
    state.lists = {
      ...state.lists,
      isFetching: false,
      items: replies
    };
  },
  [types.RECEIVE_REPLIES_FAILURE] (state, { error }) {
    state.lists = {
      ...state.lists,
      isFetching: false,
      error: error
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
