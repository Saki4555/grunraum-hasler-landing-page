// ! modernized version

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Phone, CheckCircle } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Left Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full  border-white max-w-[400px] mx-auto order-2 lg:order-1"
          >
            {/* Main Large Image Container with Aspect Ratio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-20 w-full max-h-[85vh] bg-gradient-to-tr from-grunraum-primary/90 via-grunraum-secondary/50 to-grunraum-primary/90 p-1  overflow-hidden rounded-tr-[40%] rounded-bl-[40%] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1689728222087-6984f72460c4?w=500&auto=format&fit=crop&q=60"
                alt="Woman gardening"
                className="w-full h-full object-fit "
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
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-16 -right-10 lg:-right-14 z-30 max-w-3/5"
            >
              <div className="relative w-full bg-gradient-to-tr from-grunraum-primary/90 via-grunraum-secondary/50 to-grunraum-primary/90 p-1  rounded-tr-[40%] rounded-bl-[40%] overflow-hidden shadow-lg bg-white">
                <img
                  src="https://images.unsplash.com/photo-1689728222087-6984f72460c4?w=500&auto=format&fit=crop&q=60"
                  alt="Man with plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* About Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex relative bg-grunraum-primary px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium"
            >
              <Leaf className="w-4 h-4 " />
              About – Grünraum Hasler
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="text-3xl  lg:text-4xl font-bold text-gray-900  leading-tight">
              Reliable care and honest work for your perfect garden
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-600 text-lg  leading-relaxed max-w-lg"
            >
              <p className="font-semibold">With heart and hand for your green space.</p>
              <p>After many years of dedicated work in the gardening industry, I made the leap into self-employment with a clear goal: to create and maintain gardens that feel like a true haven – places where people can truly feel at home.</p>
              <p>While I may be new as an independent business owner, I bring with me extensive experience and deep roots in the field. You can count on Grünraum Hasler for reliability, genuine craftsmanship, and heartfelt commitment.</p>
              
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full">
                Contact Us
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Phone className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Have Questions?
                  </p>
                  <p className="text-sm text-gray-600">+01 548 378 333</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
