import React from "react";

function Input({
  lable,
  error,
  touched,
  name,
  id,
  icon,
  className,
  value,
  ...rest
}) {
  let borderClass = " border-gray-500 focus:border-green-500 ";
  if (error && touched) {
    borderClass = " border-red-500";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only ">
        {lable}
      </label>

      <div className="flex items-center mt-4">
        <input
          name={name}
          className={
            "py-2 pl-3 border rounded-sm ring-gray-400 " +
            className +
            borderClass
          }
          id={id}
          {...rest}
        />
      </div>
      {touched && error && (
        <p className="mt-1 font-thin text-red-600">{error}</p>
      )}
    </div>
  );
}
export default Input;
