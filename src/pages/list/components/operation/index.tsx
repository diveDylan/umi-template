import React from 'react'
import { GithubIssueItem } from '../../config'

const Opertaion: React.FC<{
  record: GithubIssueItem
}> = ({ record,}) => <a href={record.url} target="_blank" rel="noopener noreferrer" key="view"> 查看 </a>

export default Opertaion 