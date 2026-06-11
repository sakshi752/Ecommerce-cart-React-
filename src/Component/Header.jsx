import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md">
      {/* Logo */}
      <div>
        <span className="text-2xl font-bold text-blue-400">
          Cartify
        </span>
      </div>

      {/* Navigation Links */}
      {/* <ul className="flex items-center gap-8 text-lg">
        <Link className="cursor-pointer hover:text-blue-400 transition-colors" to={"/"}>
          Home
        </Link>
        <Link className="cursor-pointer hover:text-blue-400 transition-colors" to={"/product"}>
          Products
        </Link>
        <Link className="cursor-pointer hover:text-blue-400 transition-colors" to={"/about"}>
          About
        </Link>
        <Link className="cursor-pointer hover:text-blue-400 transition-colors" to={"/contact"}>
          Contact
        </Link>
      </ul> */}

      <ul className="flex items-center gap-8 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-blue-400 font-semibold" : "text-white"}
             hover:text-blue-400 transition-colors`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            `${isActive ? "text-blue-400 font-semibold" : "text-white"}
             hover:text-blue-400 transition-colors`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-blue-400 font-semibold" : "text-white"}
             hover:text-blue-400 transition-colors`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-blue-400 font-semibold" : "text-white"}
             hover:text-blue-400 transition-colors`
          }
        >
          Contact
        </NavLink>
      </ul>


      {/* Button */}
      <Link className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors" to={"/cart"}>
        Cart
      </Link>
    </nav>
  );
};

export default Header;