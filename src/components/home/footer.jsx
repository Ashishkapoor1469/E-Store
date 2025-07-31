import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-8 py-8 sm:py-12 px-4 sm:px-6">

      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      
        <div className="text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">ElectroShop</h3>
          <p className="mt-2 text-sm sm:text-base text-blue-100">
            Your one-stop shop for the latest electronics at unbeatable prices.
          </p>
        </div>

      
        <div className="text-center sm:text-left">
          <h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm sm:text-base text-blue-100">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

      
        <div className="text-center sm:text-left">
          <h4 className="text-lg sm:text-xl font-semibold">Stay Updated</h4>
          <p className="mt-2 text-sm sm:text-base text-blue-100">Subscribe to our newsletter for exclusive offers.</p>
          <form className="mt-3 flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition-colors text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>

       
        <div className="text-center sm:text-left">
          <h4 className="text-lg sm:text-xl font-semibold">Follow Us</h4>
          <div className="mt-2 flex justify-center sm:justify-start gap-3">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.4 3.6 8.1 8.1 8.9v-6.3h-2.4v-2.6h2.4v-1.9c0-2.4 1.5-3.7 3.6-3.7.7 0 1.4.1 2.1.2v2.4h-1.1c-1.1 0-1.3.5-1.3 1.3v1.7h2.6l-.3 2.6h-2.3v6.3c4.5-.8 8.1-4.5 8.1-8.9 0-5.5-4.5-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 7.2c-.9.4-1.8.6-2.8.7 1-.6 1.8-1.6 2.2-2.7-.9.5-2 .9-3.1 1.1-1-.9-2.4-1.5-3.9-1.5-3 0-5.4 2.4-5.4 5.4 0 .4 0 .8.1 1.2-4.5-.2-8.5-2.4-11.2-5.7-.5.8-.7 1.8-.7 2.8 0 1.9 1 3.6 2.5 4.6-.9 0-1.8-.3-2.6-.7v.1c0 2.7 1.9 4.9 4.4 5.4-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.2 2.8 3.8 5.3 3.8-1.9 1.5-4.3 2.4-6.9 2.4-.4 0-.9 0-1.3-.1 2.5 1.6 5.5 2.5 8.7 2.5 10.4 0 16.1-8.6 16.1-16.1v-.7c1.1-.8 2-1.8 2.7-2.9z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.4 3.6 8.1 8.1 8.9v-6.3h-2.4v-2.6h2.4v-1.9c0-2.4 1.5-3.7 3.6-3.7.7 0 1.4.1 2.1.2v2.4h-1.1c-1.1 0-1.3.5-1.3 1.3v1.7h2.6l-.3 2.6h-2.3v6.3c4.5-.8 8.1-4.5 8.1-8.9 0-5.5-4.5-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

     
      <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-400 text-center text-sm sm:text-base text-blue-100">
        <p>&copy; 2025 ElectroShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;