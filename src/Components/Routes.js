import React from "react";
import { useRoutes } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
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
  ]);
};

export default Routes;
