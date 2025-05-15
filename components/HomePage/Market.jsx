import Image from "next/image";

const CompletedProjects = () => {
    return (
        <section className="bg-white py-20">
            <div className="relative py-10" style={{ backgroundImage: `url("/BgWaterPattern.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
                    <div className="bg-[#3674b5] text-white p-8 max-w-md rounded-md shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Built the best agriculture market</h3>
                        <p className="text-lg leading-relaxed">
                            Give lady of they such they sure it. Me contained explained my
                            education. Vulgar as hearts by garret. Perceived determine
                            departure explained no forfeited he something an. Contrasted
                            dissimilar get joy you instrument out reasonably. Again keeps at no
                            meant stuff. To perpetual do existence northward as difficult.
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
