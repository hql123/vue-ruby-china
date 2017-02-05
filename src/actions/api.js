/* eslint-disable */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Authorization'] = '';
const context = '/api/v3';
const fetchGet = (query) => {
  return Vue.http.get(context + query).then((response) => {
    return Promise.resolve(response.json());
  }).catch((error) => {
    return Promise.reject(error.status);
  });
};

function translateOptions(options) {
  return options === undefined ? 'offset=0&limit=25' : `${options}&offset=0&limit=25`;
}

const fetchDefaultTopics = (options = '') => {
  return fetchGet(`/topics?${options}`);
};
const fetchPopularTopics = (options = '') => {
  return fetchGet(`/topics?type=popular&${options}`);
};
const fetchNoReplyTopics = (options = '') => {
  return fetchGet(`/topics?type=no_reply&${options}`);
};
const fetchRecentTopics = (options = '') => {
  return fetchGet(`/topics?type=recent&${options}`);
};

export const fetchTopicsList = (tab, options) => {
  const newOptions = translateOptions(options);
  switch (tab) {
    case 'default':
      return fetchDefaultTopics(newOptions);
    case 'popular':
      return fetchPopularTopics(newOptions);
    case 'no_reply':
      return fetchNoReplyTopics(newOptions);
    case 'recent':
      return fetchRecentTopics(newOptions);
    default:
      return fetchDefaultTopics(newOptions);
  }
};
