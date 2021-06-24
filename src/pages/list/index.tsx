import React from 'react';
import { Table,  } from 'antd';
import {  columns as basicColumns } from './config'
import { useGithubList } from './hooks'
import Opertaion from './components/operation'
import SearchForm from './components/searchForm'


export default () => {
  const columns = basicColumns.concat({
    title: '操作',
    dataIndex: 'option',
    render: (text, record) => <Opertaion record={record} />
  })

  const {
    list,
    tableLoading,
    formProps
  } = useGithubList()

  return (<>
    <SearchForm {...formProps}/>
    <Table
      rowKey={ record => record.id}
      dataSource={list}
      columns={columns}
      loading={tableLoading}
    >
    </Table>
  </>);
};
