import Home from '../pages/Home'
import About from '../pages/About';
import News from '../pages/News';
import Message from '../pages/Message';

import { Navigate } from 'react-router-dom'

export default [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        // 子路由不加/
        path: 'news/:id/:title/:content',
        element: <News />,
      },
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/',
    element: <Navigate to="/home" />
  },
]
