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
    layout: 'side',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/welcome',
      component: '@/pages/index',
      name: '欢迎', // 兼容此写法
      icon: '*_*',
      // 更多功能查看
      // 不展示顶栏
      // headerRender: true,
      // 不展示页脚
      // footerRender: false,
      // 不展示菜单
      // 权限配置，需要与 plugin-access 插件配合使用
      access: 'canRead',
      // 子项往上提，仍旧展示,
      // flatMenu: true,
    },
    { path: '*', component: '@/pages/404/index'}
  ],
  // https://umijs.org/zh-CN/docs/fast-refresh
  fastRefresh: {},
});
