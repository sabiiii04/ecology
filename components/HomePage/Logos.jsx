import Image from "next/image";

const PartnerLogos = () => (
    <div className="bg-[#3674b5] py-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4 px-8 flex-wrap">
            {[Array(5)].map((i) => (
                <Image
                    key={i}
                    src="/Logo3.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition"
                />
            ))}
        </div>
    </div>
);

export default PartnerLogos;

