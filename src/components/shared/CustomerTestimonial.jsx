// components/CustomerTestimonial.jsx
import React from "react";

const CustomerTestimonial = () => {
  return (
    <div className="col-span-full bg-white border-l-4 border-green-500 shadow p-4 rounded-md">
      <blockquote className="italic text-gray-700">
        “ElectroShop has the best customer service and fast delivery. Highly recommended!”
      </blockquote>
      <p className="text-sm text-right text-green-600 mt-2">– A happy customer</p>
    </div>
  );
};

export default CustomerTestimonial;
