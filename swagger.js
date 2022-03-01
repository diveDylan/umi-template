/**
 * @description 接口处理
 */
const Sardine = require('sardine');

const main = require('@pregalaxyer/nemo');
// const fetch = require('node-fetch')

// 业务系统环境映射
const envMap = {
  test03: 'test03',
  test05: 'test05',
  dev: 'dev',
  stage: 'stage',
};
// swagger的环境
const env = 'test03';

main({
  // remote swagger api json
  // url: 'remote',
  // requestPath: '@/utils/request',
  url: 'https://petstore.swagger.io/v2/swagger.json',
  port: 9000,
});

// // 根据字典生成前端ts字典

// const { generateEnums } = require('enum-maker');
// const fetch = require('node-fetch');

// fetch('https://openapi-gateway-test03.ocjfuli.com/openapigw/app/crm/code/all', {
//   method: 'POST',
// })
//   .then((res) => res.json())
//   .then((res) => {
//     if (res.code === '0') {
//       generateEnums({
//         // 字典数据
//         enums: res.data,
//         outputPath: './src/sandfish',
//         // 格式化字典格式
//         formatterFn: (enumsItem) => {
//           // do something
//           return {
//             label: someLabel,
//             value: someValue,
//           };
//         },
//         // 权限
//         permissionKey: 'ResourceEnum',
//       });
//     }
//   });
