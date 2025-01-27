import { ServicesCard } from "@/components/componentShared";
import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const LogisticsCustom = () => {
  const services = [
    {
      title: "Transportation software solutions",
      description:
        "Streamline your fleet operations with our transportation software solutions. From compliance-driven logging and fuel tracking apps to GPS-enabled telematics, route planning, and dispatch management systems, we offer comprehensive solutions to meet your needs.",
    },
    {
      title: "Enterprise-level supply chain management systems",
      description:
        "We develop integrated supply chain management systems to help you oversee and manage your entire supply chain, from order processing to shipping. We can also update and enhance your existing logistics solutions for greater efficiency.",
    },
    {
      title: "Logistics for ecommerce",
      description:
        "Boost your ecommerce operations with our logistics software, which automates multi-channel inventory management, centralizes order fulfillment, and simplifies shipping processes. If you need seamless integration with your storefront, ITRex is here to assist.",
    },
    {
      title: "Warehouse management systems",
      description:
        "Optimize your warehouse operations with custom software that improves inventory tracking, automates documentation, and enhances reporting accuracy. We can integrate your WMS with other logistics solutions or next-gen technologies like IoT and AI for smarter operations.",
    },
    {
      title: "Smart logistics software solutions",
      description:
        "Harness cutting-edge innovations such as cloud platforms for data analytics, IoT-based tracking, and AI-driven solutions for automated warehousing, intelligent forecasting, order planning, and advanced reporting. We also develop RPA bots to handle repetitive tasks and improve operational efficiency.",
    },
    {
      title: "Self-service BI and reporting tools",
      description:
        "Gain a comprehensive view of your operations and enhance decision-making with advanced data analytics and automated daily reporting. We build custom BI and reporting tools to track KPIs, identify bottlenecks, forecast demand, manage resources, and more.",
    },
  ];

  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/custom-logistics.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Custom logistics software
          <span className="text-lime-500">
            {" "}
            {""} development for competitive edge
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Share your idea or challenge with us, whether simple or complex.
          Together, we will identify the ideal logistics software solution to
          elevate your business strategically. With our expertise, your
          transformation will be seamless, quick, and secure. We also offer a
          modular design approach, addressing your most urgent needs first while
          providing the flexibility to scale as your business grows.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"} data-aos="fade-up">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogisticsCustom;
