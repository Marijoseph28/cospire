import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const differenceData = [
    {
        id: 1,
        image: "./images/different/img-1.png",
        title: "Personalized Solutions",
        description: "We don’t believe in one-size-fits-all. Every business is unique, and so are our solutions.",
        url: "/"
    },
    {
        id: 2,
        image: "./images/different/img-2.png",
        title: "Rapid Deployment ",
        description: "Our agile methodology ensures faster implementation with minimal downtime.",
        url: "/"
    },
    {
        id: 3,
        image: "./images/different/img-3.png",
        title: "AI & Data Insights",
        description: "We integrate AI-powered analytics and predictive insights to help you make data-driven business decisions.",
        url: "/"
    },
    {
        id: 4,
        image: "./images/different/img-4.png",
        title: "Proven Track Record",
        description: "With a high customer retention rate and positive client testimonials, we take pride in delivering excellence.",
        url: "/"
    }
];

export default function WhatMakesUsDifferent() {
    return (
        <section className="bg-[#FAE7E9]/30 py-16">
            <div className="container mx-auto text-center mb-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl text-[#032E61] font-semibold">What Makes Us Different?</h2>
            </div>
            <div className="container">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 px-4 sm:px-6 md:px-8">
                {differenceData.map((item) => (
                    <div key={item.id} className="flex flex-col">
                        <Image src={item.image} alt={item.title} className="w-full h-auto mb-4" width={528} height={292}/>
                        <h3 className="text-[24px] text-black font-semibold mb-2">{item.title}</h3>
                        <p className="text-[20px] text-black font-normal mb-4">{item.description}</p>
                        <Link href={item.url} className="border border-black/60 text-black/60 px-6 py-2 rounded-full font-medium text-[18px] hover:bg-black/80 hover:text-white transition inline-flex items-center justify-center w-full max-w-[200px]">
                            Learn More <BsArrowRightCircle className="ms-3"/>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
