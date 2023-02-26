import React from "react";
import { ImSpinner4 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen grow text-primary-default">
      <ImSpinner4 className="text-6xl animate-spin" />
    </div>
  );
}

export default Loading;
