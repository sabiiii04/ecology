import React from 'react';
import Image from "next/image";


const HeroSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 z-[2] bg-white relative overflow-hidden" style={{ backgroundImage: `url("/Water Graphic.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                <div>
                    <p className="text-[#3674b5] font-medium mb-2">Get to know us</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Who We Are
                    </h1>
                    <p className="mb-6 max-w-lg">
                        There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-3">
                            <div className="w-10 h-10 bg-[#3674b5] rounded-full flex items-center justify-center text-white text-lg font-bold">→</div>
                            <div>
                                <p className="text-[#3674b5] text-sm font-semibold">Modern agriculture types</p>
                                <p className="text-xs">We’re here for you from start to finish</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#3674b5] hover:bg-[#365fb5] text-white font-medium px-6 py-3 rounded-md shadow">
                        Discover More
                    </button>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-1/2">
                        <Image
                            src={"/GirlSea.jpg"}
                            alt={"Water"}
                            width={400}
                            height={500}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                            src={"/WaterHands.jpg"}
                            alt={"Water"}
                            width={400}
                            height={500}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
