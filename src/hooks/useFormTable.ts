
import { useEffect } from 'react'
import useList, { UseListProps } from './useList'
import { FormInstance } from 'antd/es/form'
import { TablePaginationConfig } from 'antd/es/table'
import { Form} from 'antd'
import qs from 'qs'

export interface FormTable extends UseListProps {
  // 依赖更改重新请求接口的定义
  deps?: any[]
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

export interface FormProps {
  onReset: () => void
  onFinish: (e:any) => void
  form: FormInstance
}

export default function useFormTable<T>({
   action,
   deps,
   before,
   format,
   history,
   beforeFormSetFields,
   formSetFieldsDeps
 }: FormTable): {
   list: Array<T>
   tableLoading: boolean
   paginationConfig: TablePaginationConfig
   formProps: FormProps
 } {
  const search = qs.parse(location.search.substring(1))
  const {
    list,
    params,
    setParams,
    paginationConfig,
    tableLoading,
    fetchList,
  } = useList<T>({
    params: history ? search : {},
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
    if (history && location.search) {
      const setForm = () => form.setFieldsValue(search)
      beforeFormSetFields ? beforeFormSetFields(
        setForm
      ) : setForm()
    }
  }, formSetFieldsDeps || [])

  const formProps = {
    onReset: () => {
      setParams({})
    },
    onFinish: (e: object | undefined) => {
      setParams(e)
    },
    form
  }
  useEffect(() => {
    if (before) {
      before(fetchList)
    }
    else fetchList()
  }, [params, ...(deps||[])])

  return {
    list,
    paginationConfig,
    tableLoading,
    formProps
  }
}