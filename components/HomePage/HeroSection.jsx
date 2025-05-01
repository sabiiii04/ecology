import React from 'react';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="h-screen" style={{ backgroundImage: `url("/hero_bg.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Navbar />
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="flex flex-col leading-[100px] text-center text-white text-[80px] font-extrabold">
                    <span>Natural Products</span>
                    <span>For Lovers of{" "}
                        <span className="relative text-[#EEC044] z-[2]">
                            Healthy
                            <Image className={"absolute right-0 -bottom-[10px] z-[1]"} src={"/line.png"} alt={"yellow line"} width={270} height={31}/>
                        </span>
                    </span>
                    <span>Organic Food</span>
                </h1>
                <Link href={"/"} className="text-white font-bold bg-[#4BAF47] px-8 py-4 rounded-[10px]">
                    Discover More
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;