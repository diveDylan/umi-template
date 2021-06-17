import React from 'react'
import { FormProps } from '@/hooks/useFormTable'
import { Form, Button, Row, Col } from 'antd'
import { NameFormItem, GenderFormItem } from '../formItems'

const SearchForm: React.FC<FormProps> = (props) => {
  return <Form style={{
    margin: 10
  }}  {...props}>
    <Row gutter={[10,10]}>
      <Col span={6}>
        <NameFormItem />
      </Col>
      <Col span={6}>
        <GenderFormItem />
      </Col>
      
      <Button htmlType="submit">查询</Button>
      <Button htmlType="reset">重置</Button>
    </Row>
    
  </Form>
}

export default SearchForm