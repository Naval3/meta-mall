import React from "react";
import { Link } from "react-router-dom";

// for Hamburger icon
function MobileMenu() {
  return (
    <div>
      <div className="flex flex-col md:hidden">
        <Link
          className="px-4 bg-red-300 border-t hover:text-primary-dark border-y-gray-500"
          to="/"
        >
          HOME
        </Link>
        <Link
          className="px-4 bg-red-300 border-t hover:text-primary-dark border-y-gray-500"
          to="/"
        >
          ALL PRODUCTS
        </Link>
        <Link
          className="px-4 bg-red-300 border-t hover:text-primary-dark border-y-gray-500"
          to="/login"
        >
          LOGIN
        </Link>
        <Link
          className="px-4 bg-red-300 border-t border-b hover:text-primary-dark border-y-gray-500"
          to="/signup"
        >
          SIGNUP
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
