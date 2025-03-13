import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Banner() {
    return (
        <div 
            className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center flex items-center pl-4 sm:pl-8 md:pl-12 lg:pl-16"
            style={{ backgroundImage: "url('./images/banner.png')" }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 container text-white text-left">
                <Image src="./images/salesforce-partner-logo.png" className="mb-3" alt="cospire-logo" width={157} height={45} />

                <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold leading-tight md:leading-[52px] mb-5">
                    Strategic Salesforce <br className="hidden sm:block" />
                    Solutions, Delivered <br className="hidden sm:block" />
                    Worldwide by Cospire
                </h1>

                <p className="mt-3 text-lg sm:text-xl md:text-[32px] md:leading-[44px] mb-5 max-w-[565px]">
                We deliver tailored Salesforce solutions, empowering businesses across industries to achieve unprecedented growth and efficiency."
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full">
                    {/* Learn More Button */}
                    <button className="px-6 py-2 bg-white hover:bg-[#DB1139] text-black hover:text-white rounded-[20px] flex items-center justify-center w-full sm:w-auto transition duration-300 ease-in-out">
                        Learn More
                        <IoPlayCircleOutline className="ml-3"/>
                    </button>

                    {/* Let's Talk Button */}
                    <button className="px-6 py-2 border border-white text-white hover:bg-[#DB1139] hover:border-[#DB1139] rounded-[20px] flex items-center justify-center transition duration-300 ease-in-out w-full sm:w-auto">
                        Let’s Talk
                        <BsArrowRightCircle className="ms-3"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
