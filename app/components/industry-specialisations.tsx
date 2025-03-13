import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industryData = [
    { id: 1, image: "./images/industry-specialisations/specialisations-1.png", title: "Healthcare" },
    { id: 2, image: "./images/industry-specialisations/specialisations-1.png", title: "Education" },
    { id: 3, image: "./images/industry-specialisations/specialisations-1.png", title: "Finance" },
    { id: 4, image: "./images/industry-specialisations/specialisations-1.png", title: "Retail Consumer Goods" },
    { id: 5, image: "./images/industry-specialisations/specialisations-1.png", title: "Manufacturing" },
    { id: 6, image: "./images/industry-specialisations/specialisations-1.png", title: "Technology" }
];

export default function IndustrySpecialisations() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    dotsClass: "slick-dots"
                }
            }
        ],
        dotsClass: "slick-dots slick-dots-left",
        cssEase: "ease-in-out"
    };

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center mb-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl text-[#032E61] font-semibold">Industry Specialisations</h2>
                <p className="text-[20px] text-black/80 font-normal mt-4">Tailored Salesforce Solutions for Diverse Sectors</p>
            </div>
            <div className="container mx-auto text-center max-w-[600px]">
                <Slider {...settings} className="w-full">
                    {industryData.map((industry) => (
                        <div key={industry.id} className="flex flex-col items-center justify-center">
                            <img src={industry.image} alt={industry.title} className="w-full max-w-[481px] h-[262px] mb-10 mx-auto" />
                            <h3 className="text-[24px] text-[#032E61] font-semibold">{industry.title}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
