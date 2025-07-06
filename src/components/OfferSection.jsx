import { BadgePercent, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect, useState } from "react";
import { SectionContainer } from "./SectionContainer";
import profilePhoto from '../assets/about-images/about-2.jpg';

export default function OfferSection() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const variants = {
    hiddenLeft: { opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 50 : 0 },
    hiddenRight: { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 50 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <section id="offer" className=" bg-gray-50 overflow-hidden py-16">
      <SectionContainer>
        {" "}
        <div className=" grid md:grid-cols-2  gap-5 lg:gap-10 items-center">
          {/* Left Text Section */}
          <motion.div
            variants={variants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-flex tracking-wider relative bg-grunraum-primary/80 px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium"
              >
                <Leaf className="w-4 h-4 " />
                Angebot – Grünraum Hasler
              </motion.div>
            </div>
            <h2 className="text-2xl tracking-wider  lg:text-3xl font-bold text-gray-900  leading-tight">
              Unsere Angebote
            </h2>

            <p className="text-gray-800 leading-relaxed tracking-wider">
              Mit Erfahrung, Herz und Hand für Ihr Grün: Grünraum Hasler bietet
              Ihnen professionelle Gartenpflege und individuelle Beratung für
              Ihr Zuhause.
            </p>

            <div className="flex items-center gap-2 mt-4   tracking-wider text-grunraum-primary font-semibold">
              <BadgePercent className="w-5 h-5" />
              <span>Jetzt 10% Rabatt auf Ihre erste Buchung!</span>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            variants={variants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[6/5]"
          >
            <img
              src={profilePhoto || "https://cdn.pixabay.com/photo/2017/09/25/20/07/lawnmower-2786525_640.jpg"}
              alt="Gartenangebot"
              loading="lazy"
              className="w-full h-full object-cover object-center rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
