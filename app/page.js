import HeroSection from "@/components/HomePage/HeroSection";
import Leader from "@/components/HomePage/Leader";
import WhatWeOffer from "@/components/HomePage/WhatWeOffer";
import FAQ from "@/components/HomePage/FAQ";
import Projects from "@/components/HomePage/Projects";
import Market from "@/components/HomePage/Market";
import MeetOurFarmers from "@/components/HomePage/MeetOurFarmers";
import EcoFriendly from "@/components/HomePage/EcoFriendly";
import News from "@/components/HomePage/News";
import ContactUs from "@/components/HomePage/ContactUs";
import Logos from "@/components/HomePage/Logos";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
        <HeroSection />
        <Leader/>
        <WhatWeOffer/>
        <FAQ/>
        <Projects/>
        <Market/>
        <MeetOurFarmers/>
        <EcoFriendly/>
        <News/>
        <ContactUs/>
        <Logos/>
        <Footer/>
    </>
  );
}
