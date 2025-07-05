import { useRef, useState } from "react";
import {  motion } from "motion/react";
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

  SummerWinterPruning,
  WeedControl,
  WinterProtectionInstallationSpringPreparation,
  BalconyPlanting,
  GardenCare,
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


const services = [
  {
    id: 1,
    title: "Allgemeine Gartenpflege",
    description: "Umfassende Pflege für Ihren gesamten Garten – regelmäßiges Jäten, Gießen, Schneiden und Aufräumen, damit Ihre Grünflächen stets gesund und gepflegt bleiben.",
    icon: Leaf,
    image: GardenCare,
    alt: "Allgemeine Gartenpflege",
  },
  {
    id: 2,
    title: "Bepflanzung von Balkonen",
    description: "Professionelle Begrünung von Balkonen – wir gestalten Ihren Balkon individuell mit Pflanzen, Blumen oder Kräutern und schaffen so eine grüne Wohlfühloase auch auf kleinem Raum.",
    icon: Sprout,
    image: BalconyPlanting,
    alt: "Bepflanzung von Balkonen",
  },
  {
    id: 3,
    title: "Sommer- / Winterschnitt",
    description: "Gezielte Rückschnitte im Sommer und Winter zur Förderung des Wachstums, der Blütenbildung und zur Formgebung von Sträuchern, Hecken und Bäumen.",
    icon: Scissors,
    image: SummerWinterPruning,
    alt: "Sommer- / Winterschnitt",
  },
  {
    id: 4,
    title: "Frühjahrs- & Herbstservice",
    description: "Professionelle Gartenarbeiten zu Saisonbeginn und -ende – inklusive Laubentfernung, Rückschnitt, Beetpflege und Vorbereitung auf den Winter oder Frühling.",
    icon: Sun,
    image: SpringFallServices,
    alt: "Frühjahrs- & Herbstservice",
  },
  {
    id: 5,
    title: "Neupflanzungen",
    description: "Beratung, Planung und Umsetzung von Neupflanzungen – ob Blumen, Sträucher oder Bäume, wir bringen neues Leben in Ihren Garten.",
    icon: Sprout,
    image: NewPlantings,
    alt: "Neupflanzungen",
  },
 
  {
    id: 6,
    title: "Pflanzenschutz",
    description: "Effektive Maßnahmen gegen Schädlinge, Pilze und Frost – wir schützen Ihre Pflanzen nachhaltig und umweltschonend.",
    icon: ShieldCheck,
    image: PlantProtection,
    alt: "Pflanzenschutz",
  },
  {
    id: 7,
    title: "Trockenmauern",
    description: "Errichtung und Instandhaltung von Trockenmauern aus Naturstein – ideal zur Hangbefestigung oder als stilvolles Gestaltungselement im Garten.",
    icon: Mountain,
    image: DryStoneWalls,
    alt: "Trockenmauern",
  },
  {
    id: 8,
    title: "Rasen mähen, vertikutieren, düngen",
    description: "Ganzheitliche Rasenpflege – von regelmäßigem Mähen bis zur gezielten Belüftung und Nährstoffversorgung für einen dichten, grünen Rasen.",
    icon: TreePine,
    image: MowingAeratingFertilizingLawns,
    alt: "Rasen mähen, vertikutieren, düngen",
  },
  {
    id: 9,
    title: "Hecken-, Strauch- und Formschnitt",
    description: "Sorgfältiger Schnitt für Form, Gesundheit und Ästhetik Ihrer Hecken, Büsche und Zierpflanzen – fachgerecht und pflanzenschonend.",
    icon: Crop,
    image: HedgeShrubAndShapePruning,
    alt: "Hecken-, Strauch- und Formschnitt",
  },
  {
    id: 10,
    title: "Obstbaumschnitt & Ziergehölzpflege",
    description: "Professioneller Rückschnitt für gesunde Ernteerträge bei Obstbäumen und gepflegte, schön wachsende Ziergehölze.",
    icon: Apple,
    image: FruitTreePruningOrnamentalShrubCare,
    alt: "Obstbaumschnitt & Ziergehölzpflege",
  },
  {
    id: 11,
    title: "Beetpflege: Jäten, Mulchen, Düngen",
    description: "Pflege Ihrer Blumen- und Gemüsebeete für ein optimales Wachstum – mit Unkrautentfernung, Mulchen und gezielter Düngung.",
    icon: Layers,
    image: BedCareWeedingMulchingFertilizing,
    alt: "Beetpflege: Jäten, Mulchen, Düngen",
  },
  {
    id: 12,
    title: "Laubentfernung & Saisonreinigung",
    description: "Gründliche Reinigung Ihres Gartens zur Frühlings- oder Herbstsaison – inklusive Laubräumung, Schnittgutentsorgung und Flächenpflege.",
    icon: Wind,
    image: LeafRemovalSeasonalCleaning,
    alt: "Laubentfernung & Saisonreinigung",
  },
  {
    id: 13,
    title: "Unkrautbekämpfung",
    description: "Effektive und nachhaltige Bekämpfung von Unkraut – mechanisch oder biologisch, je nach Bedarf und Umweltverträglichkeit.",
    icon: Ban,
    image: WeedControl,
    alt: "Unkrautbekämpfung",
  },
  {
    id: 14,
    title: "Winterschutz & Frühjahrsaufbereitung",
    description: "Schutzmaßnahmen wie Vlies, Abdeckungen oder Rückschnitte vor dem Winter sowie gründliche Vorbereitung Ihrer Pflanzen auf das Frühjahr.",
    icon: Snowflake,
    image: WinterProtectionInstallationSpringPreparation,
    alt: "Winterschutz & Frühjahrsaufbereitung",
  },
  {
    id: 15,
    title: "Garten-Beratung",
    description: "Individuelle Beratung direkt vor Ort – ob Umgestaltung, Pflanzenauswahl oder Pflegekonzepte, wir unterstützen Sie mit Fachwissen und Erfahrung.",
    icon: MessageSquare,
    image: GardenConsultation,
    alt: "Garten-Beratung",
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
          <div className="inline-flex tracking-wider relative bg-grunraum-primary/80 px-4 py-2 overflow-hidden items-center gap-2 rounded-full text-white text-sm font-medium">
            <Leaf className="w-4 h-4" />
            Leistungen – Grünraum Hasler
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl mt-2 tracking-wider sm:text-4xl font-bold text-gray-800 mb-12 text-center">
  Unsere Gartenleistungen
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
                alt={service.alt}
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}  viewport={{ once: true , amount: 0.4 }} transition={{ duration: 0.8 }} className="mt-10 flex justify-center items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 tracking-wider bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
             Zurück
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
            className="px-3 py-1 bg-gray-200 tracking-wider rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Weiter
          </button>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
