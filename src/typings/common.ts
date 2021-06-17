import { FormItemProps } from "antd/es/form";

export interface PageInfoReq {
  pageNo: number
  pageSize: number
}

export interface FormItemComponents<T=any> {
  itemProps?: FormItemProps
  inputProps?: T
}