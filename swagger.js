/**
 * @description 接口处理
 */
const Sardine = require('sardine');

const sardine = new Sardine({
  url: 'https://petstore.swagger.io/v2/swagger.json',
  port: 9000,
});

// const main = require('@dylan92/nemo');
// // const fetch = require('node-fetch')
// const { generateColumns } = require('sandfish');

// // 业务系统环境映射
// const envMap = {
//   test03: 'test03',
//   test05: 'test05',
//   dev: 'dev',
//   stage: 'stage',
// };
// // swagger的环境
// const env = 'test03';

// main({
//   // remote swagger api json
//   // url: 'remote',
//   // requestPath: '@/utils/request',
//   url: 'https://petstore.swagger.io/v2/swagger.json',
//   // output path
//   output: './src/api',
// });

// // // 根据数据库生成前端用的列配置
// const config = {
//   connectionConfig: {
//     host: 'localhost',
//     user: 'root',
//     password: '949440946',
//   },
//   dataBaseNames: ['DYLAN'], // 数据库名字
//   outputPath: './sql', // 输出目录
//   ignoreTableNames: ['database_history'], // 不生成表格表单配置的黑名单
//   needFormConfig: true, // 是否需要生成表单配置， 默认关闭
// };
// generateColumns(config);
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
