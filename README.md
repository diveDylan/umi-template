# umi project

⚡️一个极简的`umi+typescript`的后台模板

## 起步

安装依赖

```bash
$ yarn
```

开始体验

```bash
$ yarn start
```

## 使用openApi相关

自动生成`swagger ts `文件[🐠nemo](https://github.com/diveDylan/nemo)




```js
const main = require('@dylan92/nemo')

main({
  url: 'remote-swaggerjson',
  output: 'outputpath'
})

```


字典（字典需要强语义化，不能使用数字作为key）、数据库列、表格相关[sandfish](https://github.com/diveDylan/sandfish)
`sandfish`可以生成字典、antd列配置、表单配置、权限码
```ts
// 字典，语义化写法
if (someValue === StatusEnum.SUCCESS) {

}
// 列
/**
 * @description 名字
 */
export const name: ColumnType<any> = {
  title: '名字',
  dataIndex: 'name'
}
// 权限码
// route.ts
const routes = [
  {
    name: '我的客户',
    access: PermissionEnum.CUSTOMER_MY // customer:my
  }
]


```

more: `swagger.js`

## Hooks
. 👋useList 还看得过去的分页hooks

. 👍useFormTable 组合搜索表单和表格的分页hooks，适合摸鱼🐟人群使用，支持用户历史记录操作恢复，刷新依旧有效💪

## 关于目录

参照`umi`官方目录，定义了：
1. `hooks`目录结构用于全局hooks
2. `utils`目录用于全局🔧函数
3. `typings`目录用于全局类型



## 开发

### layout & route

继承了`antdpro/layout`和`routes`的扩展，利用`access`属性，配合`@umijs/plugin-access`和`@umijs/plugin-initital-state`插件只需要五分钟即可接入业务系统权限，配合`sandfish`生成的权限枚举，简直🤤

### 页面开发结构


```text
// 正常页面
-- pageName // 尽量命名和路由一直，url的定义本就是资源，也方便vscode等编辑器查找目录
 ｜ index.tsx  // 组件核心文件
 ｜ index.less // 组件样式
 ｜--components // 当前页面的组件目录
 ｜--hooks // 当前页面的hooks目录 


// 模块开发
 -- moduleName // 模块名称
  ｜--list  // 当前模块列表页
  ｜--create // 创建页
  ｜--detail // 详情页
  ｜--edit // 编辑页
  ｜--components // 组件目录
  ｜--hooks // hooks目录
```
 
### 接口开发的规范

核心: **我们不应该直接更改接口原由字段，充分保证数据的纯性，不会出现变种**。
给所有的返回数据提供一个`format`函数，处理数据转移，转移规范应充分表达语义
```ts
// data { status: 'success'}
function format(data){
  // dictionaryMap 后端字典
  data.statusText = dictionaryMap.Status[data.status]
  return data
}

```









