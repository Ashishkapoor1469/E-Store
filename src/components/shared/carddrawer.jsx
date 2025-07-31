import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const CartDrawer = ({ cartItems, onRemove, total, onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-full sm:w-80 md:w-96 h-full bg-gradient-to-b from-blue-50 to-white shadow-2xl z-50 p-4 sm:p-6 overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-900">Your Cart</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-300"
          aria-label="Close Cart"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
        </button>
      </div>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-sm sm:text-base text-center py-8">
          Your cart is empty. Start shopping now!
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1">
                <p className="font-semibold text-blue-700 text-sm sm:text-base">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">₹{item.price.toLocaleString()}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => onRemove(index)}
                className="text-xs sm:text-sm px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <hr className="my-4 sm:my-6 border-blue-200" />

      {/* Total and Checkout */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg sm:text-xl text-green-700">
          Total: ₹{total.toLocaleString()}
        </p>
        <Button
          disabled={cartItems.length === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 text-sm sm:text-base"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDrawer;