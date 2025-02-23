import { createWebHistory, createRouter } from 'vue-router';

import routes from '@utils/routeList';

export const router = createRouter({
  history: createWebHistory(),
  routes
});
