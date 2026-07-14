import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const RegistrationModal = ({ isDark, isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    school: "",
    grade: "",
    guardianName: "",
    phone: "",
    address: "",
    program: "",
    info: "",
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, setIsModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      studentName,
      school,
      grade,
      guardianName,
      phone,
      address,
      program,
      info,
    } = formData;
    const message = `Halo, Saya ingin mendaftar di kelas AFM:\nNama Siswa: ${studentName}\nAsal Sekolah: ${school}\nKelas: ${grade}\nNama Wali: ${guardianName}\nNo. HP: ${phone}\nAlamat: ${address}\nProgram: ${program}\nInformasi afm dari: ${info}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281373420852?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
    setFormData({
      studentName: "",
      school: "",
      grade: "",
      guardianName: "",
      phone: "",
      address: "",
      program: "",
      info: "",
    });
  };

  if (!isModalOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsModalOpen(false)}
      />

      {/* Modal Container - Center dengan flex dan max height */}
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden px-4 sm:px-6 overflow-y-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          className={`relative p-4 sm:p-6 rounded-lg w-full max-w-lg ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } shadow-2xl my-8`} // my-8 untuk memberikan margin atas/bawah
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className={`absolute top-3 right-3 z-10 p-2 rounded-full ${
              isDark
                ? "hover:bg-gray-700 text-gray-300 hover:text-white"
                : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            } transition-colors`}
            aria-label="Tutup modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content dengan scroll jika konten terlalu panjang */}
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
            {" "}
            {/* Tambah scroll vertical jika perlu */}
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              Form Pendaftaran Kelas AFM
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Nama Siswa"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                isDark={isDark}
                required
                placeholder="Masukkan nama lengkap siswa"
              />

              <FormInput
                label="Asal Sekolah"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                isDark={isDark}
                required
                placeholder="Masukkan nama sekolah"
              />

              <FormInput
                label="Kelas"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                isDark={isDark}
                required
                placeholder="Contoh: 5 SD, 8 SMP"
              />

              <FormInput
                label="Nama Wali"
                id="guardianName"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleInputChange}
                isDark={isDark}
                required
                placeholder="Masukkan nama wali/orang tua"
              />

              <FormInput
                label="No. HP"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                isDark={isDark}
                required
                placeholder="Contoh: 081234567890"
              />

              <FormTextarea
                label="Alamat"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                isDark={isDark}
                required
                placeholder="Masukkan alamat lengkap"
              />

              <FormSelect
                label="Program"
                id="program"
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                isDark={isDark}
                options={[
                  { value: "", label: "Pilih Program" },
                  {
                    value: "Kelas Asyik",
                    label: "Kelas Asyik - Rp. 250.000/8 Sesi",
                  },
                  {
                    value: "Kelas Privat",
                    label: "Kelas Privat - Rp.500.000/8 Sesi",
                  },
                ]}
                required
              />

              <FormSelect
                label="Informasi AFM dari"
                id="info"
                name="info"
                value={formData.info}
                onChange={handleInputChange}
                isDark={isDark}
                options={[
                  { value: "", label: "Pilih informasi" },
                  { value: "Teman", label: "Teman" },
                  { value: "Social Media", label: "Social Media" },
                  { value: "Lainnya", label: "Lainnya" },
                ]}
                required
              />

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <ModalButton
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  isDark={isDark}
                  variant="cancel"
                >
                  Batal
                </ModalButton>
                <ModalButton type="submit" isDark={isDark} variant="submit">
                  Kirim ke WhatsApp
                </ModalButton>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const FormInput = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  isDark,
  required,
  placeholder,
}) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-3 rounded-lg text-sm sm:text-base ${
        isDark
          ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
          : "bg-gray-50 text-gray-800 border-gray-300 placeholder-gray-500"
      } border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
      required={required}
      placeholder={placeholder}
    />
  </div>
);

const FormTextarea = ({
  label,
  id,
  name,
  value,
  onChange,
  isDark,
  required,
  placeholder,
}) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-3 rounded-lg text-sm sm:text-base resize-y ${
        isDark
          ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
          : "bg-gray-50 text-gray-800 border-gray-300 placeholder-gray-500"
      } border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
      rows="3"
      required={required}
      placeholder={placeholder}
    ></textarea>
  </div>
);

const FormSelect = ({
  label,
  id,
  name,
  value,
  onChange,
  isDark,
  options,
  required,
}) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-3 rounded-lg text-sm sm:text-base ${
        isDark
          ? "bg-gray-700 text-white border-gray-600"
          : "bg-gray-50 text-gray-800 border-gray-300"
      } border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none`}
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const ModalButton = ({ type, onClick, isDark, variant, children }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    type={type}
    onClick={onClick}
    className={`py-3 px-6 rounded-lg font-medium text-sm sm:text-base transition-colors flex-1 sm:flex-none ${
      variant === "cancel"
        ? isDark
          ? "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
          : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300"
        : isDark
          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
          : "bg-indigo-600 hover:bg-indigo-700 text-white"
    }`}
  >
    {children}
  </motion.button>
);

export default RegistrationModal;
