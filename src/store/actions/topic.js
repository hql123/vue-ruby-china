import { fetchTopicsList, fetchTopic } from './api';
import types from '../mutation-types';

/* topic list */
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

/* topic detail */
export const receiveTopicDetail = ({ commit }, { response: json }) => {
  commit(types.RECEIVE_TOPIC_SUCCESS, {
    topic: json.topic,
  });
};
export const fetchTopicDetail = ({ commit, dispatch }, { topic_id }) => {
  commit(types.REQUEST_TOPIC);
  fetchTopic(topic_id).then((response) => {
    dispatch('receiveTopicDetail', { response });
  }).catch((error) => {
    commit(types.RECEIVE_TOPIC_FAILURE, { error });
  });
};
export const fetchTopicIfNeeded = ({ dispatch, state }, { topic_id }) => {
  dispatch('fetchTopicDetail', { topic_id });
};
