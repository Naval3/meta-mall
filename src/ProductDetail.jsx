import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Button from "./Button";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const pr = getProductData(id);
      pr.then(function (response) {
        setProduct(response);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleInputInitial() {
    setCount(1);
    setLoading(true);
  }

  function handleValue(event) {
    setCount(+event.target.value);
  }

  function onButtonClick() {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="flex flex-col p-2 mx-10 my-16 bg-white md:px-10 md:py-16 md:mx-24">
        <div className="gap-5 md:flex">
          <Link to="/" onClick={handleInputInitial}>
            <AiFillHome className="inline text-5xl hover:text-primary-default" />
          </Link>
          <div className="transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <img src={product.thumbnail} />
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl ">{product.title}</h1>
            <p className="py-4 font-bold text-gray-600 md:text-xl">
              ${product.price}
            </p>

            <p className="pb-4 font-medium text-gray-600 text-start">
              {product.description}
            </p>

            <input
              value={count}
              onChange={handleValue}
              className="p-1 border border-black w-14"
              type="number"
            />

            <Button onClick={onButtonClick}>ADD TO CART</Button>

            <hr className="m-3" />

            <p>
              Category:
              <span className="text-primary-default">{product.category}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            {id > 1 && (
              <Link
                onClick={handleInputInitial}
                className="flex items-center mt-4"
                to={"/products/" + (id - 1)}
              >
                <HiOutlineArrowCircleLeft className="inline text-4xl" />
              </Link>
            )}
          </div>

          <div>
            <Link
              onClick={handleInputInitial}
              className="flex items-center mt-4"
              to={"/products/" + (id + 1)}
            >
              <HiOutlineArrowCircleRight className="inline text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
