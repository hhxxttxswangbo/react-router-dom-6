import React from 'react'
import { useParams } from 'react-router-dom'

export default function News() {
  const { id, title, content } = useParams()
  return (
    <div>
      <h3>News组件内容</h3>
      <ul>
        <li>
          消息编号：{id}
        </li>
        <li>
          消息标题：{title}
        </li>
        <li>
          消息内容：{content}
        </li>
      </ul>
    </div>
  )
}
