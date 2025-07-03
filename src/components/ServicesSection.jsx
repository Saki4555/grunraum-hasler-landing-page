import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BedCareWeedingMulchingFertilizing,
  DryStoneWalls,
  FruitTreePruningOrnamentalShrubCare,
  GardenConsultation,
  HedgeShrubAndShapePruning,
  LeafRemovalSeasonalCleaning,
  MowingAeratingFertilizingLawns,
  NewPlantings,
  PlantProtection,
  SpringFallServices,
  SpringAndFallCare,
  SummerWinterPruning,
  WeedControl,
  WinterProtectionInstallationSpringPreparation,
} from "../assets";
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
import { s } from "motion/react-client";

const services = [
  {
    id: 1,
    title: "General Garden Maintenance",
    description:
      "Ongoing care to keep your entire garden healthy, tidy, and thriving.",
    icon: Leaf,
    image: BedCareWeedingMulchingFertilizing,
  },
  {
    id: 2,
    title: "Summer / Winter Pruning",
    description: "Seasonal pruning to maintain plant health and aesthetics.",
    icon: Scissors,
    image: SummerWinterPruning,
  },
  {
    id: 3,
    title: "Spring & Fall Services",
    description:
      "Seasonal preparation, cleanup, and transitions for your garden.",
    icon: Sun,
    image: SpringFallServices,
  },
  {
    id: 4,
    title: "New Plantings",
    description:
      "Fresh planting of trees, flowers, and shrubs to beautify your space.",
    icon: Sprout,
    image: NewPlantings,
  },
  {
    id: 5,
    title: "Spring and Fall Care",
    description: "Specialized attention for plants during seasonal changes.",
    icon: Repeat,
    image: SpringAndFallCare,
  },
  {
    id: 6,
    title: "Plant Protection",
    description: "Safeguarding your plants from pests, frost, and diseases.",
    icon: ShieldCheck,
    image: PlantProtection,
  },
  {
    id: 7,
    title: "Dry Stone Walls",
    description: "Rustic and sturdy walls crafted from natural stone.",
    icon: Mountain,
    image: DryStoneWalls,
  },
  {
    id: 8,
    title: "Mowing, Aerating, Fertilizing Lawns",
    description: "Complete care for thick, green, healthy lawns.",
    icon: TreePine,
    image: MowingAeratingFertilizingLawns,
  },
  {
    id: 9,
    title: "Hedge, Shrub, and Shape Pruning",
    description: "Structural and aesthetic trimming for all plant shapes.",
    icon: Crop,
    image: HedgeShrubAndShapePruning,
  },
  {
    id: 10,
    title: "Fruit Tree Pruning & Ornamental Shrub Care",
    description: "Boost yields and shape ornamental shrubs with expert care.",
    icon: Apple,
    image: FruitTreePruningOrnamentalShrubCare,
  },
  {
    id: 11,
    title: "Bed Care: Weeding, Mulching, Fertilizing",
    description:
      "Maintain plant beds for nutrition, appearance, and weed control.",
    icon: Layers,
    image: BedCareWeedingMulchingFertilizing,
  },
  {
    id: 12,
    title: "Leaf Removal & Seasonal Cleaning",
    description: "Clear your garden of leaves and seasonal debris.",
    icon: Wind,
    image: LeafRemovalSeasonalCleaning,
  },
  {
    id: 13,
    title: "Weed Control",
    description: "Protect your space from invasive, unwanted plants.",
    icon: Ban,
    image: WeedControl,
  },
  {
    id: 14,
    title: "Winter Protection Installation & Spring Preparation",
    description:
      "Install winter shields and prep your garden for spring rebirth.",
    icon: Snowflake,
    image: WinterProtectionInstallationSpringPreparation,
  },
  {
    id: 15,
    title: "Garden Consultation",
    description: "Tailored advice to bring your garden ideas to life.",
    icon: MessageSquare,
    image: GardenConsultation,
  },
];

const ITEMS_PER_PAGE = 6;

export default function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const displayedServices = services.slice(startIdx, endIdx);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16" id="services">
      <SectionContainer>
        {/* Badge */}
        <div className="w-full flex justify-center">
          <div className="inline-flex relative bg-grunraum-primary/80 px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium">
            <Leaf className="w-4 h-4" />
            Services – Grünraum Hasler
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl tracking-wide sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Garden Services
        </h2>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <motion.div
          
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: Math.min(index * 0.05, 0.2), // caps delay at 0.2s
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.icon}
                image={service.image}
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-grunraum-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </SectionContainer>
    </section>
  );
}
