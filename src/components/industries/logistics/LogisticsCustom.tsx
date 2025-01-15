import { ServicesCard } from "@/components/componentShared";
import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const LogisticsCustom = () => {
  const services = [
    {
      title: "Transportation software solutions",
      description:
        "Handle your fleet operations with ease with our transportation software solutions. From legislation-compliant logging and fuel tracking apps to GPS-based telematics systems, route planning solutions, dispatch management software, and beyond, we have you fully covered",
    },
    {
      title: "Enterprise-level supply chain management systems",
      description:
        "Our logistics software development company crafts integrated supply chain management solutions to provide robust management across the supply chain, from order processing to shipping. We can also modernize and incorporate your existing logistics software solutions",
    },
    {
      title: "Logistics for ecommerce",
      description:
        "Empower ecommerce operations with our logistics software development, automating multi-channel inventory management, centralizing order fulfillment, and simplifying shipping. If you need to integrate logistics software solutions with your storefront, ITRex will help you too.",
    },
    {
      title: "Warehouse management systems",
      description:
        "Boost your warehouse performance with custom software for inventory tracking, documentation automation, and more accurate reporting. We can integrate your WMS with other logistics software solutions or emerging tech like IoT sensors and AI enabling smarter operations",
    },
    {
      title: "Smart logistics software solutions",
      description:
        "Apply innovations, from cloud-based platforms to handle deep-dive data analytics to IoT-enabled tracking solutions and AI for automated warehousing, intelligent forecasting, order planning, and smart reporting. We also build RPA bots that can take over labor-intensive tasks.",
    },
    {
      title: "Self-service BI and reporting tools",
      description:
        "Get a holistic picture of your operations and power decision-making with top-notch data analytics and automated day-to-day reporting. We create custom BI and reporting software that helps monitor KPIs, identify bottlenecks, predict demand, manage resources, and much more.",
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Custom logistics software
          <span className="text-amber-400">
            {" "}
            {""} development for competitive edge
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Tell us about your idea or challenge, simple or complex. Together we
          will figure out the best-fit logistics software solution that will
          take your business to a new strategic level. With us, your
          transformation will be smooth, fast, and safe. We can also take a
          modular design approach to focus on your critical needs first while
          allowing you to scale as you grow.
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
          <Link href={"/contact-us"}>
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogisticsCustom;
