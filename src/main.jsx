import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Component/Home';
import About from './assets/Component/About/About';
import Contact from './assets/Component/Contact/Contact';
import Users from './assets/Component/Users/Users';
import UserDetails from './assets/Component/UserDetails/UserDetails';

const router = new createBrowserRouter([
{
  path: "/",
  element: <Home></Home>,
  children:[
    {
      path:'/About',
      element:<About></About>
    },
    {
      path:'/Contact',
      element:<Contact></Contact>
    },
    {
      path:'/users',
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/user/:id',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      element:<UserDetails></UserDetails>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
