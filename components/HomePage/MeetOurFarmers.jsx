import Image from "next/image";

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

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {farmers.map((farmer, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
                        <div className="relative">
                            <Image
                                src={farmer.image}
                                alt={farmer.name}
                                width={400}
                                height={300}
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute bottom-[-20px] left-4 rounded-full p-2 shadow-md">
                                <div className="bg-[#4BAF47] text-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77l-7.13-3.56c.05-.23.09-.47.09-.72s-.03-.49-.09-.72l7.1-3.56A2.99 2.99 0 0018 7.91c1.66 0 3 1.35 3 3s-1.34 3.17-3 3.17zM6 8.1c-1.66 0-3 1.35-3 3s1.34 3 3 3c.76 0 1.44-.3 1.96-.77l7.13 3.56c-.05.23-.09.47-.09.72s.03.49.09.72L7.96 19.2A2.99 2.99 0 006 20.1c-1.66 0-3-1.35-3-3s1.34-2.99 3-2.99z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 px-4 pb-6">
                            <h4 className="text-lg font-semibold">{farmer.name}</h4>
                            <p className="text-sm">{farmer.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetOurFarmers;
