import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
  {
    name: "Kiya",
    school: "SMP Emer Islamic Boarding School (EIBOS)",
    quote:
      "Berkat AFM Bimbel, nilai matematika saya naik signifikan. Metode pengajarannya mudah dipahami dan menyenangkan!",
  },
  {
    name: "Hana",
    school: "SDN 4 Metro Timur",
    quote:
      "Tutornya membantu saya belajar matematika dengan cara yang menyenangkan dan interaktif. Saya merasa lebih semangat belajar.",
  },
  {
    name: "Mazaya",
    school: "SD Cahaya Bangsa",
    quote: "Nilai matematika di sekolah saya naik.",
  },
  {
    name: "Azza",
    school: "SMPMU Ahmad Dahlan Metro",
    quote:
      "Semenjak gabung di afm, saya jadi lebih semangat belajar matematika.",
  },
];

const TestimonialSection = ({ isDark }) => {
  return (
    <section
      id="testimoni"
      className={`py-16 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-indigo-600"
            }`}
          >
            Apa Kata Siswa Kami
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Berikut adalah beberapa testimoni dari siswa yang telah bergabung
            dengan AFM Bimbel
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {testimonials.map((testi, index) => (
            <TestimonialCard
              key={index}
              testi={testi}
              index={index}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testi, index, isDark }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5 }}
    className={`p-6 rounded-xl shadow-md border transition-colors duration-300 ${
      isDark ? "bg-gray-700 border-gray-600" : "bg-white border-indigo-100"
    }`}
  >
    <div className="flex items-center mb-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 * index }}
        className={`border-2 border-dashed rounded-xl w-16 h-16 ${
          isDark ? "bg-gray-600 border-gray-500" : "bg-gray-200"
        }`}
      />
      <div className="ml-4">
        <h4
          className={`font-bold text-lg ${
            isDark ? "text-white" : "text-indigo-600"
          }`}
        >
          {testi.name}
        </h4>
        <p className={isDark ? "text-indigo-300" : "text-indigo-600"}>
          {testi.school}
        </p>
      </div>
    </div>
    <p className={`italic ${isDark ? "text-gray-300" : "text-gray-600"}`}>
      "{testi.quote}"
    </p>
    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

export default TestimonialSection;
