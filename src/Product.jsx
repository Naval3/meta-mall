import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="max-w-xs bg-white">
      <Link to={"/products/" + id}>
        <div className="w-full aspect-square">
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            src={thumbnail}
          />
        </div>
        <div className="text-xs text-gray-500">{category}</div>
        <div className="text-base">{title}</div>
        <div className="font-semibold">${price}</div>
      </Link>
    </div>
  );
}

export default Product;
