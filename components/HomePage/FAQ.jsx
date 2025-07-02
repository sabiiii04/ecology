"use client";

import {useState} from "react";
import Image from "next/image";
import {FaChevronDown} from "react-icons/fa";

const ExperiencedBusiness = () => {
    const faqs = [
        {
            question: "Why focus on water in the Asia-Pacific region?",
            answer: "The Asia-Pacific region faces some of the most pressing water challenges — from scarcity and pollution to rising sea levels. Addressing these issues is crucial not only for local communities, but for global ecological stability.",
        },
        {
            question: "How can I get involved?",
            answer: "There are many ways to take part — from volunteering in clean-up efforts and attending our events to supporting sustainable policies or donating to water projects.",
        },
        {
            question: "Are your projects based in one country or region-wide?",
            answer: "Our projects span across the entire Asia-Pacific region, including island nations, coastal areas, and inland communities.",
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
            <div className="w-full flex flex-col gap-4 max-w-full md:max-w-[600px] ">
                <div>
                <p className="text-[#3674b5] font-medium">Frequently Asked Questions</p>
                <h2 className="text-[40px] font-bold  mb-8">You've Any Questions</h2>
                </div>
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



