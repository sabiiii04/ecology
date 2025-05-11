import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-green-500 mb-4">Agrios</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        There are many variations of passages of lorem ipsum available, but the majority suffered.
                    </p>
                    <div className="flex space-x-4 text-lg">
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-facebook" /></a>
                        <a href="#"><i className="fab fa-pinterest" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                    </div>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Explore</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>About</li>
                        <li>Services</li>
                        <li>Our Projects</li>
                        <li>Meet the Farmers</li>
                        <li>Latest News</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* News */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">News</h3>
                    <div className="text-sm space-y-3 text-gray-300">
                        <div>
                            <p className="font-semibold text-white">Bringing Food Production Back to Cities</p>
                            <span className="text-yellow-400 text-xs">July 5, 2022</span>
                        </div>
                        <div>
                            <p className="font-semibold text-white">The Future of Farming, Smart Irrigation</p>
                            <span className="text-yellow-400 text-xs">July 5, 2022</span>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <div className="text-sm space-y-3 text-gray-300">
                        <p><FaPhone className="inline mr-2 text-yellow-400" />666 888 0000</p>
                        <p><FaEnvelope className="inline mr-2 text-yellow-400" />needhelp@company.com</p>
                        <p><FaMapMarkerAlt className="inline mr-2 text-yellow-400" />80 brooklyn golden street line, NY, USA</p>
                        <form className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full px-3 py-2 rounded-l bg-white text-black"
                            />
                            <button className="bg-green-600 px-4 py-2 rounded-r text-white hover:bg-green-700">
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6 px-4">
                © All Copyright 2024 by shwanotech Themes · <a href="#" className="underline">Terms of Use</a> · <a href="#" className="underline">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
