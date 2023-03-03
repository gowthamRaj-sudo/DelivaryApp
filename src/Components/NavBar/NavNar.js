import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import Cart from "../MainMenu/Cart";
import MainMenu from "../MainMenu/MainMenu";
import Products from "../MainMenu/Products";
import Login from "../Users/Login";

const NavNar = () => {
  return (
    <>
      <div>
        <div className="logoSec">
          <img src={Logo} alt="logo" width={"80px"} />
          <h6>Delivary</h6>
        </div>
        <div className="linkSec">
          <ul  className="links">
            <li>
              <Link to={"/home"} element={<MainMenu />}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} element={<Products />}>
                Products
              </Link>
                      </li>
                      <li><input type='text' name='search' placeholder="Search Something..."/></li>
            <li>
              <Link to={"/cart"} element={<Cart />}>
                Cart
              </Link>
            </li>
            <li>
              <Link to={"/login"} element={<Login />}>
                Login
              </Link>
            </li>
                  </ul>
                  
              </div>
              
      </div>
    </>
  );
};

export default NavNar;
