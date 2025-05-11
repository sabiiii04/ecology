import React from 'react';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="h-screen relative w-full" style={{ backgroundImage: `url("/HeroBg.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <Navbar />
            <div className="h-full flex flex-col justify-center items-center z-10 relative">
                <h1 className="flex flex-col leading-[100px] text-center text-white text-[80px] font-extrabold">
                    <span>Every</span>
                    <span>Drop{" "}
                        <span className="relative text-[#D1F8ef] z-[2]">
                            Counts
                        </span>
                    </span>
                    <span>Don't Waste It</span>
                </h1>
                <Link href={"/"} className="text-white font-bold bg-[#3674b5] px-8 py-4 rounded-[10px]">
                    Discover More
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;