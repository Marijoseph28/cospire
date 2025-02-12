import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col items-center justify-center text-center px-4">
      <div className="relative w-40 h-40 mb-8">
        <Image
          src="./my-pic.jpg"
          alt="Maria Veena Joseph"
          fill
          className="rounded-full object-cover border-4 border-purple-500"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Maria Veena Joseph</h1>
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
        FRONTEND DEVELOPER
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Creating beautiful and functional web experiences with modern technologies
      </p>
      <Button
        className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-6 text-lg"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Get in Touch
      </Button>
    </section>
  )
}

