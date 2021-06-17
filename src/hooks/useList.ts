/**
 * @description table和表单搜索分页揉合在一起的hooks
 * 包含请求，分页， 表单搜索
 * @params 对接口请求一致结构 {code, data, msg}
 * data: {
 *  records: [] Array | List
 *  total: int
 * }
 */
 import { useState, useCallback, useEffect  } from 'react'
 import { useBoolean } from 'ahooks'
 import { PageInfoReq } from '@/typings/common'
 import { TablePaginationConfig } from 'antd/es/table'
 import { PAGEINFO } from '@/utils/const'
import qs from 'qs'

 
 export interface UseListProps<T = any> {
   action: (params?: any) => Promise<{
     /**
      * @description 0代表成功
      */
     code: string
     data: {
       records: Array<T>
       total: number
     } | null
   }>
   format?: (record: T) => Record<any, any>
  /**
   * @description 是否保留搜索记录，方便下次访问直接恢复
   * 使用history.replaceState做记录纪要
   */
  history?: boolean
 }
 
 
 interface Params extends PageInfoReq {
   [key: string]: any
 }
 export default function useList<T = any>(props: UseListProps<T>): {
   setParams: Function
   list: Array<T>
   params: Params
   paginationConfig: TablePaginationConfig
   tableLoading: boolean
   fetchList: Function
 } {
   const { action, format, history } = props
   const [list, setList] = useState<T[]>([])
   const [isHistory, { setTrue: setIsHistoryTrue, setFalse: setIsHistoryFalse} ] = useBoolean(false)
   const [
     tableLoading,
     { setTrue: setTableLoadingTrue, setFalse: setTableLoadingFalse },
   ] = useBoolean(false)
   
   // form search params
   const [params, setParams] = useState<Params>(PAGEINFO)
   // showTotal
   const showTotal = useCallback(
     (total) =>
       `共${total}条数据，${total && Math.ceil(total / params.pageSize)}页`,
     [params.pageSize]
   )
   // total
   const [total, setTotal] = useState<number>()
 
  useEffect(() => {
    if (isHistory) {
      const url: string = location.pathname + '?' + qs.stringify(params, { arrayFormat: 'indices', strictNullHandling: true })
      window.history.replaceState(
        {},
        `history_${Date.now()}`,
        url
      )
    }
  }, [isHistory, params])
  

   
   // 改造setParams
   function _setParams(value: any) {
    // 重置页码
    setParams((pre) => ({
      pageNo: 1,
      pageSize: pre?.pageSize,
      // 如果表单项变了会重新搜索第一页，页码则会覆盖
      ...value,
    }))
    if (history) setIsHistoryTrue()
   }
 
   // 请求action
   async function fetchList() {
     setTableLoadingTrue()
     // 执行了请求失败和没数据都应该是空
     setList([])
     // 执行请求
     try {
       const { code, data } = await action(params)
       if (data) {
        if (format) {
          // @ts-ignore
          data.records = data.records.map(format(record))
        }
        setList(data.records)
        setTotal(data.total)
       }
       
     } catch (e) {}
     setTableLoadingFalse()
   }
 
   return {
     list,
     params,
     setParams: _setParams,
     paginationConfig: {
       current: params.pageNo,
       showTotal,
       onChange: (pageNo, pageSize?) => {
         setParams((pre) => ({
            ...pre, // 需要取最新的state
            pageNo: pageNo,
            pageSize: pageSize || params?.pageSize,
          }))
       },
       total,
     },
     tableLoading,
     fetchList,
   }
 }
 