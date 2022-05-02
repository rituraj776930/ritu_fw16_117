import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

const MainRoutes = () => {
  return <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/> 
      <Route path="/about" element = {<About/>}/> 
      <Route path="/products" element = {<Products/>}/>
    </Routes>
  
  
  </>;
};
export { MainRoutes };
