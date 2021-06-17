import React from 'react'
import { Form, Input, Select } from 'antd'
import { FormItemComponents } from '@/typings/common'
import { ReactChild } from 'react'
const { Item } = Form
interface FormItemComponent extends FormItemComponents {
  name: string
  label: string
  children: React.ReactNode | ReactChild
}
export const FormItemComponent:  React.FC<FormItemComponent> = ({
  name,
  label,
  itemProps,
  children,
}) => <Item name={name} label={label} {...itemProps}>
  { children}
</Item>
// if you use sandfish just import formconfig here
export const NameFormItem: React.FC<FormItemComponents> = props => <FormItemComponent name="name" label="姓名" >
  <Input {...props.inputProps}></Input>
</FormItemComponent>
export const GenderFormItem: React.FC<FormItemComponents> = props => <FormItemComponent name="gender" label="姓名" >
  <Select options={[{ label: '男', value: 'male'}, { label: '女', value: 'female'}]} {...props.inputProps} />
</FormItemComponent>