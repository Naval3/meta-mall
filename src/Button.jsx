import React, { memo } from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="p-2 border shadow-lg cursor-pointer border-rounded bg-primary-default hover:text-white text-semibold hover:bg-primary-dark"
    ></button>
  );
}

export default memo(Button);
