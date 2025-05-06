import Image from "next/image";

const questions = [
    "World’s hottest destinations for vegans",
    "Let’s grow naturaly and live naturally",
    "Best vegetables for your healthy hair",
];

const FAQSection = () => {
    return (
        <section className="py-20 bg-white grid md:grid-cols-2 items-center">
            <div className="bg-[#4BAF47] h-full p-8 flex items-center justify-center relative">
                <div className="relative z-10">
                    <Image src="/greens.png" alt="FAQ Contact" width={300} height={400} className="rounded-xl shadow-xl" />
                    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white font-semibold text-center px-6 py-3 rounded-lg shadow-md">
                        Call us Anytime <br /> <span className="text-2xl">666 888 0000</span>
                    </div>
                </div>
            </div>
            <div className="p-10">
                <p className="text-[#f5a623] font-medium">Frequently Asked Questions</p>
                <h2 className="text-4xl font-bold  mb-8">You've Any Questions</h2>
                <div className="space-y-4">
                    {questions.map((q, i) => (
                        <div key={i} className="bg-[#f2f4e9] px-6 py-4 rounded-lg flex items-center justify-between hover:bg-[#e1e4d7] transition">
                            <span className="font-medium ">{q}</span>
                            <div className="bg-[#C5CE38] text-white p-2 rounded-full">→</div>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-sm">
                    Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi.
                </p>
            </div>
        </section>
    );
};

export default FAQSection;
