import Image from "next/image";
import { MdWaterDrop } from "react-icons/md";
import { FaSeedling } from "react-icons/fa";
import { LuWind } from "react-icons/lu";

const services = [
    {
        title: "Bridging Science and Tradition",
        desc: "In many parts of the Asia-Pacific, traditional water practices have preserved balance with nature for centuries. We collaborate with indigenous and rural communities to revive and adapt these time-tested methods.",
        image: "/Waterr.jpg",
        icons: <MdWaterDrop />,

    },
    {
        title: "Cross-Border Cooperation",
        desc: "Water knows no borders — and neither do we. The challenges facing our rivers, lakes, and oceans require international dialogue and unity.",
        image: "/Leaf.jpg",
        icons: <FaSeedling />,

    },
    {
        title: "Education & Awareness",
        desc: "True change happens when people care — and understand. Our education initiatives, from public campaigns to school programs, aim to raise awareness about the importance of water conservation and how individuals can make a difference.",
        image: "/Wind.jpg",
        icons: <LuWind />,

    },
];

const WhatWeOffer = () => {
    return (
        <section className="py-20 bg-[#A1E3F9] z-[2] relative">
            <div className="text-center mb-12">
                <p className="text-[#3674b5] font-medium">Our Services</p>
                <h2 className="text-4xl font-bold ">Our Work In Action</h2>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition relative">
                        <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-52 object-cover" />
                        <div className="p-6">
                            <div className="text-white text-[50px] mb-4 w-15 h-15 flex items-center justify-center bg-[#3674b5] rounded-xl absolute right-[10px] top-[175px]">{service.icons}</div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm ">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeOffer;
