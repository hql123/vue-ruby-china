import { fetchRepliesList } from './api';
import types from '../mutation-types';

/* reply list */
export const receiveReplies = ({ commit }, { response: json }) => {
  commit(types.RECEIVE_REPLIES_SUCCESS, {
    replies: json.replies,
  });
};
export const fetchReplies = ({ commit, dispatch }, { topic_id, options }) => {
  commit(types.REQUEST_REPLIES);
  fetchRepliesList(topic_id, options).then((response) => {
    dispatch('receiveReplies', { response });
  }).catch((error) => {
    commit(types.RECEIVE_REPLIES_FAILURE, { error });
  });
};

const shouldFetchReplies = (state) => {
  const lists = state.lists;
  if (lists.items.length === 0) {
    return true;
  }
  if (lists.isFetching) {
    return false;
  }
  return true;
};

export const fetchRepliesIfNeeded = ({ dispatch, state }, { topic_id, options }) => {
  if (shouldFetchReplies(state)) {
    dispatch('fetchReplies', { topic_id, options });
  }
};
