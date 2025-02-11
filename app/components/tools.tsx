import { Github, Linkedin } from "lucide-react"

export function Tools() {
  const tools = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git", "Bootstrap", "Ant Design", "Shadcn UI", "Chakra UI"]

  const socials = [
    { icon: Github, href: "https://github.com/Marijoseph28", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/maria-veena-joseph-97011912b", label: "LinkedIn" },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {tools.map((tool) => (
            <div
              key={tool}
              className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-colors"
            >
              {tool}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

