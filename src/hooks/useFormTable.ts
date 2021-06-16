
import { useEffect, useState } from 'react'
import useList, { UseListProps } from './useList'
import { Form} from 'antd'
import qs from 'qs'

export interface FormTable extends UseListProps {
  // 依赖更改重新请求接口的定义
  deps: any[]
  /**
   * @description 自行控制回调的请求
   */
  before?: (e: Function) => void
  /**
   * @description 搭配formSetFieldsDeps使用
   */
  beforeFormSetFields?: (e: Function) => void
  formSetFieldsDeps?: any[]
}

 export function useFormTable({
   action,
   deps,
   before,
   format,
   history,
   beforeFormSetFields,
   formSetFieldsDeps
 }: FormTable) {

  const {
    list,
    params,
    setParams,
    paginationConfig,
    tableLoading,
    fetchList,
  } = useList({
    action,
    format,
    history
  })
  const [form] = Form.useForm()
  // 设置表单和初始请求并发互不影响
  useEffect(() => {
    if (history && location.search) {
      setParams(qs.parse(location.search.substring(1)))
    }
  }, [])

  // setFields
  useEffect(() => {
    if (history && location.search && beforeFormSetFields) {
      beforeFormSetFields(
        ()=>form.setFields(
          // @ts-ignore
          qs.parse(location.search.substring(1))
        )
      )
    }
  }, formSetFieldsDeps || [])

  const formProps = {
    clear: () => {
      setParams({})
    },
    submit: (e: object | undefined) => {
      setParams(e)
    },
  }
  useEffect(() => {
    if (before) {
      before(fetchList)
    }
    else fetchList()
  }, [params, ...deps])

  return {
    list,
    paginationConfig,
    tableLoading,
    form,
    formProps
  }
}