import React from "react";

const CtaSection = () => {
  return (
    <section
      className="bg-indigo-700 text-white py-20 px-4 text-center"
      id="contact"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Siap Menguasai Matematika?</h2>
        <p className="text-xl mb-8 opacity-90">
          Daftarkan diri Anda sekarang dan raih potensi penuh Anda bersama
          My_Math!
        </p>
        <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
