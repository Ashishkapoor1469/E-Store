import React, { useState } from "react";
import { X } from "lucide-react";

const ProfileDrawer = ({ onClose }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      {/* Modal */}
      <div className="w-full max-w-md sm:max-w-lg bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-2xl p-6 animate-fadeInScale">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-blue-900">Edit Profile</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-300"
            aria-label="Close Profile Drawer"
          >
            <X className="w-6 h-6 text-blue-700" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/90 border border-blue-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/90 border border-blue-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDrawer;
