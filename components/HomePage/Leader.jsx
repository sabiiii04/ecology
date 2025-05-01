import Image from "next/image";


const HeroSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
            <Image
                src={"/bg.png"}
                alt={"background"}
                width={1000}
                height={500}
                className="absolute left-0 bottom-[10px] z-[1]"
            />
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 z-[2] lg:grid-cols-2 items-center gap-12">
                <div>
                    <p className="text-[#EEC044] font-medium mb-2">Get to know us</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Leader in Agriculture Market
                    </h1>
                    <p className="mb-6 max-w-lg">
                        There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-3">
                            <div className="w-10 h-10 bg-[#4BAF47] rounded-full flex items-center justify-center text-white text-lg font-bold">→</div>
                            <div>
                                <p className="text-[#4BAF47] text-sm font-semibold">Modern agriculture types</p>
                                <p className="text-xs">We’re here for you from start to finish</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#4BAF47] hover:bg-[#3da444] text-white font-medium px-6 py-3 rounded-md shadow">
                        Discover More
                    </button>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-1/2">
                        <Image
                            src={"/apples.png"}
                            alt={"Farmer with apples"}
                            width={400}
                            height={500}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                            src={"/tractor.png"}
                            alt={"Tractor in field"}
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
