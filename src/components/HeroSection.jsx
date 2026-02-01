import { motion } from "framer-motion";
import hero from "../assets/hero.svg";

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

const HeroSection = ({ isDark, setIsModalOpen }) => {
  return (
    <section
      id="beranda"
      className={`py-16 md:py-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-gray-800 to-gray-700"
          : "bg-gradient-to-b from-indigo-700 to-purple-500"
      } text-white`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Pelajari Matematika dengan Cara Menyenangkan
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Kami Membantu anak memahami materi di sekolah lebih mendalam,
            sehingga anak bisa menjadi siswa yang berprestasi di kelas.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ${
                isDark
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-white text-indigo-600 hover:bg-indigo-50"
              }`}
              onClick={() => setIsModalOpen(true)}
            >
              Daftar Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 font-bold py-3 px-8 rounded-lg bg-white text-lg transition duration-300 ${
                isDark
                  ? "border-white text-black hover:bg-white hover:text-gray-900"
                  : "border-white text-indigo-600 hover:bg-white hover:text-indigo-600"
              }`}
            >
              <a href="#kelas">Lihat Kelas</a>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="hidden h-96 rounded-xl w-full max-w-md md:flex items-center justify-center">
            <img
              src={hero}
              alt="Hero"
              className={isDark ? "filter brightness-75" : ""}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
