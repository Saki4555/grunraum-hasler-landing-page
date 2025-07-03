import React from "react";
import { Mouse } from "lucide-react"; // Choose a modern icon

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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
        <h1 className="text-3xl md:text-5xl font-semibold tracking-widest mb-6">
         Gardens That Feel Like Home
        </h1>
        <a href="#contact" className="border cursor-pointer hover:scale-105 transition-all duration-500 border-white px-6 py-3 uppercase text-sm font-semibold tracking-wide hover:bg-grunraum-primary hover:border-grunraum-primary rounded-3xl shadow-lg">
          Book a Personal Consultation
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2  rounded-full">
        <Mouse className="w-9 h-9 text-white animate-pulse" />
      </div>
    </section>
  );
}
