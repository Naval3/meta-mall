import React from "react";
// import Input from "./Input";
import Button from "./Button";
// import { withFormik } from "formik";

// ComponentDescription

function CheckoutPage() {
  return (
    <div>
      <form
        onSubmit="submit"
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h2 className="text-2xl font-bold">Checkout</h2>
        <h2 className="text-2xl font-bold">Billing details</h2>
        <div className="p-10 my-8 space-y-3 border border-gray-300 rounded ">
          <input
            placeholder="Name"
            type="text"
            className="w-full p-2 border border-gray-400 outline-gray-700"
          />
          <input
            placeholder="Mobile number"
            type="text"
            className="w-full p-2 border border-gray-400 outline-gray-700"
          />
          <Button className="cursor-pointer" type="submit">
            CONTINUE
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
