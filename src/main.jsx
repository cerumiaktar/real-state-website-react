import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import RentFlats from './components/RentFlats/RentFlats.jsx';
import SaleFlats from './components/SaleFlats/SaleFlats.jsx';
import AllBlogs from './components/AllBlogs/AllBlogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/rent',
        element: <RentFlats></RentFlats>
      },
      {
        path:'/sale',
        element:<SaleFlats></SaleFlats>
      },
      {
        path:'/allBlogs',
        element:<AllBlogs></AllBlogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
