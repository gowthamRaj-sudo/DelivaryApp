import React from "react";
import { useRoutes } from "react-router-dom";
import Cart from "./MainMenu/Cart";
import MainMenu from "./MainMenu/MainMenu";
import Products from "./MainMenu/Products";
import Login from "./Users/Login";

const Routes = () => {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <MainMenu />,
      },
      {
          path: '/products',
          element: <Products />
      },
      {
          path: '/cart',
      element:<Cart/>},
  ]);
};

export default Routes;
