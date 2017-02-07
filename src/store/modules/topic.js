
import * as topicActions from '../actions/topic';
import types from '../mutation-types';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
  error: '',
};
const state = {
  lists: {
    default: initialState,
    popular: initialState,
    recent: initialState,
    no_reply: initialState,
    excellent: initialState,
  },
  detail: {
    isFetching: false,
    error: '',
    item: {},
  },
};

// getters
const getters = {};

// actions
const actions = topicActions;
/* eslint-disable */
const mutations = {
  /* topic list */
  [types.REFRESH_TOPICS] (state, { tab }) {
    state.lists[tab] = {
      ...state.lists[tab],
      didInvalidate: true,
    };
  },
  [types.REQUEST_TOPICS] (state, { tab }) {
    state.lists[tab].isFetching = true;
    state.lists[tab].didInvalidate = false;
  },
  [types.RECEIVE_TOPICS_SUCCESS] (state, { tab, topics }) {
    state.lists[tab].isFetching = false;
    state.lists[tab].didInvalidate = false;
    state.lists[tab].items = topics;
  },
  [types.RECEIVE_TOPICS_FAILURE] (state, { tab, error }) {
    state.lists[tab].error = error;
    state.lists[tab].didInvalidate = false;
    state.lists[tab].isFetching = false;
  },
  /* topic detail */
  [types.REQUEST_TOPIC] (state) {
    state.detail = {
      ...state.detail,
      isFetching: true,
    }
  },
  [types.RECEIVE_TOPIC_SUCCESS] (state, { topic }) {
    state.detail = {
      ...state.detail,
      isFetching: false,
      item: topic,
    }
  },
  [types.RECEIVE_TOPIC_FAILURE] (state, { error }) {
    state.detail = {
      ...state.detail,
      isFetching: false,
      error: error,
    }
  },
};
/* eslint-disable */

export default {
  state,
  mutations,
  getters,
  actions,
};
