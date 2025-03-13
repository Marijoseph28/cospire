"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "We are extremely pleased with the service provided by Cospire in the implementation of our Salesforce program. Their deep understanding of Salesforce, combined with their ability to accurately map our requirements, has ensured a smooth and successful implementation. The team's enthusiasm and proactivity throughout the process have been commendable. We highly recommend Cospire to any prospective clients. Best wishes to their team.",
    author: "Eswarakrishnan.D",
    position: "VP - Epsilon",
    logo: "./images/epsilon-logo.png",
  },
  {
    id: 2,
    text: "We are extremely pleased with the service provided by Cospire in the implementation of our Salesforce program. Their deep understanding of Salesforce, combined with their ability to accurately map our requirements, has ensured a smooth and successful implementation. The team's enthusiasm and proactivity throughout the process have been commendable. We highly recommend Cospire to any prospective clients. Best wishes to their team.",
    author: "Eswarakrishnan.D",
    position: "VP - Epsilon",
    logo: "./images/epsilon-logo.png",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Hide default arrows since we have custom ones
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <div className="relative max-w-[873px] mx-auto px-20">
          {/* Slick Slider */}
          <Slider ref={(slider:any) => (sliderRef.current = slider)} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-6">
                <p className="lg:text-[18px] xl:text-[16px] md:text-[16px] text-black font-normal leading-[32px]">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 flex items-center justify-center flex-col space-x-4">
                  <Image src={testimonial.logo} alt={testimonial.author} width={109} height={39} className="mb-3" />
                  <div>
                    <h4 className="text-[18px] font-normal text-black">{testimonial.author} | {testimonial.position}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <BsArrowLeftCircle size={36} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <BsArrowRightCircle size={36} />
          </button>
        </div>
      </div>
    </section>
  );
}
