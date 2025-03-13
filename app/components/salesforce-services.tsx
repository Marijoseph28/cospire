import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
const servicesData = [
    {
        id: 1,
        title: "SalesForce Customization",
        subtitle: "Bespoke Solutions, Tailored to Your Business Imperatives.",
        description: "Welcome. At Cospire Technologies, we recognise that in today's dynamic business environment, a standardised, off-the-shelf Salesforce implementation simply won't cut the mustard. Each enterprise possesses unique operational nuances and strategic objectives, necessitating a tailored approach. Thus, we offer comprehensive Salesforce customisation services, meticulously designed to align with your specific requirements.",
        image: "./images/salesforce-solutions/services-1.png",
        reverse: false
    },
    {
        id: 2,
        title: "SalesForce Implementation",
        subtitle: "Crafting Your Digital Engine for Business Supremacy.",
        description: "The implementation of Salesforce is a pivotal undertaking that can significantly enhance your business's operational efficiency and productivity. Whether you're a burgeoning startup or a well-established enterprise, integrating Salesforce can streamline your sales processes, elevate customer satisfaction, and bolster your bottom line. ",
        image: "./images/salesforce-solutions/services-2.png",
        reverse: true
    },
    {
        id: 3,
        title: "Salesforce Managed Package Development",
        subtitle: "Salesforce Managed Package Development: Crafting Bespoke Applications for Your Salesforce Ecosystem.",
        description: "Welcome to our dedicated Salesforce Managed Package Development Services page. Our team, comprising seasoned Salesforce developers, is primed to assist you in developing robust, customisable, and scalable managed packages for your Salesforce organisation.",
        image: "./images/salesforce-solutions/services-7.png",
        reverse: false
    },
    {
        id: 4,
        title: "Lightening Migration",
        subtitle: "Elevating Your Salesforce Organisation to Peak Performance.",
        description: "Welcome to our Lightning Migration Services. We help businesses transition seamlessly to the Salesforce Lightning Experience, enhancing productivity and collaboration. Our certified Salesforce experts ensure a smooth migration with minimal disruption to your operations.",
        image: "./images/salesforce-solutions/services-3.png",
        reverse: true
    },
    {
        id: 5,
        title: "Salesforce Org Split & Merge Services",
        subtitle: "Streamlining Your Salesforce Ecosystem for Optimal Performance.",
        description: "We specialize in Salesforce org split and merge services, helping businesses manage their Salesforce instances more efficiently. Our certified experts ensure seamless execution of org splits and merges, optimizing Salesforce organizations to meet your specific business needs.",
        image: "./images/salesforce-solutions/services-4.png",
        reverse: false
    },
    {
        id: 6,
        title: "Salesforce Org Merge Services",
        subtitle: "Unifying for Strategic Advantage.",
        description: "Our org merge services consolidate multiple Salesforce instances into one, ideal for mergers or acquisitions. We analyze your orgs, identify data and customizations for consolidation, and create a seamless execution strategy. Using advanced tools, we ensure secure and accurate data merging with minimal disruption.",
        image: "./images/salesforce-solutions/services-5.png",
        reverse: true
    },
    {
        id: 7,
        title: "Salesforce Org Merge Services",
        subtitle: "Ensuring Peak Performance and Uninterrupted Operational Excellence.",
        description: "We handle everything from implementation to ongoing maintenance, ensuring your platform stays up-to-date and optimized. Our certified experts manage updates, customizations, integrations, and provide proactive monitoring, training, and dedicated support to keep your business running smoothly.",
        image: "./images/salesforce-solutions/services-6.png",
        reverse: false
    },
];

export default function SalesforceServices() {
    return (
        <section
            className="bg-white py-16 relative">
            <div className="absolute inset-0 bg-no-repeat bg-cover scale-x-[-1]"
                style={{
                    backgroundImage: "url('/images/before-img.png')",
                    backgroundPosition: "right top",
                    backgroundSize: "50% auto"
                }}></div>
            <div className="relative z-10">

                <div className="container mx-auto text-center mb-12">
                    <h2 className="text-4xl text-[#032E61] font-semibold">Our Comprehensive Suite of <br /> Salesforce Services</h2>
                </div>
                <div className="container mx-auto space-y-16">
                    {servicesData.map((service) => (
                        <div key={service.id} className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`col-span-12 md:col-span-7 text-left ${service.reverse ? 'md:order-2' : 'md:order-1'}`}>
                                <img src={service.image} alt={service.title} className="w-full h-auto rounded-lg" />
                            </div>
                            <div className={`col-span-12 md:col-span-5 ${service.reverse ? 'md:order-1' : 'md:order-2'}`}>
                                <h3 className="text-[28px] text-[#032E61] font-semibold mb-2 leading-[36px]">{service.title}</h3>
                                <h4 className="text-[20px] text-black/80 font-medium mb-6 leading-[28px]">{service.subtitle}</h4>
                                <p className="text-[20px] text-black/80 font-normal mb-6 leading-[32px]">{service.description}</p>
                                <Link href={"/"} className="border border-black/60 text-black/60 px-6 py-2 rounded-full font-medium text-[18px] hover:bg-black/80 hover:text-white transition inline-flex items-center">
                                    Learn More <BsArrowRightCircle className="ms-3"/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
