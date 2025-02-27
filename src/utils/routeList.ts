import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    strict: true,
    sensitive: true,
    component: () => import('@pages/Home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    strict: true,
    sensitive: true,
    component: () => import('@pages/About/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    strict: true,
    sensitive: true,
    component: () => import('@pages/NotFound/index.vue')
  }
];

export default routes;
