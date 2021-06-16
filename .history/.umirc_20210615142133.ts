/**
 * @start https://umijs.org/zh-CN/docs/getting-started
 */

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // https://umijs.org/zh-CN/plugins/plugin-layout
  layout: {

    name: 'Ant Design template',
    // logo: '',
    locale: false,
    layout: 'sidemenu',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/welcome',
      component: '@/pages/index',
      name: '欢迎', // 兼容此写法
      icon: '*_*———',
      // 建议这里用sso的权限码
      access: 'canRead',
    },
    { path: '404', component: '@/pages/404/index'}
  ],
  // https://umijs.org/zh-CN/docs/fast-refresh
  fastRefresh: {},
});
