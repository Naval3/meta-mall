import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { withFormik } from "formik";
import { WithUser, WithAlert } from "./WithProvider";

function callSignupApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.name,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
        type: "sucess",
        message: "signUp sucessfull new account created",
      });
    })
    .catch(() => {
      console.log("invalid credential");
      bag.props.setAlert({
        type: "error",
        message: "Check your input field ,signUp failed !",
      });
    });
}

const schema = yup.object().shape({
  name: yup.string().min(3, "too short name"),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("this is reqired field")
    .min(6, "Password must minimum 6 charchters long"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function SignUpPage({
  handleSubmit,
  handleBlur,
  values,
  errors,
  handleChange,
  touched,
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-600">
          Sign Up
        </h2>
        <div className="p-8 space-y-3 border border-gray-300 rounded ">
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.name}
            error={errors.name}
            value={values.name}
            placeholder="Name "
            type="text"
            required
            name="name"
            id="name"
            lable="Name"
            className="w-full py-2 pl-5 border border-gray-500 rounded-sm focus:ring-gray-600"
          />

          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
            value={values.email}
            className="w-full py-2 pl-5 border border-gray-500 rounded-sm focus:ring-gray-600 "
            placeholder="Email address"
            type="email"
            required
            name="email"
            id="email-adress"
          />

          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            error={errors.password}
            value={values.password}
            className="w-full py-2 pl-5 border border-gray-500 rounded-sm focus:ring-gray-600 "
            placeholder="Create password"
            type="password"
            required
            name="password"
            id="newPassword"
          />

          <Button className="cursor-pointer" type="submit">
            CONTINUE
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
        </div>
      </form>
    </div>
  );
}
const myHOC = withFormik({
  initialValues: initialValues,
  handleSubmit: callSignupApi,
  validationSchema: schema,
  validateOnMount: true,
});
export default WithAlert(WithUser(myHOC(SignUpPage)));
