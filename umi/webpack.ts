/**
 * @decription umi chain webpack 
 * @document https://umijs.org/zh-CN/config#chainwebpack
 * https://github.com/mozilla-neutrino/webpack-chain
 */
// @ts-ignore
export function chainWebpack(config, { env, webpack, createCSSRule}) {
  /**
   * https://umijs.org/zh-CN/config#chunks
   * * @notice 结合chunks使用分片
   * * 配置chunks: ['vendors', 'common', 'umi'],
   */
  config.merge({
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 3,
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test({ resource }: any) {
              return /[\\/]node_modules[\\/]/.test(resource)
            },
            priority: 10,
          },
          // 业务共用chunks
          common: {
            name: 'common',
            test({ resource }: any) {
              return /[\\/]src[\\/](components|utils|layouts|hooks|api|typings)[\\/]/.test(
                resource
              )
            },
            priority: 14,
          },
        },
      },
    },
  })
}