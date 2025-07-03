import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  Leaf,
  Scissors,
  Sun,
  Sprout,
  Repeat,
  ShieldCheck,
  Mountain,
  TreePine,
  Crop,
  Apple,
  Layers,
  Wind,
  Ban,
  Snowflake,
  MessageSquare,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";

export const services = [
  {
    id: 1,
    title: "General Garden Maintenance",
    description:
      "Ongoing care to keep your entire garden healthy, tidy, and thriving.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Summer / Winter Pruning",
    description: "Seasonal pruning to maintain plant health and aesthetics.",
    icon: Scissors,
  },
  {
    id: 3,
    title: "Spring & Fall Services",
    description:
      "Seasonal preparation, cleanup, and transitions for your garden.",
    icon: Sun,
  },
  {
    id: 4,
    title: "New Plantings",
    description:
      "Fresh planting of trees, flowers, and shrubs to beautify your space.",
    icon: Sprout,
  },
  {
    id: 5,
    title: "Spring and Fall Care",
    description: "Specialized attention for plants during seasonal changes.",
    icon: Repeat,
  },
  {
    id: 6,
    title: "Plant Protection",
    description: "Safeguarding your plants from pests, frost, and diseases.",
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: "Dry Stone Walls",
    description: "Rustic and sturdy walls crafted from natural stone.",
    icon: Mountain,
  },
  {
    id: 8,
    title: "Mowing, Aerating, Fertilizing Lawns",
    description: "Complete care for thick, green, healthy lawns.",
    icon: TreePine,
  },
  {
    id: 9,
    title: "Hedge, Shrub, and Shape Pruning",
    description: "Structural and aesthetic trimming for all plant shapes.",
    icon: Crop,
  },
  {
    id: 10,
    title: "Fruit Tree Pruning & Ornamental Shrub Care",
    description: "Boost yields and shape ornamental shrubs with expert care.",
    icon: Apple,
  },
  {
    id: 11,
    title: "Bed Care: Weeding, Mulching, Fertilizing",
    description:
      "Maintain plant beds for nutrition, appearance, and weed control.",
    icon: Layers,
  },
  {
    id: 12,
    title: "Leaf Removal & Seasonal Cleaning",
    description: "Clear your garden of leaves and seasonal debris.",
    icon: Wind,
  },
  {
    id: 13,
    title: "Weed Control",
    description: "Protect your space from invasive, unwanted plants.",
    icon: Ban,
  },
  {
    id: 14,
    title: "Winter Protection Installation & Spring Preparation",
    description:
      "Install winter shields and prep your garden for spring rebirth.",
    icon: Snowflake,
  },
  {
    id: 15,
    title: "Garden Consultation",
    description: "Tailored advice to bring your garden ideas to life.",
    icon: MessageSquare,
  },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll
    ? services
    : services.slice(0, Math.ceil(services.length / 2));

  return (
    <section className="bg-gray-50 py-16 " id="services">
        <SectionContainer>

        {/* Badge */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex relative bg-grunraum-primary px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium"
          >
            <Leaf className="w-4 h-4" />
            Services – Grünraum Hasler
          </motion.div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Garden Services
        </h2>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-10 flex justify-center">
          <button onClick={() => setShowAll(!showAll)} className="px-5 cursor-pointer py-2.5 relative rounded group overflow-hidden font-medium bg-gradient-to-r from-grunraum-secondary/80 via-grunraum-primary to-grunraum-secondary/80  text-white inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-400 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-black"> {showAll ? "Show Less" : "Show All Services"}</span>
          </button>
        
        </div>
      
        </SectionContainer>
     
    </section>
  );
}
