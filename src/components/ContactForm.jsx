import fromBg from "../assets/contact-images/form-bg-1.webp";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const variants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 50 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const backgroundStyle = {
    backgroundImage: `url(${fromBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple front-end validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return;
    }
    setLoading(true);
    toast.error( <div className="tracking wider">
        Fehler beim Senden der Nachricht. Bitte kontaktieren Sie uns direkt unter{" "}
        <a
          href="mailto:info@gruenraumhasler.ch"
          className="underline tracking-wider text-lime-500 hover:text-lime-600"
        >
          info@gruenraumhasler.ch
        </a>
      </div>);
    setLoading(false);

   
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      style={backgroundStyle}
      className="px-4 sm:px-7 lg:px-10 text-white w-full md:w-2/3 py-10 relative z-20"
    >
      <div className="absolute inset-0 bg-black/5 -z-10 md:backdrop-blur-[2px]"></div>
      <div className="max-w-3xl mx-auto text-white z-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-wider">
          Bringen wir Leben in Ihren Garten
        </h2>
        <p className="text-lg mb-8 tracking-wider">
          Mit Herz und Hand für Ihr Grün
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Row 1: Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 placeholder:tracking-widest text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 placeholder:tracking-widest placeholder:text-sm text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
              required
            />
          </div>

          {/* Row 2: Phone No */}
          <input
            type="tel"
            name="phone"
            placeholder="Telefonnummer*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 placeholder:tracking-widest placeholder:text-sm text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
            required
          />

          {/* Message Box */}
          <textarea
            rows="4"
            name="message"
            placeholder="Nachricht*"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black placeholder:tracking-widest placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
            required
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-5 backdrop-blur-xl cursor-pointer py-2.5 relative group overflow-hidden rounded-xl font-medium bg-gradient-to-r from-lime-500/80 via-lime-700 to-lime-500/80 text-white inline-block disabled:opacity-50"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-lime-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white tracking-wider">
              {loading ? "Wird gesendet..." : "Nachricht senden"}
            </span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
