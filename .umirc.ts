/**
 * @start https://umijs.org/zh-CN/docs/getting-started
 */

import { defineConfig } from 'umi';
import routes from './umi/route'
import { getExternals } from './umi/externals'
import { chainWebpack } from './umi/webpack'

const {headScripts, externals} = getExternals()
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  externals,
  headScripts,
  chunks: ['vendors', 'common', 'umi'],
  chainWebpack,
  // https://umijs.org/zh-CN/plugins/plugin-layout
  layout: {
    name: 'Ant Design template',
    // logo: '',
    locale: false,
    layout: 'sidemenu',
  },
  // https://beta-pro.ant.design/docs/layout-cn
  routes,
  // https://umijs.org/zh-CN/docs/fast-refresh
  fastRefresh: {},
  webpack5: {},
});
