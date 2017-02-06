import { fetchTopicsList } from './api';
import types from '../mutation-types';

export const refreshTopics = ({ commit }, { tab }) => {
  commit(types.REFRESH_TOPICS, {
    tab,
  });
};
export const receiveTopics = ({ commit }, { tab, response: json }) => {
  commit(types.RECEIVE_TOPICS_SUCCESS, {
    tab,
    topics: json.topics,
  });
};
export const fetchTopics = ({ commit, dispatch }, { tab, options }) => {
  commit(types.REQUEST_TOPICS, { tab });
  fetchTopicsList(tab, options).then((response) => {
    dispatch('receiveTopics', { tab, response });
  }).catch((error) => {
    commit(types.RECEIVE_TOPICS_FAILURE, { tab, error });
  });
};

const shouldFetchTopics = (state, tab) => {
  const lists = state.lists[tab];
  if (!lists) {
    return true;
  }
  if (lists.isFetching) {
    return false;
  }
  return lists.didInvalidate;
};

export const fetchTopicsIfNeeded = ({ dispatch, state }, { tab, options }) => {
  if (shouldFetchTopics(state, tab)) {
    dispatch('fetchTopics', { tab, options });
  }
};
