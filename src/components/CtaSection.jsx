import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const CTASection = ({ isDark, setIsModalOpen }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
      className={`py-16 text-white transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-r from-gray-800 to-gray-700"
          : "bg-gradient-to-r from-indigo-600 to-purple-700"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Mengubah Matematika Menjadi Pelajaran Favoritmu?
        </h2>
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTAButton
            isDark={isDark}
            onClick={() => setIsModalOpen(true)}
            variant="primary"
          >
            Daftar Sekarang
          </CTAButton>
          <CTAButton isDark={isDark} variant="primary">
            <a href="https://wa.me/6281373420852" target="_blank">
              Konsultasi gratis
            </a>
          </CTAButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

const CTAButton = ({ isDark, onClick, href, variant, children }) => {
  const isPrimary = variant === "primary";

  if (href) {
    return (
      <motion.button
        variants={scaleVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`border-2 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ${
          isDark
            ? "border-white text-white hover:bg-white hover:text-gray-900"
            : "border-white text-indigo-600"
        }`}
      >
        <a
          href={href}
          className={isDark ? "text-white hover:text-gray-900" : "text-white"}
        >
          {children}
        </a>
      </motion.button>
    );
  }

  return (
    <motion.button
      variants={scaleVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ${
        isPrimary
          ? isDark
            ? "bg-white text-gray-900 hover:bg-gray-100"
            : "bg-white text-indigo-600 hover:bg-indigo-50"
          : `border-2 ${
              isDark
                ? "border-white text-white hover:bg-white hover:text-gray-900"
                : "border-white text-white"
            }`
      }`}
    >
      {children}
    </motion.button>
  );
};

export default CTASection;
