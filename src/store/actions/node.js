import { fetchNodesList } from './api';
import types from '../mutation-types';

export const refreshNodes = ({ commit }) => {
  commit(types.REFRESH_NODES);
};
export const receiveNodes = ({ commit }, { response: json }) => {
  commit(types.RECEIVE_NODES_SUCCESS, {
    nodes: json.nodes,
  });
};
export const fetchNodes = ({ commit, dispatch }) => {
  commit(types.REQUEST_NODES);
  fetchNodesList().then((response) => {
    dispatch('receiveNodes', { response });
  }).catch((error) => {
    commit(types.RECEIVE_NODES_FAILURE, { error });
  });
};

const shouldFetchNodes = (state) => {
  const lists = state.lists;
  if (lists.items.length === 0) {
    return true;
  }
  return lists.didInvalidate;
};

export const fetchNodesIfNeeded = ({ dispatch, state }) => {
  if (shouldFetchNodes(state)) {
    dispatch('fetchNodes');
  }
};
