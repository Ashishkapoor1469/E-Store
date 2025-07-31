// components/NewsletterSignup.jsx
import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="col-span-full bg-slate-100 rounded-xl p-6 text-center">
      <h2 className="text-xl font-bold mb-2">📬 Stay Updated</h2>
      <p className="text-sm mb-4">Sign up for our newsletter to receive the latest deals!</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterSignup;
