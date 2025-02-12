"use server"

import { Resend } from "resend"

const resend = new Resend('re_8zHAfrLV_Ec2dqa2YS1RA8k3hXjE4kPQU')

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "mariaveenajoseph@gmail.com",
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }
}

