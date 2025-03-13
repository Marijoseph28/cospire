export default function WhyTick() {
    const cards = [
        {
            id: 1,
            title: "Trust",
            image: "./images/tick/t-trust.png",
        },
        {
            id: 2,
            title: "Integrity",
            image: "./images/tick/i-integrity.png",
        },
        {
            id: 3,
            title: "Credibility",
            image: "./images/tick/c-credibility.png",
        },
        {
            id: 4,
            title: "Knowledge on Business",
            image: "./images/tick/k-knowledge-on-business.png",
        },
    ];
    return (
        <section 
            className="bg-white py-16 relative bg-no-repeat bg-cover"
            style={{ 
                backgroundImage: "url('/images/before-img.png'), url('/images/after-img.png')",
                backgroundPosition: "right top, left bottom",
                backgroundSize: "50% auto, 70% auto",
            }}
        >
            <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl text-[#032E61] font-bold mb-8">Why Customers TICK Cospire?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <div key={card.id} className="relative group">
                            <img src={card.image} alt={card.title} className="w-full h-48 sm:h-52 md:h-60 object-cover" />
                            <div className="absolute bottom-4 sm:bottom-6 left-0 w-full flex items-center justify-center py-2">
                                <p className="text-white text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-wrap w-[120px] sm:w-[140px] md:w-[150px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-center">{card.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-[18px] sm:text-[20px] text-black/80 font-normal px-2 sm:px-6 md:px-12">
                    We understand that Salesforce can be complex, and we are here to make things as easy as possible by working closely with our clients to ensure our services align with their business needs. Our team will be just a click away to answer questions and provide support.
                </p>
                <p className="mt-4 text-[18px] sm:text-[20px] text-black/80 font-normal px-2 sm:px-6 md:px-12">
                    If you’re looking for a Salesforce customization partner, look no further. Take one more small step to avail all our amazing services. Contact us today!
                </p>
            </div>
        </section>
    );
}
