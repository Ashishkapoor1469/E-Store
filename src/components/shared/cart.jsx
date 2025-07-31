import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const Cart = ({ cartItems, onRemove, total }) => {
  return (
    <Card className="p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-white shadow-lg rounded-xl max-w-3xl mx-auto">
      <CardContent className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-900">
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-sm sm:text-base text-center py-4 sm:py-6">
            Your cart is empty. Start shopping now!
          </p>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-1">
                  <p className="font-semibold text-blue-700 text-sm sm:text-base">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    ₹{item.price.toLocaleString()}
                  </p>
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
        <hr className="my-4 sm:my-6 border-blue-200" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
      </CardContent>
    </Card>
  );
};

export default Cart;