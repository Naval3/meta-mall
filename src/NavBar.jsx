import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import MetaMall from "./meta-mall.png";
import { GoThreeBars } from "react-icons/go";
import { HiX } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import MobileMenu from "./MobileMenu";
import { WithUser } from "./WithProvider";
import Button from "./Button";

function NavBar({ productCount, setCart, user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
    // localStorage.removeItem("my-cart");
    // setCart({});
  };

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  return (
    <div className="bg-white">
      <nav className="flex flex-row items-center justify-between max-w-6xl px-5 mx-auto">
        <div className="w-24 md:w-36">
          <img alt="Site's Icon" src={MetaMall} className="w-20 p-1" />
        </div>
        <div className="flex flex-col items-center self-center gap-1">
          <div className="flex">
            <FcBusinessman className="text-3xl " />
            <span className="font-bold">{user.full_name}</span>
          </div>
          <Button onClick={logout}>Log out</Button>
        </div>

        <div className="flex gap-4 md:gap-8">
          <ul className="hidden gap-4 text-xl md:flex">
            <li>
              <Link to="/" className=" hover:text-primary-default">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/" className=" hover:text-primary-default">
                ALL PRODUCTS
              </Link>
            </li>
            <li>
              <Link to="/login" className=" hover:text-primary-default">
                ACCOUNT
              </Link>
            </li>
          </ul>
          <Link
            to="/cart"
            className="relative flex items-center hover:cursor-pointer"
          >
            <FaCartPlus className="text-2xl text-red-400 hover:text-primary-dark" />
            <p className="absolute p-2 mb-4 ml-3 text-lg rounded-full">
              {productCount}
            </p>
          </Link>

          {menuOpen == false && (
            <GoThreeBars
              onClick={handleMenuOpen}
              className="block text-3xl text-primary-default md:hidden hover:cursor-pointer hover:text-primary-dark"
            />
          )}

          {menuOpen == true && (
            <HiX
              onClick={handleMenuClose}
              className="text-3xl md:hidden text-primary-default hover:cursor-pointer hover:text-primary-dark"
            />
          )}
        </div>
      </nav>
      {menuOpen == true && <MobileMenu />}
    </div>
  );
}

export default WithUser(NavBar);
