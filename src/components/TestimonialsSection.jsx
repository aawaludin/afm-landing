import React from "react";

const TestimonialCard = ({ quote, name, title }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <p className="font-bold text-indigo-600">{name}</p>
    <p className="text-gray-500 text-sm">{title}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4" id="testimonials">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Apa Kata Mereka?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="My_Math benar-benar mengubah cara saya melihat matematika. Sangat membantu!"
            name="Andi Wijaya"
            title="Pelajar SMA"
          />
          <TestimonialCard
            quote="Penjelasan yang mudah dimengerti dan latihan yang relevan membuat saya lebih percaya diri."
            name="Siti Nurjanah"
            title="Mahasiswa"
          />
          <TestimonialCard
            quote="Anak saya sangat menikmati kelas di My_Math. Nilai matematikanya meningkat drastis!"
            name="Budi Santoso"
            title="Orang Tua"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
