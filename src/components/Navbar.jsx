import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-700">
          AFM Bimbel
        </a>
        <div className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-indigo-700">
            Fitur
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-indigo-700"
          >
            Testimoni
          </a>
          <a
            href="#contact"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
