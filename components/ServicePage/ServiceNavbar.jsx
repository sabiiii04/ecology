"use client";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF} from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import React from "react";

const NavigationBar = () => {
    return (
        <header className="w-full">
            <div className="bg-white border-b py-3 px-18 flex flex-col md:flex-row justify-between items-center text-sm">
                    <Image src="/Logo2.png" alt="logo" width={60} height={60} />
                <div className="hidden md:flex gap-4 items-center">
                    <FaTwitter/>
                    <FaFacebookF/>
                    <FaPinterestP/>
                    <FaInstagram/>
                </div>
                <div className="flex flex-wrap gap-6 items-center  mt-2 md:mt-0">
                    <div className="flex gap-2 items-center">
                        <FaPhoneAlt className="text-green-600" />
                        <span>+98 (000) - 9630</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <HiOutlineMail className="text-green-600" />
                        <span>ambed@agrios.com</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaLocationDot className="text-green-600" />
                        <span>380 St Kilda Road, Melbourne</span>
                    </div>
                </div>
            </div>
            <nav className="bg-[#fafafa] py-4 px-20 flex justify-between items-center">
                <ul className="flex flex-wrap gap-6 text-sm font-medium">
                    {["Home", "About", "Services", "Projects", "News", "Shop", "Contact"].map((item) => (
                        <li key={item} className="hover:text-green-600 cursor-pointer">{item}</li>
                    ))}
                </ul>
                <div className="flex gap-4 items-center ">
                    <FaMagnifyingGlass />
                    <FaShoppingCart />
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
