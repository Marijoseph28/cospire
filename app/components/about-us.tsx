export default function AboutUs() {
    return (
        <section className="bg-[#DB1139]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full">
                {/* Left Side - Content Section */}
                <div className="max-w-[580px] mx-auto text-white p-10 rounded-lg col-span-12 md:col-span-7 h-full">
                    <h2 className="text-[48px] font-semibold mb-4 leading-[76px]">About Us</h2>
                    <h3 className="text-[32px] leading-9 mb-5">Optimize Your Salesforce Experience</h3>
                    <p className="text-lg sm:text-xl font-normal mb-5">
                    Cospire Technologies, a global Salesforce partner, helps businesses advance in the digital world with tailored solutions that enhance efficiency, client engagement, and growth. Our international team delivers localized support and expertise to diverse clients.
                    </p>
                    <p className="text-lg sm:text-xl font-normal">
                    As a boutique consulting practice with a strong presence in the UK and India, we specialize in custom cloud-based software and mobile solutions for enterprise clients. Our primary goal is to deliver exceptional value for both our clients and their customers through the strategic application of cloud and mobile technologies, digital media, the internet, and the expertise of our seasoned professionals.
                    </p>
                </div>
                
                {/* Right Side - Image Section */}
                <div className="col-span-12 md:col-span-5 h-full">
                    <img src="/images/about-us/about-us-img.png" alt="About Us" className="w-full h-full rounded-lg" />
                </div>
            </div>
        </section>
    );
}
