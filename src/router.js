import Vue from 'vue';
import Router from 'vue-router';
import createListView from './views/createListView';

Vue.use(Router);
const route = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/topics', component: createListView('topics') },
    { path: '/wiki', component: createListView('wiki') },
    { path: '/sites', component: createListView('sites') },
    { path: '/homeland', component: createListView('homeland') },
    { path: '/jobs', component: createListView('jobs') },
    { path: '/', redirect: '/topics' },
  ],
});

export default route;
