import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './Menu.jsx'
import Signup from "./Signup.jsx";
import AddList from "./AddList.jsx";
import './index.css'  

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/menu/:user_id",
    element: <Menu />
  },
  {
    path: "/add/:user_id",
    element: <AddList />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);