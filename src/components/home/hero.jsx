import React from "react";
import '../css/hero.css'
const Hero = () => {
  return (
    <section className="relative text-center py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-xl mt-4 sm:mt-6 mx-2 sm:mx-4 shadow-2xl overflow-hidden">
      {/* Overlay for subtle effect */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white animate-fade-in-down">
          Welcome to ElectroShop
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up">
          Discover cutting-edge electronics at unbeatable prices. Upgrade your tech game today!
        </p>
        <a
          href="#shop"
          className="mt-4 sm:mt-6 inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
        >
          Shop Now
        </a>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;