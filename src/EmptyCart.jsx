import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BsEmojiSunglassesFill } from "react-icons/bs";

function EmptyCart() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-6xl p-8 mx-auto bg-white md:p-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-xl font-extrabold text-gray-800">
            Add your chosen product here for better access later.
          </h1>

          <BsEmojiSunglassesFill className="rounded-full cursor-pointer text-9xl hover:bg-red-500" />
          <Link
            className="p-2 border cursor-pointer border-rounded bg-primary-light hover:text-white text-bold hover:bg-primary-default"
            to="/"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
export default memo(EmptyCart);
