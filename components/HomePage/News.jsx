import Image from "next/image";

const NewsArticles = () => {
    const articles = [
        {
            src: "/ForestChina.jpg",
            alt: "Forest",
            title: "Innovations - Japan",
            description: "Restoration of biodiversity in rural landscapes."
        },
        {
            src: "/SeaChina.jpg",
            alt: "Sea",
            title: "Ocean and Agriculture",
            description: "The impact of coastal farming on the marine ecosystem."
        },
        {
            src: "/China.jpg",
            alt: "China",
            title: "Irrigation Systems - China",
            description: "Yunnan Province reducing agricultural water waste by 40%."
        },
    ];

    return (
        <section className="py-20 bg-white text-center mb-10">
            <p className="text-[#365fb5] mb-2">From the Blog</p>
            <h2 className="text-4xl font-bold mb-10">News & Articles</h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="w-[250px] rounded-lg shadow-md"
                    >
                        <Image
                            src={article.src}
                            alt={article.alt}
                            width={350}
                            height={350}
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <h3 className="text-lg font-semibold  mb-1 mt-2">{article.title}</h3>
                        <p className="text-sm">{article.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsArticles;

