import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "./not-found.png";
import Button from "./Button";

function NotFound() {
  return (
    <div className="flex items-center justify-center grow">
      <div className="flex flex-col items-center space-y-3">
        <div>
          <img src={NotFoundImage} />
        </div>

        <div>
          <h3 className="text-5xl font-bold text-center">Page not found</h3>
        </div>

        <div className="text-xl text-center">
          <p>
            We're sorry, the page you requested could not be found. Please go
            back to the home page or contact us at codeYogi.io
          </p>
        </div>

        <Link to="/">
          <Button>Continue Shoping</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
