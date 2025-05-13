import Image from "next/image";

const PartnerLogos = () => {
    return (
        <div className="bg-[#3674b5] py-10">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2 px-8">
                {[Array(5)].map((_, idx) => (
                    <Image
                        key={idx}
                        src="/Logo3.png"
                        alt="Partner Logo"
                        width={60}
                        height={60}
                        className="object-contain opacity-80 hover:opacity-100 transition"
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnerLogos;

