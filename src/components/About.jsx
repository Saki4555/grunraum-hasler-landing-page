// ! modernized version

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Phone,  Mail } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import aboutOne from "../assets/about-images/about-1.jpg"; // Adjust the path as necessary
import aboutTwo from "../assets/about-images/about-2.avif"; // Uncomment if you use this image


export default function About() {
  return (
    <div id="about" className="min-h-screen bg-gray-50 pt-20 pb-16 overflow-hidden">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-14 items-center">
          {/* Left Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full  border-white max-w-[400px] mx-auto order-2 lg:order-1"
          >
            {/* Main Large Image Container with Aspect Ratio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative z-20 w-full   bg-gradient-to-tr from-grunraum-primary/90 via-grunraum-secondary/50 to-grunraum-primary/90 p-1  overflow-hidden rounded-tr-[40%] rounded-bl-[40%] shadow-xl"
            >
              <img
                src={aboutOne}
                alt="Woman gardening"
                className="w-full h-[480px] object-cover "
              />
              {/* Experience Badge */}
              <div className="absolute bottom-0 w-full flex justify-center right-0 bg-grunraum-secondary/20 backdrop-blur-xl text-white   shadow-xl ">
                <div className="  tracking-wider text-center px-3 py-2.5 w-1/2 ml-10">
                  <p className="text-xl font-bold mb-0.5 ml-4">10+</p>
                  <p className="text-sm font-medium leading-none">
                    Jahre Erfahrung
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Rectangular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute bottom-16 -right-2.5 sm:-right-5 md:-right-14 z-30 max-w-3/5"
            >
              <div className="relative w-full bg-gradient-to-tr from-grunraum-primary/90 via-grunraum-secondary/50 to-grunraum-primary/90 p-1  rounded-tr-[40%] rounded-bl-[40%] overflow-hidden shadow-lg bg-white">
                <img
                  src={aboutTwo}
                  alt="Man with plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* About Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex relative bg-grunraum-primary/80 px-4 py-2 overflow-hidden items-center gap-2 tracking-wider rounded-full text-white text-sm font-medium"
            >
              <Leaf className="w-4 h-4 " />
              Über uns – Grünraum Hasler
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl tracking-wider  lg:text-3xl font-bold text-gray-900  leading-tight">
                Zuverlässige Pflege und ehrliche Arbeit für Ihren perfekten
                Garten
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-gray-800 text-base leading-relaxed tracking-wider max-w-lg space-y-0.5 divide-y divide-gray-300/60"
            >
              <p className="font-semibold">Mit Herz und Hand für Ihr Grün</p>
              <p className="text-justify">
                Nach Jahren harter Arbeit im Gartenbau habe ich den Schritt in
                die Selbstständigkeit gewagt mit einem Ziel: Gärten zu schaffen
                und zu pflegen, in denen man sich wirklich wohl fühlt.
              </p>
              <p className="text-justify">
                Ich bin neu als Unternehmer, aber nicht neu in der Branche.
                Vertrauen Sie auf Erfahrung, Engagement und ehrliche Arbeit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <a
                href="#contact"
                className="px-5 backdrop-blur-lg rounded-xl cursor-pointer py-2.5 relative  group overflow-hidden font-medium bg-grunraum-primary  text-white inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-500 group-hover:h-full opacity-90"></span>
                <span className="relative tracking-wider group-hover:text-white">
                  {" "}
                  Kontaktieren Sie uns
                </span>
              </a>
              {/* <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-300 rounded-full">
                  <Phone className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    Have Questions?
                  </p>
                  <p className="text-base text-gray-600">
                    <a
                      href="tel:+41799397986"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-grunraum-primary transition-colors"
                      aria-label="Call +41 79 939 79 86"
                    >
                      +41 79 939 79 86
                    </a>
                  </p>
                 <p className="text-base text-gray-600">
                   <a
                    href="mailto:info@gruenraumhasler.ch"
                    className="block hover:underline focus:outline-none focus:ring-2 focus:ring-grunraum-primary transition-colors "
                    aria-label="Email info@gruenraumhasler.ch"
                  >
                    info@gruenraumhasler.ch
                  </a>
                 </p>
                </div>
              </div> */}
              <div className="space-y-1 tracking-wide">
                <p className="text-sm font-semibold text-gray-900">
                  Haben Sie Fragen?
                </p>
                <div className="flex text-sm items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-green-700" />
                  <a
                    href="tel:+41799397986"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-grunraum-primary transition-colors"
                    aria-label="Call +41 79 939 79 86"
                  >
                    +41 79 939 79 86
                  </a>
                </div>
                <div className="flex text-sm items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 text-green-700" />
                  <a
                    href="mailto:info@gruenraumhasler.ch"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-grunraum-primary transition-colors"
                    aria-label="Email info@gruenraumhasler.ch"
                  >
                    info@gruenraumhasler.ch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
