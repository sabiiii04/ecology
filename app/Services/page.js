import React from 'react';
import ServicesList from "@/components/ServicePage/ServicesList";
import ServiceNavbar from "@/components/ServicePage/ServiceNavbar";
import ServiceHeroSection from "@/components/ServicePage/ServiceHeroSection";
import Logos from "@/components/HomePage/Logos";
import EcoFriendly from "@/components/HomePage/EcoFriendly";


const Page = () => {
    return (
        <div>
            <ServiceNavbar/>
            <ServiceHeroSection/>
            <ServicesList/>
            <Logos/>
            <EcoFriendly/>
        </div>
    );
};

export default Page;