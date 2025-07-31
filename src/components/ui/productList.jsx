import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import SpecialOffer from "../shared/specialoffer"; 
import TrendingNow from "../shared/TrendingNow";
import NewArrivals from "../shared/NewArrivals";
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {products.map((product, index) => (
        <React.Fragment key={index}>
          {/* Insert the banner after the 2nd product */}
          {index === 4 && (
            <div className="col-span-full">
              <SpecialOffer />
            </div>
          )}
          {index === 10 && (
            <div className="col-span-full">
              <TrendingNow />
            </div>
          )}

{index === 20 && (
            <div className="col-span-full">
              <NewArrivals />
            </div>
          )}
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <div className="relative w-full h-40 sm:h-48 bg-gray-100 rounded-t-lg overflow-hidden">
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/300x200?text=Product+Image"
                }
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 sm:p-5 flex flex-col flex-1">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-800 truncate">
                    {product.name}
                  </h2>
                  <span className="text-xs text-nowrap text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mt-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-green-700 font-bold text-base sm:text-lg mt-2">
                  ₹{product.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {product.stock > 0 ? (
                    `In Stock: ${product.stock}`
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </p>
              </div>
              <Button
                onClick={() => onAddToCart(product)}
                disabled={product.stock === 0}
                className="mt-3 w-full bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 text-sm sm:text-base py-2"
              >
                {product.stock > 0 ? "Add to Cart" : "Unavailable"}
              </Button>
            </CardContent>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;
