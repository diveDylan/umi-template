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
  // https://beta-pro.ant.design/docs/layout-cn
  routes: [
    // { path: '404', component: '@/pages/404/index',  menuRender: false},
    // { path: '/', component: '@/pages/index' },
    {
      path: '/welcome',
      component: '@/pages/index',
      name: '欢迎', // 兼容此写法
      // https://beta-pro.ant.design/docs/new-page-cn#%E5%9C%A8%E8%8F%9C%E5%8D%95%E4%B8%AD%E4%BD%BF%E7%94%A8-iconfont
      icon: '*_*———',
      // 建议这里用sso的权限码
      access: 'canUse',
    },
    {
      path: '/test',
      name: '测试', // 兼容此写法
      icon: '*_*——',
      // 建议这里用sso的权限码
    },
    {
      path: '/customer',
      name: '客户管理',
      routes: [
        {
          path: '/',
          redirect: '/my'
        },
        {
          path: '/my',
          name: '我的客户'
        },
        {
          path: '/team',
          name: '团队客户',
          routes: [
            {
              path: '/china',
              name: '中国区',
            },
            {
              path: '/usa',
              name: '美国区',
            },
          ]
        }
      ]
    }

    // { exact: true, path: '*', redirect: '/404' },

  ],
  // https://umijs.org/zh-CN/docs/fast-refresh
  fastRefresh: {},
});
