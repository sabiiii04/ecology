import Image from "next/image";

const NewsArticles = () => {
    const articles = [
        { src: "/ForestChina.jpg", alt: "Forest" },
        { src: "/SeaChina.jpg", alt: "Sea" },
        { src: "/China.jpg", alt: "China" },
    ];

    return (
        <section className="py-20 bg-white text-center">
            <p className="text-[#365fb5] mb-2">From the Blog</p>
            <h2 className="text-4xl font-bold mb-10">News & Articles</h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="w-[250px] rounded-lg overflow-hidden shadow-md"
                    >
                        <Image
                            src={article.src}
                            alt={article.alt}
                            width={350}
                            height={350}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsArticles;

