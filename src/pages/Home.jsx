import About from "../components/About"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import OfferSection from "../components/OfferSection"

import ServicesSection from "../components/ServicesSection"


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <OfferSection />
    <ServicesSection />
    <ContactUs />
    <Footer />
    </>
  )
}

export default Home