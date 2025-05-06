import Image from "next/image";

const CompletedProjects = () => {
    return (
        <section className="bg-white py-20">
            <div className="relative py-10 h-[400px]" style={{ backgroundImage: `url("/Greenbg.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
                    <div className="bg-[#4BAF47] text-white p-8 max-w-md rounded-md shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Built the best agriculture market</h3>
                        <p className="text-lg leading-relaxed">
                            Give lady of they such they sure it. Me contained explained my
                            education. Vulgar as hearts by garret. Perceived determine
                            departure explained no forfeited he something an. Contrasted
                            dissimilar get joy you instrument out reasonably. Again keeps at no
                            meant stuff. To perpetual do existence northward as difficult.
                        </p>
                    </div>
                    <div className="flex justify-center gap-12 px-4">
                        <Image src="/OrganicLogo.png" alt="Organic" width={60} height={60} />
                        <Image src="/FarmBarn.png" alt="Farm Barn" width={60} height={60} />
                        <Image src="/Farm.png" alt="Premium Farm" width={60} height={60} />
                    </div>
                    <div className="mt-10 md:mt-0 ">
                        <Image src="/Basket.png" alt="Basket of Vegetables" width={400} height={400} />
                    </div>
                </div>
                <div className="absolute"/>
                <div className="flex justify-center mt-8 space-x-4">
                </div>
            </div>
        </section>
    );
};

export default CompletedProjects;
