import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle";
import { div } from "framer-motion/client";

const MobileNav = ({
  isMenuOpen,
  setIsMenuOpen,
  isDark,
  setIsModalOpen,
  navItems,
}) => {
  return (
    <>
      <div className="md:hidden flex gap-4 items-center space-x-1 mr-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`focus:outline-none ${
            isDark ? "text-white" : "text-gray-800"
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

      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className={`md:hidden py-4 px-4 mt-3 absolute top-17 right-0 w-full overflow-hidden ${
            isDark ? "bg-gray-800" : "bg-white/90"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`block py-2 transition ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-800 hover:text-indigo-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            className={`mt-2 font-bold py-2 px-4 rounded-lg w-full transition duration-300 bg-gray-300 ${
              isDark
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gray-300 hover:bg-indigo-700 text-indigo-600"
            }`}
            onClick={() => setIsModalOpen(true)}
          >
            Daftar Sekarang
          </button>
        </motion.div>
      )}
    </>
  );
};

export default MobileNav;
