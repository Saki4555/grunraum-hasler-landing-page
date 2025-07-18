import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { SectionContainer } from "./SectionContainer";
import { motion } from "motion/react";
import { Leaf } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-flex  tracking-wider relative bg-grunraum-primary/80 px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium"
        >
          <Leaf className="w-4 h-4 " />
          Kontakt – Grünraum Hasler
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-3xl mt-2 sm:text-4xl font-bold tracking-wider text-gray-800 mb-10 text-center"
      >
        Kontaktieren Sie uns
      </motion.h2>
      <SectionContainer>
        <div className="md:flex rounded-2xl ">
          <ContactInfo />
          <ContactForm />
        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactUs;
