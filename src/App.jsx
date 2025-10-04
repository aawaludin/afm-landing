// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "./assets/AFM_LOGO.png";
import { useDarkMode } from "./contexts/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";
import hero from "./assets/hero.svg";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    href: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    href: "https://www.youtube.com",
  },
];

// Variants untuk animasi
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

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useDarkMode();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    school: '',
    grade: '',
    guardianName: '',
    phone: '',
    address: '',
    program: '',
    promoCode: 'AFMOKTOBER',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, school, grade, guardianName, phone, address, program, promoCode } = formData;
    const message = `Halo, Saya ingin mendaftar di kelas AFM:\nNama Siswa: ${studentName}\nAsal Sekolah: ${school}\nKelas: ${grade}\nNama Wali: ${guardianName}\nNo. HP: ${phone}\nAlamat: ${address}\nProgram: ${program}\nKode Promo: ${promoCode}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281373420852?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setFormData({
      studentName: '',
      school: '',
      grade: '',
      guardianName: '',
      phone: '',
      address: '',
      program: '',
      promoCode: 'AFMOKTOBER',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`font-sans min-w-screen min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-indigo-200 to-purple-100 text-gray-900'
    }`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`py-4 sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? isDark
              ? 'bg-gray-800/80 shadow-lg'
              : 'bg-white/30 shadow-md'
            : isDark
            ? 'bg-gray-900/80 backdrop-blur-sm'
            : 'bg-white/10 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center"
          >
            <div>
              <a href="/">
                <img src={logo} alt="Logo" className="h-12" />
              </a>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className={`flex space-x-8 ${
                isScrolled
                  ? isDark
                    ? 'text-white'
                    : 'text-purple-900'
                  : isDark
                  ? 'text-gray-300'
                  : 'text-purple-600'
              }`}
            >
              {['Beranda', 'Kelas', 'Testimoni', 'Kontak'].map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-medium transition hover:text-indigo-400"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${
                isDark
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-indigo-600'
                  : 'bg-gray-400 hover:bg-gray-800 text-indigo-600'
              }`}
              onClick={() => setIsModalOpen(true)}
            >
              Daftar Sekarang
            </motion.button>
            {/* Dark Mode Toggle */}
            <div className="absolute top-5 right-13">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu - Dark Mode Toggle dan Menu Button */}
          <div className="md:hidden flex items-center space-x-1 mr-7">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`focus:outline-none ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </motion.button>
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden py-4 px-4 mt-3 overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white/90'
            }`}
          >
            {['Beranda', 'Kelas', 'Testimoni', 'Kontak'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`block py-2 transition ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-800 hover:text-indigo-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className={`mt-2 font-bold py-2 px-4 rounded-lg w-full transition duration-300 ${
                isDark
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
              onClick={() => setIsModalOpen(true)}
            >
              Daftar Sekarang
            </button>
          </motion.div>
        )}
      </motion.nav>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`p-4 sm:p-6 rounded-lg w-full max-w-[90vw] sm:max-w-md lg:max-w-lg ${
              isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
              Form Pendaftaran Kelas AFM
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="studentName" className="block mb-1 text-sm sm:text-base">
                  Nama Siswa
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
              </div>
              <div>
                <label htmlFor="school" className="block mb-1 text-sm sm:text-base">
                  Asal Sekolah
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
              </div>
              <div>
                <label htmlFor="grade" className="block mb-1 text-sm sm:text-base">
                  Kelas
                </label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
              </div>
              <div>
                <label htmlFor="guardianName" className="block mb-1 text-sm sm:text-base">
                  Nama Wali
                </label>
                <input
                  type="text"
                  id="guardianName"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-sm sm:text-base">
                  No. HP
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1 text-sm sm:text-base">
                  Alamat
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base resize-y ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="program" className="block mb-1 text-sm sm:text-base">
                  Program
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-700 text-white border-gray-600'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                >
                  <option value="">Pilih Program</option>
                  <option value="Kelas Asyik">Kelas Asyik</option>
                  <option value="Kelas Privat">Kelas Privat</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className={`py-2 px-4 rounded-lg text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-600 hover:bg-gray-500 text-indigo-600'
                      : 'bg-gray-300 hover:bg-gray-400 text-indigo-600'
                  }`}
                  onClick={() => setIsModalOpen(false)}
                >
                  Batal
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`py-2 px-4 rounded-lg text-sm sm:text-base ${
                    isDark
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-indigo-600'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-indigo-600'
                  }`}
                >
                  Kirim
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        id="beranda"
        className={`py-16 md:py-20 transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-b from-gray-800 to-gray-700'
            : 'bg-gradient-to-b from-indigo-700 to-purple-500'
        } text-white`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
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
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-white text-indigo-600 hover:bg-indigo-50'
                }`}
              >
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${
                isDark
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-indigo-600'
                  : 'bg-gray-400 hover:bg-gray-800 text-indigo-600'
              }`}
              onClick={() => setIsModalOpen(true)}
            >
              Daftar Sekarang
            </motion.button>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`border-2 font-bold py-3 px-8 rounded-lg bg-white text-lg transition duration-300 ${
                  isDark
                    ? 'border-white text-indigo-600 hover:bg-white hover:text-gray-900'
                    : 'border-white text-indigo-600 hover:bg-white hover:text-indigo-600'
                }`}
              >
                <a href="#program">Lihat Kelas</a>
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
                className={isDark ? 'filter brightness-75' : ''}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Section */}
      <section id="kelas" className={`py-16 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-indigo-600'
            }`}>
              Kelas Belajar
            </h2>
            <p className={`max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Kelas belajar yang kami sediakan ini, untuk membantu siswa
              memahami konsep matematika secara mendalam
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid grid-cols-1  md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto"
            >
              {[
                {
                  name: "Kelas Asyik",
                  features: [
                    "Materi sesuai kurikulum",
                    "Latihan soal harian",
                    "Tryout bulanan",
                    "Diskusi kelompok",
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
                    "Konsultasi 1-on-1",
                    "TK (Calistung), SD, SMP",
                    "1,5 jam/sesi",
                    "8 sesi/bulan",
                  ],
                  price: "Rp 500.000",
                  link: "https://wa.me/6281373420852?text=Hallo%2C%20saya%20ingin%20daftar%20di%20KELAS%20PRIVAT",
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`rounded-xl shadow-lg p-6 border transition-colors duration-300 ${
                    isDark
                      ? 'bg-gray-700 border-gray-600'
                      : 'bg-gradient-to-br from-white to-indigo-200 border-indigo-100'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {program.name}
                  </h3>
                  <ul className={`space-y-2 mb-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
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
                  <div className={`font-bold text-2xl mb-4 ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    {program.price}
                    <span className={`text-sm font-normal ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      /bulan
                    </span>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2 rounded-lg transition duration-300 font-bold ${
                      isDark
                        ? 'bg-gray-300 hover:bg-indigo-700 text-indigo-600'
                        : 'bg-indigo-600 hover:bg-indigo-700 dark:text-white'
                    }`}
                  >
                    Pilih Program
                  </motion.button> */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2 rounded-lg transition duration-300 font-bold ${
                      isDark
                        ? 'bg-gray-300 hover:bg-indigo-700 text-indigo-600'
                        : 'bg-indigo-600 hover:bg-indigo-700 dark:text-white'
                    }`}
                  >
                    <a href={program.link} target="_blank" rel="noopener noreferrer">Pilih Program</a>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section
        id="testimoni"
        className={`py-16 transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-indigo-50 to-purple-50'
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-indigo-600'
            }`}>
              Apa Kata Siswa Kami
            </h2>
            <p className={`max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
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
            {[
              {
                name: "Kiya",
                school: "SMP Emer Islamic Boarding School (EIBOS)",
                quote:
                  "Berkat AFM Bimbel, nilai matematika saya naik signifikan. Metode pengajarannya mudah dipahami dan menyenangkan!",
              },
              {
                name: "Bita",
                school: "SD Sang Pencerah",
                quote:
                  "Tutor-tutornya sangat sabar dan berpengalaman. Sekarang saya jadi suka pelajaran matematika!",
              },
              {
                name: "Rasyid",
                school: "SD Cahaya Bangsa",
                quote:
                  "Belajar jadi seru banget! Ada game matematika dan hadiah buat yang berprestasi.",
              },
              {
                name: "Zafran",
                school: "SD Sang Pencerah",
                quote:
                  "Tryout bulanannya sangat membantu mempersiapkan ujian. Soal-soalnya mirip dengan ujian sekolah.",
              },
            ].map((testi, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-md border transition-colors duration-300 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600'
                    : 'bg-white border-indigo-100'
                }`}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className={`border-2 border-dashed rounded-xl w-16 h-16 ${
                      isDark ? 'bg-gray-600 border-gray-500' : 'bg-gray-200'
                    }`}
                  />
                  <div className="ml-4">
                    <h4 className={`font-bold text-lg ${
                      isDark ? 'text-white' : 'text-indigo-600'
                    }`}>
                      {testi.name}
                    </h4>
                    <p className={isDark ? 'text-indigo-300' : 'text-indigo-600'}>
                      {testi.school}
                    </p>
                  </div>
                </div>
                <p className={`italic ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className={`py-16 text-white transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-r from-gray-800 to-gray-700'
            : 'bg-gradient-to-r from-indigo-600 to-purple-700'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mengubah Matematika Menjadi Pelajaran Favoritmu?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan kelas gratis percobaan 1 Sesi!
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              variants={scaleVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ${
                isDark
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <a href="https://wa.me/6281373420852">Daftar Sekarang</a>
            </motion.button>
            <motion.button
              variants={scaleVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 font-bold py-3 px-8 rounded-lg bg-white text-lg transition duration-300 ${
                isDark
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-white text-white'
              }`}
            >
              <a href="https://wa.me/6281373420852" className="dark:text-black text-indigo-600">Konsultasi Gratis</a>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`py-12 transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'
            : 'bg-gradient-to-br from-indigo-50 to-purple-50 text-black'
        }`}
        id="kontak"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Logo" className="w-10 h-7 mr-2" />
                <span className="text-xl font-bold">AFM Bimbel</span>
              </div>
              <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Bimbingan belajar matematika khusus untuk siswa TK (CALISTUNG),
                SD, SMP dengan metode belajar interaktif.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`transition duration-300 ${
                      isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className={`border-2 w-10 h-10 rounded-full flex items-center justify-center ${
                      isDark 
                        ? 'border-gray-600 hover:border-white' 
                        : 'border-gray-300 hover:border-indigo-600'
                    }`}>
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
              <ul className={`space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  0813 7342 0852
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  mybimbel21@gmail.com
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Jl. Gatot Subroto (Samping BFC Yosodadi), Yosodadi, Metro
                  Timur
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Lokasi</h3>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d776.4851669180516!2d105.33748619561888!3d-5.1064337244389915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1758599140211!5m2!1sid!2sid"
                    width="400"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </div>

          <div className={`border-t mt-10 pt-6 text-center ${
            isDark ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-600'
          }`}>
            <p>
              &copy; {new Date().getFullYear()} AFM-Bimbel. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;