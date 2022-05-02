import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid, Select } from "./Styled";

export const Products = () => {
  const temp = useSelector((state)=>state.data)
  const [option1 , setoption1] = useState("")
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch)
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    setoption1(e)
    console.log(option1)
    
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={(e)=>handleSort(e.target.value)}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {temp.map((elem)=>{
          return (
            <ProductCard item = {elem} />
          )
        })}
      </Grid>
    </>
  );
};
