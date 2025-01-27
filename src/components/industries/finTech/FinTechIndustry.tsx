import { ServicesCard } from "@/components/componentShared";
import React from "react";

const FinTechIndustry = () => {
  const services = [
    {
      title: "Healthcare",
      description:
        "We integrate advanced analytics, intelligent automation, and secure distributed systems into healthcare payment and insurance processes. Our goal is to elevate care quality, improve patient accessibility, and streamline operations to ensure better outcomes for both providers and patients.",
      additionalPoints: [
        "Optimizing healthcare billing and claims management",
        "Enhancing patient data security and compliance",
        "Improving patient engagement through digital tools",
      ],
    },
    {
      title: "Banking",
      description:
        "We design back-office automation systems and customer-facing applications that empower banks to redefine business models, ensure revenue stability, and deliver exceptional customer experiences. Our solutions enable financial institutions to stay competitive in the digital age and enhance operational efficiency.",
      additionalPoints: [
        "Streamlining loan processing and customer service",
        "Boosting fraud detection with AI-powered systems",
        "Personalizing banking experiences through data-driven insights",
      ],
    },
    {
      title: "Insurance",
      description:
        "We create custom software solutions to assist insurance companies with tracking commissions, managing tasks, processing claims, generating invoices, making payments, and automating other critical administrative functions. Our technology helps reduce costs, improve accuracy, and speed up the entire insurance process.",
      additionalPoints: [
        "Automating claims processing to reduce human error",
        "Enhancing customer self-service portals for better engagement",
        "Leveraging AI for risk assessment and fraud prevention",
      ],
    },
    {
      title: "Retail & Ecommerce",
      description:
        "We support retail and ecommerce businesses by transforming their sourcing and supply chain strategies, utilizing predictive analytics, and adapting to changing consumer demands. Our solutions help businesses create personalized shopping experiences across digital platforms, driving customer loyalty and increasing sales.",
      additionalPoints: [
        "Optimizing inventory management for real-time tracking",
        "Personalizing product recommendations and offers",
        "Enhancing the customer journey with seamless omnichannel experiences",
      ],
    },
    {
      title: "Logistics & Transportation",
      description:
        "We develop software that streamlines finance and payment management within the supply chain, enabling logistics leaders to respond swiftly to demand fluctuations, control costs, and foster sustainable growth. Our solutions ensure operational resilience and efficiency across the entire transportation network.",
      additionalPoints: [
        "Optimizing route planning and fuel consumption",
        "Improving supply chain visibility and tracking",
        "Reducing operational delays and enhancing fleet management",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/java-top-ways.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p data-aos="fade-up">Industry-specific FinTech </p>
          <p className="text-green-500" data-aos="fade-up">
            {" "}
            software development
          </p>
        </div>
      </div>
      <div className="py-12 bg-green-500">
        <div
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our financial software development services combine technical
          expertise with a deep understanding of industry-specific needs. We
          thoroughly explore the unique challenges of your sector to design a
          custom financial solution that meets your precise requirements.
        </div>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-slate-800">
        {services?.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FinTechIndustry;
