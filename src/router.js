/*eslint-disable*/
import Vue from 'vue';
import Router from 'vue-router';
const Dashboard = resolve => require(['./views/Dashboard'], resolve);
const TopicDetail = resolve => require(['./views/TopicDetail'], resolve);
const Wiki = resolve => require(['./views/Wiki'], resolve);
const Sites = resolve => require(['./views/Sites'], resolve);
import createListView from './views/createListView';

Vue.use(Router);
const route = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/topics', component: createListView('default') },
    { path: '/topics/popular', component: createListView('popular') },
    { path: '/topics/no_reply', component: createListView('no_reply') },
    { path: '/topics/last', component: createListView('recent') },
    { path: '/topics/excellent', component: createListView('excellent') },
    { path: '/topics/:id', component: TopicDetail },
    { path: '/homeland', component: createListView('default') },
    { path: '/jobs', component: createListView('default') },
    { path: '/wiki', component: Wiki },
    { path: '/sites', component: Sites },
  ],
});

export default route;
