import { BsArrowRightCircle } from "react-icons/bs";

const featuresData = [
    {
        id: 1,
        icon: "/images/salesforce-services/icon-1.png",
        title: "Salesforce Sales Cloud",
        subtitle: "Turbocharge Your Deals, Sorted!",
        description: "Salesforce Sales Cloud streamlines sales and enhances efficiency, with full support and training.",
        link: "#"
    },
    {
        id: 2,
        icon: "/images/salesforce-services/icon-2.png",
        title: "Salesforce Service Cloud",
        subtitle: "Keep Your Punters Sweet, 24/7",
        description: "Salesforce Service Cloud enhances customer service with personalized support, automation, and insights.",
        link: "#"
    },
    {
        id: 3,
        icon: "/images/salesforce-services/icon-3.png",
        title: "Marketing Cloud",
        subtitle: "Your Marketing Game, Top Drawer",
        description: "Salesforce Marketing Cloud helps create personalized campaigns with ongoing support for better results.",
        link: "#"
    },
    {
        id: 4,
        icon: "/images/salesforce-services/icon-4.png",
        title: "Experience Cloud",
        subtitle: "Your Go-To for Salesforce Builds.",
        description: "Tailored, seamless digital experiences powered by Salesforce Experience Cloud for enhanced engagement and growth.",
        link: "#"
    },
    {
        id: 5,
        icon: "/images/salesforce-services/icon-5.png",
        title: "Salesforce Health Cloud",
        subtitle: "Patient Care, Sorted, Safe as Houses.",
        description: "Salesforce Health Cloud streamlines patient care with secure, personalized systems, offering full training and ongoing support.",
        link: "#"
    },
    {
        id: 6,
        icon: "/images/salesforce-services/icon-6.png",
        title: "Salesforce Education Cloud",
        subtitle: "Educational Game, Sorted, Proper.",
        description: "Salesforce Education Cloud streamlines tracking and communication with full support and training.",
        link: "#"
    }
];

export default function SalesforceSolutions() {
    return (
        <section className="bg-[#F8FBFF] py-16">
            <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 mb-12">
                <h2 className="text-3xl sm:text-4xl text-[#032E61] font-semibold">Salesforce Solutions</h2>
                <p className="text-[18px] sm:text-[20px] text-black/80 font-normal mt-4">
                    Salesforce Cloud solutions streamline operations and enhance performance <br className="hidden md:block"/> with seamless integration and expert support.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="bg-white p-6 rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.25)] flex flex-col items-start">
                        <img src={feature.icon} alt={feature.title} className="w-[80px] h-[80px] mb-4" />
                        <h3 className="text-[22px] sm:text-[24px] text-[#032E61] font-semibold mb-1">{feature.title}</h3>
                        <h4 className="text-[16px] sm:text-[18px] text-[#565656] font-medium mb-4">{feature.subtitle}</h4>
                        <p className="text-[16px] sm:text-[18px] text-[#565656] font-normal mb-6 flex-grow">{feature.description}</p>
                        <a href={feature.link} className="text-[16px] sm:text-[18px] text-[#032E61] font-medium hover:underline flex items-center mt-auto">Learn More <BsArrowRightCircle className="ml-2"/></a>
                    </div>
                ))}
            </div>
        </section>
    );
}