import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import Cart from "../MainMenu/Cart";
import MainMenu from "../MainMenu/MainMenu";
import Products from "../MainMenu/Products";
import Login from "../Users/Login";
import { styled } from "@mui/system";
import "./NavBar.css";

//styles
const NavStyles = styled('div')({
  display:'flex',
 justifyContent:'space-around',
 padding:'12px',
 background:'grey'
})
 

 


const NavNar = () => {
  return (
    <>
      <NavStyles>
        <div className="logoSec" style={{ display: "flex" }}>
          <img src={Logo} alt="logo" width={"80px"} />
          <h6 style={{textAlign:'center'}}>Delivary</h6>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search Something..."
          style={{ height: "30px", padding: "20px", margin: "12px" }}className='InputBase'
        />
       

        <div className="linkSec">
          <ul className="links" style={{ display: "flex", listStyle: "none" }}>
            <li>
              <Link  to={"/home"} element={<MainMenu />}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} element={<Products />}>
                Products
              </Link>
            </li>

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
      </NavStyles>
    </>
  );
};

export default NavNar;
