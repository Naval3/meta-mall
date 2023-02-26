import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Input from "./Input";
import { withFormik } from "formik";
import Button from "./Button";
import axios from "axios";
import { WithUser, WithAlert } from "./WithProvider";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({ type: "sucess", message: "login sucessFull " });
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "Invalid credential ,login failed !",
      });
    });
}

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be 6 characters long"),
});

const initialValues = {
  email: "",
  password: "",
};

function LoginPage({
  handleSubmit,
  handleBlur,
  values,
  errors,
  handleChange,
  touched,
}) {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
        >
          <h2 className="text-2xl font-bold text-center text-gray-600">
            Login
          </h2>

          <div className="p-8 space-y-3 border border-gray-300 rounded ">
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              error={errors.email}
              value={values.email}
              lable="Email-adress"
              id="email-address"
              placeholder="Email address"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full"
            />
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.password}
              error={errors.password}
              value={values.password}
              lable="password"
              id="password"
              placeholder="password"
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full"
            />

            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="font-semibold text-gray-600">
              Remember me
            </label>
            <div>
              <Button className="cursor-pointer" type="submit">
                LOG IN
              </Button>
            </div>

            <p>
              Forget password?
              <Link to="/reset">
                <span className="inline font-bold text-gray-600 hover:text-primary-default">
                  Reset
                </span>
              </Link>
            </p>

            <div>
              <p>
                Don't have an account?
                <Link to="/signup">
                  <span className="inline font-bold text-gray-600 hover:text-primary-default">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const myHOC = withFormik({
  initialValues: initialValues,
  handleSubmit: callLoginApi,
  validationSchema: schema,
  validateOnMount: true,
});
export default WithAlert(WithUser(myHOC(LoginPage)));
