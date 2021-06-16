// https://beta-pro.ant.design/docs/layout-cn
export default [
  { path: '/', component: '@/pages/index' },
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
  // one children
  {
    path: '/oneChildren',
    name: '一个子元素都没有',
    routes: []
  },
  {
    path: '/customer',
    name: '客户管理',
    routes: [
      {
        path: '/',
        redirect: '/customer/my'
      },
      {
        path: '/customer/my',
        name: '我的客户'
      },
      {
        path: '/customer/team',
        name: '团队客户',
        routes: [
          {
            path: '/customer/team/china',
            name: '中国区',
          },
          {
            path: '/customer/team/usa',
            name: '美国区',
          },
        ]
      }
    ]
  },
  { exact: true, path: '*', redirect: '/404' },
]