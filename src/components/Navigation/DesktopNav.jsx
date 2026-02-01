import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle";

const DesktopNav = ({ isScrolled, isDark, setIsModalOpen, navItems }) => {
  return (
    <div className="hidden md:w-full md:flex items-center md:justify-end space-x-8">
      <div
        className={`flex space-x-8 ${
          isScrolled
            ? isDark
              ? "text-white"
              : "text-black"
            : isDark
              ? "text-gray-300"
              : "text-purple-600"
        }`}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="font-medium transition hover:text-indigo-400"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <div className="hidden md:flex items-center space-x-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${
            isDark
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-gray-100 hover:bg-gray-800 text-indigo-600"
          }`}
          onClick={() => setIsModalOpen(true)}
        >
          Daftar Sekarang
        </motion.button>
        <div className="absolute top-5 right-13">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
