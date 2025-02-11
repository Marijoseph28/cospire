"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-6">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Mail className="text-purple-400" />
              <a href="mailto:mariaveenajoseph@gmail.com" className="text-purple-400 hover:text-purple-300">
                mariaveenajoseph@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-purple-400" />
              <a href="tel:+917708985243" className="text-purple-400 hover:text-purple-300">
                +91 7708985243
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-gray-700/50 border-gray-600 min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

