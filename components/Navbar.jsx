import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="bg-transparent text-white absolute top-0 left-0 w-full py-4 px-6">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <Image src="/Logo3.png" alt="logo" width="60" height="60"/>
                <ul className="flex items-center gap-4">
                    <li><FaTwitter /></li>
                    <li><FaFacebook /></li>
                    <li><FaPinterest /></li>
                    <li><FaInstagram /></li>
                </ul>
                <nav className="hidden lg:flex gap-6 font-medium text-sm">
                    <Link href="#" className="hover:text-[#D1F8ef]">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">News</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Contact</Link>
                </nav>
                <div className="flex items-center gap-4 text-sm">
                    <FaMagnifyingGlass />
                    <FaShoppingCart />
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-[#D1F8ef]" />
                        <span className="hidden sm:inline">+98 (000) - 9630</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
