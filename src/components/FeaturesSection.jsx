import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-indigo-600 text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Kenapa Memilih My_Math?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🧠"
            title="Materi Komprehensif"
            description="Dari dasar hingga tingkat lanjut, materi kami mencakup semua yang Anda butuhkan."
          />
          <FeatureCard
            icon="👨‍🏫"
            title="Pengajar Berpengalaman"
            description="Dibimbing oleh tutor profesional yang ahli di bidang matematika."
          />
          <FeatureCard
            icon="💡"
            title="Metode Interaktif"
            description="Pembelajaran yang menyenangkan dengan kuis, latihan, dan studi kasus nyata."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
