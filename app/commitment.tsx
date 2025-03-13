import Image from "next/image";

const commitmentData = [
    {
        id: 1,
        icon: "/images/commitment/experts.png",
        title: "Assured Reliability"
    },
    {
        id: 2,
        icon: "/images/commitment/premium-quality.png",
        title: "Premium Quality"
    },
    {
        id: 3,
        icon: "/images/commitment/reliability.png",
        title: "Empowered Experts"
    }
];

export default function CoreCommitment() {
    return (
        <section className="relative py-24">
            {/* <div className="absolute top-0 left-0 w-full h-[450px] bg-[#032E61]"></div> */}
            <div className="container mx-auto text-center mb-12 px-4 sm:px-6 md:px-8 max-w-[767px] relative">
                <h2 className="text-3xl sm:text-4xl text-[#032E61] font-semibold">The Core of Our Commitment</h2>
                <p className="text-[18px] sm:text-[20px] text-black/80 font-normal mt-4">
                    At the heart of our tech-driven world, we're not just coders or consultants; we're visionaries. Passionate about harnessing the power of Salesforce, we aim to transform businesses, ensuring they thrive in this digital age.
                </p>
            </div>
            
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 relative z-10">
                    {commitmentData.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-lg shadow-[0px_0px_6.09px_0px_rgba(0,0,0,0.25)] flex flex-col items-center text-center">
                            <img src={item.icon} alt={item.title} className="mb-4" width={148} height={148} />
                            <h3 className="text-[24px] text-black font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            {/* <div className="absolute pt-[100px] pb-16 left-0 right-0 top-[200px]">
            </div> */}
        </section>
    );
}
