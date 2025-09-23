import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 My_Math. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Kebijakan Privasi
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Syarat & Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
