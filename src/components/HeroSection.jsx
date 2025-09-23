import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4 text-center"
      id="home"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeIn">
          Kuasai Matematika dengan{" "}
          <span className="text-yellow-300">My_Math</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slideUp">
          Bimbel interaktif untuk membantu Anda memahami konsep matematika yang
          kompleks dengan mudah.
        </p>
        <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounceIn">
          Gabung Sekarang
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
