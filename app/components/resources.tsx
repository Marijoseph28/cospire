import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const resourcesData = [
  {
    id: 1,
    image: "/images/resources/blog-cover-image.png",
    title: "Blogs",
    description: "Explore insightful articles to enhance your knowledge – read more here.",
  },
  {
    id: 2,
    image: "/images/resources/video-cover-image.png",
    title: "CRM Best Practices",
    description: "Learn how to optimize your CRM strategy with these best practices.",
  },
];

export default function Resources() {
  return (
    <section className="bg-[#EFF6FF] py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[44px] text-[#032E61] font-semibold">
          Resources
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8">
        {resourcesData.map((resource) => (
          <div key={resource.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={resource.image} alt={resource.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[30px] xl:text-[24px] 2xl:text-[28px] text-[#032E61] font-semibold mb-3">
                {resource.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] xl:text-[16px] text-black font-normal">
                  {resource.description}
                </p>
                <Link href={"#"}>
                  <BsArrowRightCircle className="text-[#000000]/40 text-[28px] sm:text-[30px] md:text-[32px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
