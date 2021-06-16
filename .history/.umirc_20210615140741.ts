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
      icon: 'testicon',
      // 更多功能查看
      // https://beta-pro.ant.design/docs/advanced-menu
      // ---
      // 新页面打开
      target: '_blank',
      // 不展示顶栏
      // headerRender: true,
      // 不展示页脚
      // footerRender: false,
      // 不展示菜单
      menuRender: true,
      // 不展示菜单顶栏
      menuHeaderRender: true,
      // 权限配置，需要与 plugin-access 插件配合使用
      access: 'canRead',
      // 隐藏子菜单
      hideChildrenInMenu: true,
      // 隐藏自己和子菜单
      hideInMenu: false,
      // 在面包屑中隐藏
      hideInBreadcrumb: true,
      // 子项往上提，仍旧展示,
      // flatMenu: true,
    },
    { path: '*', component: '@/pages/404/index'}
  ],
  // https://umijs.org/zh-CN/docs/fast-refresh
  fastRefresh: {},
});
