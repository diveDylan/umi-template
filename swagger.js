/**
 * @description 接口处理
 */

const main = require('@dylan92/nemo')
const fetch = require('node-fetch')

// 业务系统环境映射
const envMap = {
  test03: 'test03',
  test05: 'test05',
  dev: 'dev',
  stage: 'stage',
}
// swagger的环境
const env = 'test03'

main({
  // remote swagger api json
  url: 'remote url',
  // output path
  output: './src/api'
})

const { generateEnums, generateColumns } = require('sandfish');
// 根据数据库生成前端用的列配置
const config = {
  host: 'localhost',
  user: 'root',
  password: '949440946',
  dataBaseNames: ['DYLAN'], // 数据库名字
  outputPath: './sql', // 输出目录
  ignoreTableNames: ['database_history'], // 不生成表格表单配置的黑名单
  needFormConfig: true, // 是否需要生成表单配置， 默认关闭
};
generateColumns(config);
// 根据字典生成前端ts字典
fetch('remoteurl', {
  method: 'POST'
}).then(res => res.json())
  .then(res => {
    generateEnums({
      // 字典数据
      enums: res.data,
      outputPath: './src/enum',
      // 格式化字典格式
      formatterFn: (enumsItem) => {
        // do something
        return {
          label: enumsItem.label,
          value: enumsItem.value,
        };
      },
      // 权限
      permissionKey: 'ResourceEnum'
    }
    )
  })

