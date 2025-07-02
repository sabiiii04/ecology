import Image from "next/image";

const CompletedProjects = () => {
    return (
        <section className="bg-white py-20">
            <div className="relative py-10" style={{ backgroundImage: `url("/BgWaterPattern.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
                    <div className="bg-[#3674b5] text-white p-8 max-w-md rounded-md shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Every Drop Counts!</h3>
                        <p className="text-lg leading-relaxed">
                            Every day, we turn ideas into action — not just with words, but with hands-on solutions, strong partnerships, and real-world results. From mountain rivers to coastal deltas, our projects are driven by science, shaped by communities, and focused on creating lasting change. Our work is never done — but every clean drop, every restored stream, and every informed heart moves us closer to a more water-secure future.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0 hidden md:block ">
                        <Image src="/WaterDroplet.png" alt="Basket of Vegetables" width={370} height={370} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompletedProjects;
