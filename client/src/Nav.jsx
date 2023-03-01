import React from "react";

const Nav = () => {
  return (
    <nav className="relative  bg-blue flex  justify-between">
      <ul className="flex">
        <li className="">
          <a
            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
            href="#"
          >
            CICCC
          </a>
        </li>
        <li className="">
          <a
            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
            href="#"
          >
            Create
          </a>
        </li>
        <li className="">
          <a
            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
            href="#"
          >
            History
          </a>
        </li>
      </ul>
      <ul className="">
        <li className="">
          <a className="block p-4 text-sm ">LogOut</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
