

import React from "react";
import { Mouse } from "lucide-react";
import { motion } from "motion/react"; 

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1689728222087-6984f72460c4?w=1600&auto=format&fit=crop&q=80"
          alt="Garden Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold tracking-widest mb-6"
        >
          Gärten, die sich wie Zuhause anfühlen
        </motion.h1>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="border tracking-widest cursor-pointer hover:scale-105 transition-all duration-500 border-white px-7 py-3  text-sm font-semibold  hover:bg-grunraum-primary hover:border-grunraum-primary rounded-xl shadow-lg"
        >
          Persönliche Beratung buchen
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 rounded-full"
      >
        <Mouse className="w-9 h-9 text-white animate-pulse" />
      </motion.div>
    </section>
  );
}
