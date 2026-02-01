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

const programs = [
  {
    name: "Kelas Asyik",
    features: [
      "Materi sesuai kurikulum",
      "Latihan soal harian",
      "Tryout bulanan",
      "Maksimal 5 Siswa/kelas",
      "TK (Calistung), SD, SMP",
      "1,5 jam/sesi",
      "8 sesi/bulan",
    ],
    price: "Rp 250.000",
    link: "https://wa.me/6281373420852?text=Hallo%2C%20saya%20ingin%20daftar%20di%20KELAS%20ASYIK",
  },
  {
    name: "Kelas Privat",
    features: [
      "Materi sesuai kebutuhan siswa",
      "Latihan soal intensif",
      "Tryout khusus",
      "Maksimal 2 Siswa/kelas",
      "TK (Calistung), SD, SMP",
      "1,5 jam/sesi",
      "8 sesi/bulan",
    ],
    price: "Rp 500.000",
    link: "https://wa.me/6281373420852?text=Hallo%2C%20saya%20ingin%20daftar%20di%20KELAS%20PRIVAT",
  },
];

const ProgramSection = ({ isDark }) => {
  return (
    <section
      id="kelas"
      className={`py-16 transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-white"
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
            Kelas Belajar
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Kelas belajar yang kami sediakan ini, untuk membantu siswa memahami
            konsep matematika secara mendalam
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto"
          >
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                index={index}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ program, index, isDark }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className={`rounded-xl shadow-lg p-6 border transition-colors duration-300 ${
      isDark
        ? "bg-gray-700 border-gray-600"
        : "bg-gradient-to-br from-white to-indigo-200 border-indigo-100"
    }`}
  >
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
        isDark
          ? "bg-indigo-900 text-indigo-200"
          : "bg-indigo-100 text-indigo-600"
      }`}
    >
      <span className="text-2xl font-bold">{index + 1}</span>
    </div>
    <h3
      className={`text-xl font-bold mb-4 ${
        isDark ? "text-white" : "text-gray-800"
      }`}
    >
      {program.name}
    </h3>
    <ul
      className={`space-y-2 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
    >
      {program.features.map((item, i) => (
        <li key={i} className="flex items-start">
          <svg
            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>
    <div
      className={`font-bold text-2xl mb-4 ${
        isDark ? "text-indigo-400" : "text-indigo-600"
      }`}
    >
      {program.price}
      <span
        className={`text-sm font-normal ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        /bulan
      </span>
    </div>
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-2 rounded-lg transition duration-300 font-bold ${
        isDark
          ? "bg-gray-300 hover:bg-indigo-700 text-indigo-600"
          : "bg-indigo-600 hover:bg-indigo-700 text-white"
      }`}
    >
      <a href={program.link} target="_blank" rel="noopener noreferrer">
        Pilih Program
      </a>
    </motion.button>
  </motion.div>
);

export default ProgramSection;
