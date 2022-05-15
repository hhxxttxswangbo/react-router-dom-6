import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  const [Homes] = useState([
    { id: '001', title: '标题1', content: "内容1" },
    { id: '002', title: '标题2', content: "内容2" },
    { id: '003', title: '标题3', content: "内容3" },
  ])
  return (
    <div>
      <h1>Home组件内容,携带Params参数给News组件</h1>
      <h3>News</h3>
      <ul>
        {Homes.map((h) => {
          return (
            <li key={h.id}>
              {/* 携带Params参数给News组件 */}
              <Link to={`news/${h.id}/${h.title}/${h.content}`}>{h.title}</Link>
            </li>
          )
        })}
      </ul>
      {/* 子组件News展示的位置 */}
      <Outlet />
      <h3>Message</h3>
    </div>
  )
}
