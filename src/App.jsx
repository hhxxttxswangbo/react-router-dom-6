import React from 'react'
import { Link, useRoutes } from 'react-router-dom';
import Routes from './routes/index'

export default function App() {
  const element = useRoutes(Routes)
  return (
    <div>
      <h1>React Router Demo</h1>
      <h2><Link to="/home">Home</Link></h2>
      <h2><Link to="/about">About</Link></h2>
      {/* 展示区 */}
      {element}
    </div>
  )
}
