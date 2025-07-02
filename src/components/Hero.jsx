

// ! v 1

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10 py-20">

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            With Heart and Hand for Your Greenery
          </h1>
          <p className="text-lg mb-8">
            We create and care for gardens where you truly feel at home. Trust in experience, commitment, and honest work.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition">
              Get 10% Discount
            </button>
            <button className="bg-white hover:bg-gray-200 text-green-800 font-semibold py-3 px-6 rounded-xl transition">
              Our Services
            </button>
          </div>
        </motion.div>

        {/* Floating Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8fDA%3D"
            alt="Garden example"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-72 h-48 object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
