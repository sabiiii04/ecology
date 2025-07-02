const HeroSection = () => {
    return (
        <section className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: "url(\"/HeroBg.jpg\")" }}>
            <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center flex-col text-white">
                <p className="text-sm mb-2">HOME / SERVICES</p>
                <h1 className="text-4xl font-bold">Services</h1>
            </div>
        </section>
    );
};

export default HeroSection;
