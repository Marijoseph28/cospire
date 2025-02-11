import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Aqaar – Real Estate Development in Ajman",
      description: "I developed the user interface for Aqaar’s real estate platform, ensuring a seamless and modern digital experience. Using Next.js and Tailwind CSS, I crafted responsive, high-performance UIs that enhance user engagement and accessibility, aligning with Aqaar’s vision for innovation and sustainability in Ajman’s real estate sector.",
      image: "/projects/aqaar.jpg",
    },
    {
      title: "International Capital Trading (ICT) – Real Estate Development",
      description: "I developed the user interface for ICT’s real estate platform, creating a seamless and intuitive digital experience. Using React and Ant Design, I designed responsive and user-friendly dashboards that align with ICT’s vision of smart, sustainable urban living. My work focused on enhancing usability, accessibility, and performance, supporting ICT’s mission to drive innovation in real estate development while upholding the ethical sustainability goals of Abu Dhabi 2030.",
      image: "/projects/ict.jpg",
    },
    {
      title: "eDental Portal – Dental Exam Preparatory Platform",
      description: "I developed the user interface for eDental Portal, the Middle East’s only dedicated dental exam preparatory platform. Using Laravel and Bootstrap 4, I designed a responsive and user-friendly experience, enabling dentists to seamlessly access question banks, simulated tests, and progress analysis tools. My work focused on optimizing UI performance, accessibility, and intuitive navigation to support efficient exam preparation and user engagement.",
      image: "/projects/edental.jpg",
    },
    {
      title: "RealCube – Cloud-Based Property Management Solution",
      description: "I developed the user interface for RealCube, a leading cloud-based solution for property and facilities management. Using CodeIgniter and Bootstrap 4, I crafted a responsive and intuitive UI that enhances user experience and accessibility. My work focused on delivering seamless navigation, optimizing performance, and ensuring a visually appealing design to support RealCube’s mission of innovation and excellence in the real estate technology sector.",
      image: "/projects/realcube-estate.jpg",
    },
    {
      title: "Engage – Employee Management Tool",
      description: "I developed the user interface for Engage, a simple and efficient employee management tool designed to streamline team collaboration and task management. Using React and React Bootstrap, I created a responsive and intuitive UI that enhances user experience, ensuring seamless access to key features like task planning, real-time collaboration, and information management. My work focused on optimizing performance, accessibility, and usability to support a more productive and organized workflow for teams.",
      image: "/projects/engage.jpg",
    },
    {
      title: "Exalogic Consulting – Digital Transformation Solutions",
      description: "I developed the user interface for Exalogic Consulting’s digital solutions platform, enhancing user experience and accessibility. Using Laravel and Bootstrap 4, I designed a responsive and intuitive UI that supports seamless navigation and interaction. My work focused on optimizing performance, ensuring a modern design, and aligning with Exalogic’s vision of leveraging digital technology to drive business transformation.",
      image: "/projects/exalogic.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardContent className="p-4">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

