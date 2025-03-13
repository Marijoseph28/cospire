export default function WhatWeAreAceAt() {
    return (
        <section className="bg-white py-16 relative">
            <div className="absolute inset-0 bg-no-repeat bg-cover scale-x-[-1]"
                style={{
                    backgroundImage: "url('./images/before-img.png')",
                    backgroundPosition: "right top",
                    backgroundSize: "50% auto"
                }}></div>
            <div className="relative z-10">

                <div className="container mx-auto text-center mb-12 px-4 sm:px-6 md:px-8">
                    <h2 className="text-3xl sm:text-4xl text-[#032E61] font-semibold">What we are Ace at?</h2>
                    <p className="text-[20px] text-black font-normal leading-[28px] mt-4">
                    We've built a solid rep as top-notch management consultants by delivering 
                    <br/>stonking results for a wide range of clients.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 items-start">
                    {/* Left Side - Content */}
                    <div className="max-w-[585px] mx-auto col-span-12 md:col-span-7 md:px-0 px-10">
                            <div className="mb-10">
                                <h3 className="text-[24px] text-black font-medium mb-2">Salesforce Sales Cloud:</h3>
                                <p className="text-[18px] text-black/80 font-normal leading-[30px]">
                                Grow your business, snag new customers, and close deals at a rate of knots with the world's leading CRM platform. We specialise in making your sales reps' jobs a breeze and maximising the productivity of your sales department through expert Salesforce Sales Cloud implementation, integration, and consultancy.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[24px] text-black font-medium mb-2">Salesforce Service Cloud:</h3>
                                <p className="text-[18px] text-black/80 font-normal leading-[30px]">
                                Ensure your customer service is always on point and enhance customer experiences with Salesforce Service Cloud. We provide a comprehensive 360-degree customer view, enabling you to deliver rapid, personalised, and highly efficient service."
                                </p>
                            </div>
                    </div>
                    {/* Right Side - Image */}
                    <div className="col-span-12 md:col-span-5">
                        <img src="./images/about-us/about-us-img.png" alt="What We Are Ace At" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}