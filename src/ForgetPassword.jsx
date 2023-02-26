import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "./Button";
import { Link } from "react-router-dom";

function ForgotPassword() {
  function frgtPswdApi(values) {
    // console.log('callLoginApi')
    console.log(values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: frgtPswdApi,
    validationSchema: schema,
  });

  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
        >
          <h1 className="text-xl font-bold text-center">Forgot Password</h1>
          <h2 className="font-bold">Enter Your Email</h2>
          <input
            onBlur={handleBlur}
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            autoComplete="email"
            required
            type="email"
            className="m-2 text-xl border rounded"
            placeholder="Email"
          />
          {touched.email && errors.email && (
            <div className="p-2 text-2xl rounded text-primary-default font-Shadows">
              {errors.email}
            </div>
          )}
          <Button
            disabled={!isValid}
            type="submit"
            className="p-2 m-2 text-2xl rounded-lg disabled:bg-neutral-700 disabled:hover:none"
          >
            Get OTP
          </Button>
          <div>
            <p>
              Already have an account?
              <Link to="/login">
                <span className="inline font-bold text-gray-600 hover:text-primary-default">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
