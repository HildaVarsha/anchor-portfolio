import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ServicesCard } from "@/components/componentShared";

const services = [
  {
    title: "Finance",
    description:
      "We support banks, financial institutions, and insurance companies by monitoring client-manager interactions, securing payment transactions, and personalizing customer experiences through custom face recognition software development. Contact us to discuss your project!",
  },
  {
    title: "Retail",
    description:
      "We work with both online and offline retailers on various facial recognition software development projects. Partner with Anchor to integrate facial recognition into CCTV systems, enable cashless and cardless payments, gain insights from behavioral analytics, and enhance customer service.",
  },
  {
    title: "Education",
    description:
      "We provide tailored facial recognition software development services for educational institutions and EdTech startups. Our expertise helps prevent unauthorized access to school premises, monitor student engagement, personalize learning paths, prevent exam cheating, and automate administrative tasks like roll calls.",
  },
  {
    title: "Healthcare",
    description:
      "Through face recognition software development, Anchor's Informativs helps healthcare clients reduce medical errors, speed up patient registration and admissions, prevent safety incidents, and improve patient condition assessments.",
  },
  {
    title: "Manufacturing",
    description:
      "We help manufacturing and supply chain management companies restrict access to production areas, automate workforce attendance and time tracking, and ensure proper PPE usage. Reach out to our custom face recognition development company for more details.",
  },
  {
    title: "Media and Entertainment",
    description:
      "We collaborate with video production, broadcasting, and family entertainment companies to enhance their products using face recognition software. Our services include personalizing marketing campaigns, improving public space safety, and training digital avatars to replicate facial expressions.",
  },
];

const FacialRecognitionSoutions = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Develop Industry-Specific
          <span className="text-lime-500">
            {" "}
            {""} Solutions with Face Recognition Experts
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our facial recognition software development services stand out due to
          seamless end-to-end application integration and strict adherence to
          industry-specific requirements. We have successfully delivered face
          recognition projects for clients across the following sectors:
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"}>
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacialRecognitionSoutions;
