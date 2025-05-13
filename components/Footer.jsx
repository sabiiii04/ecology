import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div>
                    <Image src="/Logo3.png" alt="logo" width="60" height="60"/>
                    <p className="text-sm  mb-4">
                        There are many variations of passages of lorem ipsum available, but the majority suffered.
                    </p>
                    <div className="flex space-x-4 text-lg">
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-facebook" /></a>
                        <a href="#"><i className="fab fa-pinterest" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Explore</h3>
                    <ul className="space-y-2  text-sm">
                        <li>About</li>
                        <li>Services</li>
                        <li>Our Projects</li>
                        <li>Meet the Farmers</li>
                        <li>Latest News</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">News</h3>
                    <div className="text-sm space-y-3">
                        <div>
                            <p className="font-semibold text-white">Bringing Food Production Back to Cities</p>
                            <span className="text-[#D1F8ef] text-xs">July 5, 2022</span>
                        </div>
                        <div>
                            <p className="font-semibold text-white">The Future of Farming, Smart Irrigation</p>
                            <span className="text-[#D1F8ef] text-xs">July 5, 2022</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <div className="text-sm space-y-3">
                        <p><FaPhone className="inline mr-2 text-[#D1F8ef]" />666 888 0000</p>
                        <p><FaEnvelope className="inline mr-2 text-[#D1F8ef]" />apef@outlook.com</p>
                        <p><FaMapMarkerAlt className="inline mr-2 text-[#D1F8ef]" />1099 Guozhan Rd, Pudong Xinqu, Shanghai Shi, China</p>
                        <form className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full px-3 py-2 rounded-l bg-white text-black"
                            />
                            <button className="bg-[#A1E3F9] px-4 py-2 rounded-r text-white hover:bg-green-700">
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6 px-4">
                © All Copyright 2024 by sabina Themes
            </div>
        </footer>
    );
};

export default Footer;
