import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"contact"}>Contact Us</Link></li>

      <li>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2 bg-black bg-opacity-40">
            <li><Link>Submenu 1</Link></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link to={"ourmenu"}>Our Menu</Link></li>
      <li><Link to={"ourshop"}>Our Shop</Link></li>

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-700 bg-opacity-40 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss Restuarent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
      
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn">Login</a>
    <a className="btn">Register</a>

  </div>
</div>
    );
};

export default Navbar;