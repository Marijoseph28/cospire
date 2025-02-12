"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/movjnlgd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
              <Input name="name" placeholder="Your Name" className="bg-gray-700/50 border-gray-600" required />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                className="bg-gray-700/50 border-gray-600 min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

