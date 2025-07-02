import React from 'react';
import services from '@/data/services.json'
import Link from "next/link";
import Image from "next/image";

const ServicesList = () => {
    return (
        <section className="py-20 px-6 md:px-12 z-[2] bg-white relative overflow-hidden">
            <ul className="flex flex-row justify-center items-center gap-10">
                {services.map((service, index) => (
                    <li key={index} className="relative">
                        <Image
                            src={service.image}
                            alt={service.span1}
                            width={270}
                            height={320}
                            className="object-cover rounded-[15px] w-[270px] h-[320px]"
                        />
                        <div>
                            <div className="w-[80%] rounded-lg shadow-md bg-white mt-10 px-5 pt-8 pb-6 relative bottom-20 left-1/2 transform -translate-x-1/2">
                                <h4 className="text-[20px] font-semibold text-center flex flex-col">
                                    <span>{service.span1}</span>
                                    <span>{service.span2}</span>
                                </h4>
                                <div className="bg-[#A1E3F9] text-white w-[60px] h-[60px] flex items-center justify-center rounded-[5px] absolute -top-10 left-1/2 transform -translate-x-1/2">
                                    <Image
                                        src={service.icon}
                                        alt={service.span1}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="text-white bg-green-500 px-5 py-2.5 rounded-[5px] absolute text-nowrap left-1/2 transform -translate-x-1/2">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ServicesList;