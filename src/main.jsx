import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';
// import { createBrowserRouter, RouterProvider,} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}

    <RouterProvider router={Router} ></RouterProvider>
  </React.StrictMode>,
)
