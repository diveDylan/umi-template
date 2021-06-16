/**
 * @start https://umijs.org/zh-CN/docs/getting-started
 */

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '*', component: '@/pages/404'}
  ],
  // https://umijs.org/zh-CN/docs/fast-refresh
  fastRefresh: {},
});
