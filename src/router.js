
import Vue from 'vue';
import Router from 'vue-router';
import createListView from './views/createListView';
import Wiki from './views/Wiki';
import Sites from './views/Sites';

Vue.use(Router);
const route = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/topics', component: createListView('default') },
    { path: '/topics/popular', component: createListView('popular') },
    { path: '/topics/no_reply', component: createListView('no_reply') },
    { path: '/topics/last', component: createListView('recent') },
    { path: '/wiki', component: Wiki },
    { path: '/sites', component: Sites },
    { path: '/homeland', component: createListView('default') },
    { path: '/jobs', component: createListView('default') },
    { path: '/', redirect: '/topics' },
  ],
});

export default route;
