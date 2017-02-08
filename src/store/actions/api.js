/* eslint-disable */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
/* 部署到github pages的配置
Vue.http.options.emulateHTTP = true;
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Accept'] = 'application/json';

// Vue.http.headers.common['Authorization'] = '';
const context = 'https://ruby-china.org/api/v3';
*/
const context = '/api/v3';
const fetchGet = (query) => {
  return Vue.http.get(context + query).then((response) => {
    return Promise.resolve(response.json());
  }).catch((error) => {
    return Promise.reject(error.status);
  });
};

function translateOptions(options) {
  if (options === undefined) {
    return 'offset=0&limit=25';
  }
  if (options.indexOf('limit') === -1 && options.indexOf('offset') > -1) {
    return `${options}&limit=25`;
  }
  if (options.indexOf('limit') > -1 && options.indexOf('offset') === -1) {
    return `${options}&offset=0`;
  }
  if (options.indexOf('limit') > -1 && options.indexOf('offset') > -1) {
    return options;
  }
  if (options.indexOf('limit') === -1 && options.indexOf('offset') === -1) {
    return `${options}&offset=0&limit=25`;
  }
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
const fetchExcellentTopics = (options = '') => {
  return fetchGet(`/topics?type=excellent&${options}`);
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
    case 'excellent':
      return fetchExcellentTopics(newOptions);
    default:
      return fetchDefaultTopics(newOptions);
  }
};

export const fetchNodesList = () => {
  return fetchGet('/nodes');
};

export const fetchTopic = (topic_id) => {
  return fetchGet('/topics/' + topic_id);
};

export const fetchRepliesList = (topic_id, options) => {
  const newOptions = translateOptions(options);
  return fetchGet(`/topics/${topic_id}/replies?${newOptions}`)
};
