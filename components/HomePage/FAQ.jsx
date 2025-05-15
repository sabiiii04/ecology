"use client";

import {useState} from "react";
import Image from "next/image";
import {FaChevronDown} from "react-icons/fa";

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
        <section className="py-20 bg-white md:grid md:grid-cols-2 flex flex-col-reverse items-center">
            <div className="bg-[#3674b5] h-full w-full md:w-[30vw] lg:w-[35vw] py-6 mt-10 md:mt-0 md:py-18 flex items-center justify-center relative">
                <div className="relative z-10 right-0 md:-right-[15vw] lg:-right-[17.5vw] overflow-hidden">
                    <Image
                        src="/greens.png"
                        alt="FAQ Contact"
                        width={300}
                        height={400}
                        className="rounded-xl shadow-xl"
                    />
                    <div
                        className="absolute bottom-[-20px] pb-8 left-1/2 transform -translate-x-1/2 bg-[#A1E3F9] text-white font-semibold text-center px-6 py-3 rounded-[15px] shadow-md">
                        <span className="text-nowrap">Call us Anytime</span>
                        <br/>
                        <span className="text-2xl text-nowrap">666 888 0000</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 max-w-full md:max-w-[600px] px-5">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <div
                            onClick={() => setSelectedFaqIndex(selectedFaqIndex === index ? -1 : index)}
                            className="hover:cursor-pointer bg-[#D1F8ef] p-6 rounded-lg"
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-semibold">
                                    <span className="text-[#3674b5] text-[25px] mr-2">{index + 1}.</span> {faq.question}
                                </p>
                                <FaChevronDown className={`text-[#3674b5] ${selectedFaqIndex === index ? "rotate-180" : "rotate-0"} `}/>
                            </div>
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



