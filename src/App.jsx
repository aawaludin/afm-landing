import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./contexts/DarkModeContext";
import logo from "./assets/AFM_LOGO.png";

// Components
import { DesktopNav, MobileNav } from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProgramSection from "./components/ProgramSection";
import TestimonialSection from "./components/TestimonialSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";
import usePreventHorizontalScroll from "./utils/usePreventHorizontalScroll";
import StickyNavbar from "./components/StickyNavbar";

function App() {
  usePreventHorizontalScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isDark } = useDarkMode();

  const navItems = ["Beranda", "Kelas", "Testimoni", "Kontak"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`font-sans min-w-screen min-h-screen transition-colors duration-300 overflow-x-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-indigo-200 to-purple-100 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <StickyNavbar setIsModalOpen={setIsModalOpen} navItems={navItems} />

      {/* Registration Modal */}
      <RegistrationModal
        isDark={isDark}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/* Hero Section */}
      <HeroSection isDark={isDark} setIsModalOpen={setIsModalOpen} />

      {/* Program Section */}
      <ProgramSection isDark={isDark} />

      {/* Testimonial Section */}
      <TestimonialSection isDark={isDark} />

      {/* CTA Section */}
      <CtaSection isDark={isDark} setIsModalOpen={setIsModalOpen} />

      {/* Footer */}
      <Footer isDark={isDark} logo={logo} />
    </div>
  );
}

export default App;
