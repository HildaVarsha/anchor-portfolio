import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

const services = [
  {
    title: "Finance",
    description:
      "We assist banks, financial services firms, and insurance companies in monitoring client-manager interactions, enhancing and securing payment transactions, and personalizing the customer experience with face recognition software development. Contact us to discuss your project!",
  },
  {
    title: "Retail",
    description:
      "We collaborate with both online and offline retailers on a variety of facial recognition software development projects. Partner with Anchor’s  to incorporate facial recognition into CCTV systems, enable cashless and cardless payments, gain valuable insights through behavioral analytics, and enhance customer service.",
  },
  {
    title: "Education",
    description:
      "We offer tailored facial recognition software development services to educational institutions and EdTech startups. Our expertise assists clients in preventing unauthorized access to school premises, monitoring student engagement, personalizing learning paths, preventing exam cheating, and automating administrative tasks such as roll calls.",
  },
  {
    title: "Healthcare",
    description:
      "Through recognition software development, Anchor's Informativs helps clients minimize medical errors, accelerate patient registration and admissions, prevent safety incidents, and improve the evaluation of patients' conditions.",
  },
  {
    title: "Manufacturing",
    description:
      "We assist manufacturing and supply chain management companies in restricting access to production sites, automating workforce attendance and time tracking, and ensuring consistent PPE usage. Reach out to our custom face recognition development company for more details.",
  },
  {
    title: "Media and entertainment",
    description:
      "We collaborate with video production, broadcasting, and family entertainment companies to revolutionize their products through face recognition software development services. This includes personalizing marketing campaigns, improving safety in public spaces, and training digital avatars to replicate facial expressions.",
  },
];
const FacialRecognitionSoutions = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div>
      <p className="font-semibold text-blue-600">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Develop Industry-Specific
          <span className="text-amber-400">
            {" "}
            {""} Solutions with Face Recognition Experts
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Our facial recognition software development services stand out due to
          end-to-end application integration and adherence to industry-specific
          requirements. We have successfully delivered face recognition
          development projects for clients across the following sectors:
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
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
