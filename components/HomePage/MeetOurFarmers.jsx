import Image from "next/image";
import { SiMoleculer } from "react-icons/si";

const farmers = [
    {
        name: "Kevin Smith",
        role: "Farmer",
        image: "/Avatar1.png",
    },
    {
        name: "Jessica Brown",
        role: "Farmer",
        image: "/Avatar2.png",
    },
    {
        name: "David Martin",
        role: "Farmer",
        image: "/Avatar3.png",
    },
];

const MeetOurFarmers = () => {
    return (
        <section className="py-20 bg-white text-center">
            <p className="text-[#EEC044] font-semibold mb-2">Team Members</p>
            <h2 className="text-4xl font-bold text-black mb-10">Meet Our Farmers</h2>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 justify-center items-center">
                {farmers.map((farmer, index) => (
                    <div key={index} className="relative">
                        <div>
                            <Image
                                src={farmer.image}
                                alt={farmer.name}
                                width={400}
                                height={300}
                                className="w-full h-[450px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="rounded-lg shadow-md bg-white mt-10 px-10 py-3 w-fit relative bottom-20 -left-5">
                            <h4 className="text-lg font-semibold">{farmer.name}</h4>
                            <p className="text-sm">{farmer.role}</p>
                            <div className="bg-[#4BAF47] text-white p-2 rounded-[5px] w-fit absolute bottom-6 -left-5">
                                <SiMoleculer />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetOurFarmers;
