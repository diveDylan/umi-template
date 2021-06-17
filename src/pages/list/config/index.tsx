import { ColumnType, ColumnsType } from 'antd/es/table';
import { Tag, Space, Menu } from 'antd';

export type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

export const index: ColumnType<any> = {
  dataIndex: 'index',
  width: 48,
}
export const title: ColumnType<any> = {
  title: '标题',
  dataIndex: 'title',
}
export const status: ColumnType<any> = {
  title: '状态',
  dataIndex: 'state',

}
export const label: ColumnType<any> = {
  title: '标签',
  dataIndex: 'labels',
  render: (_, record) => (
    <Space>
      {/* @ts-ignore */}
      {record.labels.map(({ name, color }) => (
        <Tag color={color} key={name}>
          {name}
        </Tag>
      ))}
    </Space>
  ),
}

export const columns: ColumnsType<any> = [
  index,
  title,
  status,
  label

];