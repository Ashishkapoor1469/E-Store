import React from "react";
import Hero from "./Hero"; // Adjust path as needed
import ProductList from "./ProductList"; // Adjust path as needed
import products from "../data/product"; // Adjust path as needed

const ProductsPage = ({ onAddToCart }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-6 sm:mb-8 text-center">
            Our Products
          </h1>
          <ProductList products={products} onAddToCart={onAddToCart} />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;