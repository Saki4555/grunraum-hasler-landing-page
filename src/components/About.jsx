// ! modernized version

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Phone, CheckCircle, Mail } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import aboutOne from "../assets/about-images/about-1.jpg"; // Adjust the path as necessary
import aboutTwo from "../assets/about-images/about-2.avif"; // Uncomment if you use this image

export default function About() {
  const services = [
    { name: "House Landscape", icon: "🏡" },
    { name: "Rooftop Gardening", icon: "🏢" },
    { name: "Lawn mowing & cleaning", icon: "🌱" },
    { name: "Indoor Plantation", icon: "🪴" },
    { name: "Green House Nursery", icon: "🌿" },
    { name: "Vegetable Gardening", icon: "🥕" },
  ];

  return (
    <div id="about" className="min-h-screen bg-gray-50 py-20 overflow-hidden">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 items-center">
          {/* Left Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full  border-white max-w-[400px] mx-auto order-2 lg:order-1"
          >
            {/* Main Large Image Container with Aspect Ratio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-20 w-full   bg-gradient-to-tr from-grunraum-primary/90 via-grunraum-secondary/50 to-grunraum-primary/90 p-1  overflow-hidden rounded-tr-[40%] rounded-bl-[40%] shadow-xl"
            >
              <img
                src={aboutOne}
                alt="Woman gardening"
                className="w-full h-[480px] object-cover "
              />
              {/* Experience Badge */}
              <div className="absolute bottom-0 w-full flex justify-center right-0 bg-grunraum-secondary/20 backdrop-blur-xl text-white   shadow-xl ">
                <div className="  tracking-wide text-center px-3 py-2.5 w-1/2 ml-10">
                  <p className="text-xl font-bold mb-0.5 ml-4">10+</p>
                  <p className="text-sm font-medium leading-none">
                    Years of Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Rectangular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
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
              className="inline-flex relative bg-grunraum-primary/80 px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium"
            >
              <Leaf className="w-4 h-4 " />
              About – Grünraum Hasler
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl tracking-wide  lg:text-4xl font-bold text-gray-900  leading-tight">
                Reliable care and honest work for your perfect garden
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-gray-800 text-base  leading-relaxed max-w-lg divide-y divide-gray-300/50"
            >
              <p className="font-semibold">
                With heart and hand for your green space.
              </p>
              <p className="text-justify">
                After many years of dedicated work in the gardening industry, I
                made the leap into self-employment with a clear goal: to create
                and maintain gardens that feel like a true haven – places where
                people can truly feel at home.
              </p>
              <p className="text-justify">
                While I may be new as an independent business owner, I bring
                with me extensive experience and deep roots in the field. You
                can count on Grünraum Hasler for reliability, genuine
                craftsmanship, and heartfelt commitment.
              </p>
            </motion.div>

            {/* Services List */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="border-l-4 border-green-500 pl-6 space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">House Landscape</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Rooftop Gardening
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Lawn mowing & cleaning
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Indoor Plantation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Green House Nursery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Vegetable Gardening
                  </span>
                </div>
              </div>
            </motion.div> */}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <a
                href="#contact"
                className="px-5 backdrop-blur-lg cursor-pointer py-2.5 relative rounded group overflow-hidden font-medium bg-grunraum-primary  text-white inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-500 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  {" "}
                  Contact Us
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
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-900">
                  Have Questions?
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
