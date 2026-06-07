import React from 'react';

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
      <ul className="flex items-center gap-8 text-lg">
        <li className="cursor-pointer hover:text-blue-400 transition-colors">
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-400 transition-colors">
          Products
        </li>
        <li className="cursor-pointer hover:text-blue-400 transition-colors">
          About
        </li>
        <li className="cursor-pointer hover:text-blue-400 transition-colors">
          Contact
        </li>
      </ul>

      {/* Button */}
      <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
        Cart
      </button>
    </nav>
  );
};

export default Header;