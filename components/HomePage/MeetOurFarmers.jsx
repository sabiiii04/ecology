import Image from "next/image";
import { SiMoleculer } from "react-icons/si";

const farmers = [
    {
        name: "Regina Mekhtieva",
        role: "Delegate",
        image: "/Marchen.jpg",
    },
    {
        name: "Nuray Akbarova",
        role: "Coordinator",
        image: "/Ray.jpg",
    },
    {
        name: "Farah Kerimli",
        role: "PR Manager",
        image: "/Farah.jpg",
    },
];

const MeetOurFarmers = () => {
    return (
        <section className="py-20 bg-white text-center">
            <p className="text-[#3674b5] font-semibold mb-2">Team Members</p>
            <h2 className="text-4xl font-bold text-black mb-10">Meet Our Staff</h2>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 justify-center items-center">
                {farmers.map((farmer, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={farmer.image}
                            alt={farmer.name}
                            width={400}
                            height={300}
                            className="w-full h-[450px] object-cover rounded-lg"
                        />
                        <div className="rounded-lg shadow-md bg-white mt-10 px-10 py-3 w-fit relative bottom-20 left-1/2 transform -translate-x-1/2">
                            <h4 className="text-lg font-semibold">{farmer.name}</h4>
                            <p className="text-sm">{farmer.role}</p>
                            <div className="bg-[#A1E3F9] text-white p-2 rounded-[5px] w-fit absolute bottom-6 -right-5">
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

