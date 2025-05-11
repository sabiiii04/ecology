import Image from "next/image";

const NewsArticles = () => {
    return (
        <section className="py-20 bg-white text-center">
            <p className="text-[#365fb5] mb-2">From the Blog</p>
            <h2 className="text-4xl font-bold mb-10">News & Articles</h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                <div className="w-[250px] rounded-lg overflow-hidden shadow-md">
                    <Image src="/ForestChina.jpg" alt="Forest" width={250} height={350} />
                </div>
                <div className="w-[250px] rounded-lg overflow-hidden shadow-md">
                    <Image src="/SeaChina.jpg" alt="Sea" width={250} height={350} />
                </div>
                <div className="w-[250px] rounded-lg overflow-hidden shadow-md">
                    <Image src="/China.jpg" alt="China" width={250} height={350} />
                </div>
            </div>
        </section>
    );
};

export default NewsArticles;
