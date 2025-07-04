import { Phone, Mail, MapPin } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ContactInfo = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null; 
  }
  const variants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 50 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-green-100/40 w-full md:w-1/3   p-8 shadow-md   flex flex-col justify-center"
    >
      <h3 className="text-2xl font-bold tracking-wider text-green-800 mb-6">
        Melden Sie sich bei uns
      </h3>

      <div className="space-y-5 text-green-900 divide-y divide-green-100 text-sm">
        <div className="flex items-start gap-4 group  pb-1">
          <div className="px-2 py-1.5 transition-colors shadow-sm duration-300  bg-green-200 group-hover:bg-green-700 group-hover:text-white  rounded-lg">
            <Phone className="" />
          </div>
          <div>
            <p className="font-semibold tracking-wider">Telefon</p>
            <a href="tel:+41799397986" className="hover:underline block tracking-wider">
              +41 79 939 79 86
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
           <div className="px-1.5  py-1.5 transition-colors shadow-sm duration-300 bg-green-200 rounded-lg group-hover:bg-green-700 group-hover:text-white">
             <Mail className="" />
          </div>
         
          <div>
            <p className="font-semibold tracking-wider">E-Mail</p>
            <a
              href="mailto:info@gruenraumhasler.ch"
              className="hover:underline block break-all  tracking-wider"
            >
              info@gruenraumhasler.ch
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="px-1.5  py-1.5 shadow-sm transition-colors duration-300 bg-green-200 rounded-lg group-hover:bg-green-700 group-hover:text-white">
            <MapPin className="" />
          </div>
          <div>
            <p className="font-semibold tracking-wider">Adresse</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Zürcherstrasse+304,+8645+Jona"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block  tracking-wider"
            >
              Zürcherstrasse 304
              <br />
              8645 Jona
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
