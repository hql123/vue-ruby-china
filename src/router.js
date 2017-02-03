import Vue from 'vue';
import Router from 'vue-router';
import createListView from './views/createListView';

Vue.use(Router);
const route = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top/:page(\\d+)?', component: createListView('top') },
    { path: '/', redirect: '/top' },
  ],
});

export default route;
