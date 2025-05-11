const ContactSection = () => {
    return (
        <section className="bg-[#D1F8ef] py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
                <div className="flex-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.686177146262!2d121.48880687819519!3d31.182687510492467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27af5eaba185d%3A0x32d8a6cfa745e608!2sShanghai%20World%20Expo%20Exhibition%20and%20Convention%20Center!5e0!3m2!1sen!2saz!4v1746813213298!5m2!1sen!2saz"
                        width="100%"
                        height="435"
                        style={{border: 0}}
                        allowFullScreen
                        loading="loading"
                    />
                </div>
                <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-[#365fb5] mb-2">Contact Us</p>
                    <h3 className="text-2xl font-bold mb-6">Write a Message</h3>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name" className="w-1/2 p-3 border rounded"/>
                            <input type="email" placeholder="Email Address" className="w-1/2 p-3 border rounded" />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="Write a Message"
                            className="w-full p-3 border rounded"
                        />
                        <button
                            type="submit"
                            className="bg-[#3674b5] text-white px-6 py-3 rounded hover:bg-[#365fb5] transition"
                        >
                            Send a Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
