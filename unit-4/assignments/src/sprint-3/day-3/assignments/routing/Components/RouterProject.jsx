import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import "../Pages/Styles.css";
import Footer from "../Pages/Footer";
import Product from "../Pages/Product";
import Error from "../Pages/Error";
import IndividualProduct from "../Pages/IndividualProduct";
import Login from "../Pages/Login";
import { RequiredAuth } from "./RequiredAuth";
import Cart from "../Pages/Cart";

const RouterProject = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="product/:id" element={<Product />} />
        </Route>
        <Route
          path="products/product/:cat/:id"
          element={<IndividualProduct />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/shoppingcart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterProject;
