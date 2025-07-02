"use client";

import { useState } from "react";
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
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-transparent text-white absolute top-0 left-0 w-full py-4 px-6 z-50">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <Image src="/Logo3.png" alt="logo" width={60} height={60} />
                <div className="lg:hidden">
                    {isMenuOpen ? (
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[40px] text-white cursor-pointer"
                        />
                    ) : (
                        <GiHamburgerMenu
                            onClick={() => setIsMenuOpen(true)}
                            className="text-[40px] text-white cursor-pointer"
                        />
                    )}
                </div>
                <nav className="hidden lg:flex gap-6 font-medium text-sm">
                    <Link href="#" className="hover:text-[#D1F8ef]">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Services">Services</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">News</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Contact</Link>
                </nav>
                <div className="hidden lg:flex items-center gap-4 text-sm">
                    <FaMagnifyingGlass />
                    <FaShoppingCart />
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-[#D1F8ef]" />
                        <span className="hidden sm:inline">+98 (000) - 9630</span>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed bg-white w-full h-screen left-0 top-0 z-40 p-6 flex flex-col gap-6 items-center text-center text-black transition-transform duration-300">
                    <div className="flex justify-between items-center w-full">
                        <Image src="/Logo3.png" alt="logo" width={60} height={60} />
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[40px] text-black cursor-pointer"
                        />
                    </div>
                    <ul className="flex gap-4 text-xl">
                        <li><FaTwitter /></li>
                        <li><FaFacebook /></li>
                        <li><FaPinterest /></li>
                        <li><FaInstagram /></li>
                    </ul>
                    <nav className="flex flex-col gap-4 font-medium text-lg">
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>News</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
