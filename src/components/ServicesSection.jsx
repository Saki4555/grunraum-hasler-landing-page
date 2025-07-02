import React from "react";
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
  MessageSquare
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "General Garden Maintenance",
    description: "Ongoing care to keep your entire garden healthy, tidy, and thriving.",
    icon: Leaf
  },
  {
    id: 2,
    title: "Summer / Winter Pruning",
    description: "Seasonal pruning to maintain plant health and aesthetics.",
    icon: Scissors
  },
  {
    id: 3,
    title: "Spring & Fall Services",
    description: "Seasonal preparation, cleanup, and transitions for your garden.",
    icon: Sun
  },
  {
    id: 4,
    title: "New Plantings",
    description: "Fresh planting of trees, flowers, and shrubs to beautify your space.",
    icon: Sprout
  },
  {
    id: 5,
    title: "Spring and Fall Care",
    description: "Specialized attention for plants during seasonal changes.",
    icon: Repeat
  },
  {
    id: 6,
    title: "Plant Protection",
    description: "Safeguarding your plants from pests, frost, and diseases.",
    icon: ShieldCheck
  },
  {
    id: 7,
    title: "Dry Stone Walls",
    description: "Rustic and sturdy walls crafted from natural stone.",
    icon: Mountain
  },
  {
    id: 8,
    title: "Mowing, Aerating, Fertilizing Lawns",
    description: "Complete care for thick, green, healthy lawns.",
    icon: TreePine
  },
  {
    id: 9,
    title: "Hedge, Shrub, and Shape Pruning",
    description: "Structural and aesthetic trimming for all plant shapes.",
    icon: Crop
  },
  {
    id: 10,
    title: "Fruit Tree Pruning & Ornamental Shrub Care",
    description: "Boost yields and shape ornamental shrubs with expert care.",
    icon: Apple
  },
  {
    id: 11,
    title: "Bed Care: Weeding, Mulching, Fertilizing",
    description: "Maintain plant beds for nutrition, appearance, and weed control.",
    icon: Layers
  },
  {
    id: 12,
    title: "Leaf Removal & Seasonal Cleaning",
    description: "Clear your garden of leaves and seasonal debris.",
    icon: Wind
  },
  {
    id: 13,
    title: "Weed Control",
    description: "Protect your space from invasive, unwanted plants.",
    icon: Ban
  },
  {
    id: 14,
    title: "Winter Protection Installation & Spring Preparation",
    description: "Install winter shields and prep your garden for spring rebirth.",
    icon: Snowflake
  },
  {
    id: 15,
    title: "Garden Consultation",
    description: "Tailored advice to bring your garden ideas to life.",
    icon: MessageSquare
  }
];




export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Garden Services
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
