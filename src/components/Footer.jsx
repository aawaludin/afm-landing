import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, href: "https://www.facebook.com" },
  { name: "Twitter", icon: <FaTwitter />, href: "https://www.twitter.com" },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/afmbimbel",
  },
  { name: "YouTube", icon: <FaYoutube />, href: "https://www.youtube.com" },
];

const contactInfo = [
  {
    icon: "phone",
    text: "0813 7342 0852",
  },
  {
    icon: "email",
    text: "mybimbel21@gmail.com",
  },
  {
    icon: "location",
    text: "Jl. Gatot Subroto (Samping BFC Yosodadi), Yosodadi, Metro Timur",
  },
];

const Footer = ({ isDark, logo }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`py-12 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-50 to-purple-50 text-black"
      }`}
      id="kontak"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterAbout isDark={isDark} logo={logo} />
          <FooterContact isDark={isDark} />
          <FooterLocation isDark={isDark} />
        </div>

        <div
          className={`border-t mt-10 pt-6 text-center ${
            isDark
              ? "border-gray-700 text-gray-400"
              : "border-gray-300 text-gray-600"
          }`}
        >
          <p>
            &copy; {new Date().getFullYear()} AFM-Bimbel. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

const FooterAbout = ({ isDark, logo }) => (
  <div>
    <div className="flex items-center mb-4">
      <img src={logo} alt="Logo" className="w-10 h-7 mr-2" />
      <span className="text-xl font-bold">AFM Bimbel</span>
    </div>
    <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      Bimbingan belajar matematika khusus untuk siswa TK (CALISTUNG), SD, SMP
      dengan metode belajar interaktif.
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
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-600"
          }`}
        >
          <span className="sr-only">{social.name}</span>
          <div
            className={`border-2 w-10 h-10 rounded-full flex items-center justify-center ${
              isDark
                ? "border-gray-600 hover:border-white"
                : "border-gray-300 hover:border-gray-600"
            }`}
          >
            {social.icon}
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

const FooterContact = ({ isDark }) => (
  <div>
    <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
    <ul className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      {contactInfo.map((info, index) => (
        <ContactItem
          key={index}
          icon={info.icon}
          text={info.text}
          isDark={isDark}
        />
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon, text, isDark }) => {
  const icons = {
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    email: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    location: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  };

  return (
    <li className="flex items-start">
      <svg
        className="h-5 w-5 mr-2 mt-0.5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icons[icon]}
      </svg>
      {text}
    </li>
  );
};

const FooterLocation = ({ isDark }) => (
  <div>
    <h3 className="text-lg font-bold mb-2">Lokasi</h3>
    <div className="flex justify-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-lg overflow-hidden shadow-lg w-full max-w-full"
      >
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 aspect ratio */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d776.4851669180516!2d105.33748619561888!3d-5.1064337244389915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1758599140211!5m2!1sid!2sid"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi AFM Bimbel"
          ></iframe>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Footer;
