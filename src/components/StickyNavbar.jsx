import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DesktopNav, MobileNav } from "./Navigation";
import logo from "../assets/AFM_LOGO.png";
import { useDarkMode } from "../contexts/DarkModeContext";

const StickyNavbar = ({ setIsModalOpen, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`py-4 w-full ${
        isScrolled ? "fixed top-0" : "sticky top-0"
      } z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? isDark
            ? "bg-gray-800/80 shadow-lg"
            : "bg-white/30 shadow-md"
          : isDark
            ? "bg-gray-900/80 backdrop-blur-sm"
            : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center"
        >
          <a href="/">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <DesktopNav
          isScrolled={isScrolled}
          isDark={isDark}
          setIsModalOpen={setIsModalOpen}
          navItems={navItems}
        />

        {/* Mobile Navigation */}
        <MobileNav
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDark={isDark}
          setIsModalOpen={setIsModalOpen}
          navItems={navItems}
        />
      </div>
    </motion.nav>
  );
};

export default StickyNavbar;
