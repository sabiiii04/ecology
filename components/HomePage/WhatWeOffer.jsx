import Image from "next/image";
import { PiTractorFill } from "react-icons/pi";
import { FaSeedling } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";

const services = [
    {
        title: "Agriculture Products",
        desc: "Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
        image: "/agriculture.png",
        icons: <PiTractorFill />,

    },
    {
        title: "Organic Products",
        desc: "Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
        image: "/organic.png",
        icons: <FaSeedling />,

    },
    {
        title: "Dairy Products",
        desc: "Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
        image: "/dairy.png",
        icons: <GiMilkCarton />,

    },
];

const WhatWeOffer = () => {
    return (
        <section className="py-20 bg-[#fdfbf5] z-[2] relative">
            <Image
                src={"/wheats.png"}
                alt={"background"}
                width={1000}
                height={500}
                className="absolute left-0 bottom-[0] z-[-1]"
            />
            <div className="text-center mb-12">
                <p className="text-[#EEC044] font-medium">Our Services</p>
                <h2 className="text-4xl font-bold ">What We Offer</h2>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition relative">
                        <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-52 object-cover" />
                        <div className="p-6">
                            <div className="text-white text-[50px] mb-4 w-15 h-15 flex items-center justify-center bg-[#C5CE38] rounded-xl absolute right-[10px] top-[175px]">{service.icons}</div>
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
