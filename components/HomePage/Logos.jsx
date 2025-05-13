import Image from "next/image";

const PartnerLogos = () => {
    return (
        <div className="bg-yellow-400 py-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6 px-4">
                {["Wheat", "Agro", "Farm", "Rice", "Agric"].map((name, idx) => (
                    <Image
                        key={idx}
                        src={`/FarmLogo.png`}
                        alt={`Logo`}
                        width={100}
                        height={50}
                        className="object-contain opacity-80 hover:opacity-100 transition"
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnerLogos;
