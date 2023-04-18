import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './compoments/Home';
import Login from './compoments/Login';
import Register from './compoments/Register';
import Provider from './provider/Provider';
import Order from './compoments/Order';
import PrivatRoute from './rout/PrivatRoute';
import Profil from './compoments/Profil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/order",
        element: <PrivatRoute> <Order></Order></PrivatRoute>,
      },
      {
        path: "/profile",
        element: <PrivatRoute> <Profil></Profil></PrivatRoute>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
