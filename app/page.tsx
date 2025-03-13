"use client";

import CoreCommitment from "./commitment";
import AboutUs from "./components/about-us";
import Banner from "./components/banner";
import ContactForm from "./components/contact-section";
import IndustrySpecialisations from "./components/industry-specialisations";
import Navbar from "./components/nav";
import Resources from "./components/resources";
import SalesforceServices from "./components/salesforce-services";
import SalesforceSolutions from "./components/salesforce-solutions";
import Testimonials from "./components/testimonial";
import WhyTick from "./components/tick";
import WhatWeAreAceAt from "./components/what-we-are-ace-at";
import WhatMakesUsDifferent from "./what-makes-us-different";

export default function Page() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyTick />
      <AboutUs />
      <SalesforceServices />
      <SalesforceSolutions />
      {/* <WhatWeAreAceAt /> */}
      <IndustrySpecialisations />
      <WhatMakesUsDifferent />
      <CoreCommitment />
      {/* <Resources /> */}
      {/* <Testimonials /> */}
      <ContactForm />
    </>
  )
}

