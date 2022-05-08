import React from "react";
import { Logo, NavbarDiv } from "../Components/Main.styled";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarDiv>
        <div>
          <Logo>
            <Link to={"/"}>ROUTER</Link>
          </Logo>
        </div>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <ShoppingBagIcon onClick={() => navigate("/shoppingcart")} />
        </div>
      </NavbarDiv>
    </>
  );
};

export default Navbar;
