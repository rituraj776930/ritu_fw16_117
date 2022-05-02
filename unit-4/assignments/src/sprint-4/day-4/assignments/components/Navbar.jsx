import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 , color : "white" , fontSize : "30px" , display : "flex" , gap : "20px"}}>

      <div><Link to = "/">Home</Link></div>
      <div><Link to = "/about">About</Link></div>
      <div><Link to = "/products">Products</Link></div>
      <div><Link to = "/products/men">Men</Link></div>
      <div><Link to = "/products/women">Women</Link></div>
      <div><Link to = "/products/kids">Kids</Link></div>
      <div><Link to = "/products/homedecor"></Link>Home Decor</div>
    </nav>
  );
};
