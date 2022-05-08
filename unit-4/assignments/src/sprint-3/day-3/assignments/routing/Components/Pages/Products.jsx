import React from "react";
import { Link, Outlet } from "react-router-dom";

const pages = [
  { id: 1, name: "Men" },
  { id: 2, name: "Women" },
];

const Products = () => {
  return (
    <>
      <h1 className="text-center text-6xl my-4">Products</h1>
      <div>
        <div className="text-center my-4">
          {pages.map((item) => {
            return (
              <div className="inline-block" key={item.id}>
                <Link
                  className="inline-block text-center cursor-pointer bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700 mx-2"
                  to={`product/${item.name}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Products;
