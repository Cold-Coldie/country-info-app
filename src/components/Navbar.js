import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-700 h-20  shadow-md dark:shadow-lg flex items-center fixed z-10 w-screen">
        <div className="dark:text-gray-50 text-gray-800 ml-5 md:ml-16 font-bold text-sm md:text-lg ">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
        </div>

        <div className="dark:text-gray-50 text-gray-800 flex items-center ml-auto mr-5 md:mr-12">
          <span className="flex items-center mr-8">
            <Toggle />
          </span>
          <span>
            <h1 className="text-xs font-bold">Dark Mode</h1>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
