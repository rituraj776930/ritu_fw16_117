import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ image_url, name, price, strikedoffprice, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="group shadow-lg pb-4 cursor-pointer hover:scale-110 transition-transform duration-300 ease-out"
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={image_url}
            alt="name"
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700 px-4">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900 px-4">${price}</p>
        <span className="line-through px-4">${strikedoffprice}</span>
      </div>
    </>
  );
};

export default Item;
