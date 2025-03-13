"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-[48px] text-[#032E61] font-semibold">Let's Talk</h2>
        <p className="text-[20px] text-[#000000]/80 font-normal mt-4">
          We'd love to hear from you! Fill out the form and our team will get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side Image */}
        <div className="w-full">
          <Image src="./images/contact-img.png" alt="Contact Us" width={500} height={500} className="w-full" />
        </div>

        {/* Right Side Contact Form */}
        <form className="max-w-md text-center m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-[#000000]/30 bg-white text-[18px] font-regular text-[#000000]/50 p-4 h-[55px] rounded-[8px]"
            />
            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-[#000000]/30 bg-white text-[18px] font-regular text-[#000000]/50 p-4 h-[55px] rounded-[8px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Phone Number */}
            <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            disableCountryCode={false} // ✅ Show both flag & country code
            placeholder="Mobile"
            dropdownStyle={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "8px", // ✅ Rounded corners for dropdown
                border: "1px solid #00000030",
            }}
            buttonClass="!rounded-[8px] !border !border-[#000000]/30" // ✅ Rounded country section
            inputClass="!w-full !border !border-[#000000]/30 !bg-white !text-[18px] !font-regular !text-[#000000]/50 !p-4 !h-[55px] !rounded-[8px]"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#000000]/30 bg-white text-[18px] font-regular text-[#000000]/50 p-4 h-[55px] rounded-[8px]"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-[#000000]/30 bg-white text-[18px] font-regular text-[#000000]/50 p-4 rounded-[8px]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-[#DB1139] text-white text-[20px] font-medium p-4 rounded-[8px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
