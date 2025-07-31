import React from "react";
import { ShoppingCart, User } from "lucide-react";

const Navbar = ({ setSearchQuery, cartCount, onProfileClick, onCartClick }) => {
  return (
    <nav className="w-full fixed top-0 z-50 flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-5 shadow-lg backdrop-blur-xl">
   
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight hover:text-blue-100 transition-colors duration-300">
        ElectroShop
      </h2>

      
      <div className="w-full sm:w-1/2 md:w-1/3 my-3 sm:my-0 mx-2 sm:mx-4">
        <input
          type="text"
          placeholder="Search items..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base transition-all duration-300"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onProfileClick}
          className="p-2 rounded-full hover:bg-blue-500/50 transition-colors duration-300"
          aria-label="Profile"
        >
          <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={onCartClick}
          className="relative p-2 rounded-full hover:bg-blue-500/50 transition-colors duration-300"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;