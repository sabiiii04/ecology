import Image from "next/image";

const CompletedProjects = () => {
    return (
        <section className="bg-white py-20">
            <div className="relative bg-[#f2f9f0] py-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
                    <div className="bg-[#4BAF47] text-white p-8 max-w-md rounded-md shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Built the best agriculture market</h3>
                        <p className="text-sm leading-relaxed">
                            Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no
                            forfeited he something an.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <Image src="/Greenbg.png" alt="Basket of Vegetables" width={400} height={400} />
                    </div>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('/images/veggie-bg-pattern.png')] bg-cover bg-center z-0" />
                <div className="flex justify-center mt-8 space-x-4">
                    <span className="w-4 h-4 bg-[#f1f3e7] rounded-full inline-block" />
                    <span className="w-4 h-4 bg-[#f1f3e7] rounded-full inline-block" />
                </div>
                <div className="flex justify-center mt-12 gap-12 px-4 flex-wrap">
                    <Image src="/images/organic-logo.png" alt="Organic" width={60} height={60} />
                    <Image src="/images/farmbarn-logo.png" alt="Farm Barn" width={60} height={60} />
                    <Image src="/images/premiumfarm-logo.png" alt="Premium Farm" width={60} height={60} />
                </div>
            </div>
        </section>
    );
};

export default CompletedProjects;
