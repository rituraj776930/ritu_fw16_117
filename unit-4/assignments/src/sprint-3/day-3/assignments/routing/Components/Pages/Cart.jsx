import React, { useEffect, useState } from "react";
import Item from "./Item";

const Cart = () => {
  const [cartdata, setCartData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let res = await fetch(`http://localhost:3000/cart`);
    let data = await res.json();
    setCartData(data);
  };
  return (
    <>
      <h1 className="text-center mt-20 text-6xl">Cart</h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-4/5 mx-auto mt-4">
        {cartdata.map((item) => {
          return (
            <div key={item.id}>
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
