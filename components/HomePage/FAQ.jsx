"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const ExperiencedBusiness = () => {
    const faqs = [
        {
            question: "What should I include in my personal details?",
            answer: "Negue partiner nascetur facilisis suscipit ridiculus augue lobortis imperdiet vivamus...",
        },
        {
            question: "Where can I find my business growth result?",
            answer: "Business growth results can be found through analytics platforms...",
        },
        {
            question: "Did you get any business consultant?",
            answer: "Yes, we provide top-notch business consultancy services...",
        },
    ];

    const [selectedFaqIndex, setSelectedFaqIndex] = useState(-1);

    return (
        <section className="py-20 bg-white grid md:grid-cols-2 items-center">
            <div className="bg-[#3674b5] h-full p-8 flex items-center justify-center relative">
                <div className="relative z-10">
                    <Image
                        src="/greens.png"
                        alt="FAQ Contact"
                        width={300}
                        height={400}
                        className="rounded-xl shadow-xl"
                    />
                    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-[#A1E3F9] text-white font-semibold text-center px-6 py-3 rounded-lg shadow-md">
                        Call us Anytime <br />
                        <span className="text-2xl">666 888 0000</span>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div
                        onClick={() => setSelectedFaqIndex(selectedFaqIndex === index ? -1 : index)}
                        key={index}
                        className={`hover:cursor-pointer ${selectedFaqIndex === index ? "bg-white text-black" : "bg-[#152033]"} p-6 rounded-lg`}
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold">
                                <span className="text-[#25758A] text-[25px] mr-2">{index + 1}.</span> {faq.question}
                            </p>
                            <FaChevronDown className={`text-[#25758A]`} />
                        </div>
                        {selectedFaqIndex === index && (
                            <p className="px-5 pt-5">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperiencedBusiness;



