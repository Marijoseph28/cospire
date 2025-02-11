"use client";
import { Nav } from "./components/nav"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Tools } from "./components/tools"
import { Contact } from "./components/contact"

export default function Page() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <Hero />
        <Tools />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

