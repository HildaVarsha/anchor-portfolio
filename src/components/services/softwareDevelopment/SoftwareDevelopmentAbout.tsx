import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const softwareServices = [
  {
    title: "Adaptive and Scalable Software Solutions",
    description:
      "Our software development services are designed to support your business growth, offering scalable and adaptable solutions that evolve with your needs. We create robust, flexible software that ensures a seamless experience across all platforms, allowing your business to stay ahead in a competitive landscape.",
  },
  {
    title: "E-commerce Software Development Expertise",
    description:
      "We specialize in developing user-friendly software for B2C and B2B e-commerce platforms, focusing on intuitive functionality, seamless integrations, and optimizing performance. Our solutions enhance the user experience with fast, reliable systems that drive conversions and support your online store's success.",
  },
  {
    title: "Reliable Software with Security and Consistency",
    description:
      "Our software services prioritize security and consistency, ensuring your systems are up-to-date and resilient. From compliance with industry standards to maintaining consistency across platforms, we ensure your software remains secure, efficient, and aligned with your business objectives.",
  },
  {
    title: "Customizable Software Solutions",
    description:
      "Whether building a new application or redeveloping an existing one, we offer flexible software solutions tailored to your specific needs. Our solutions are highly customizable and adaptable, providing the perfect fit for your business.",
  },
  {
    title: "Ongoing Development and Support",
    description:
      "We offer continuous support and maintenance, ensuring your software stays up-to-date and performs optimally. With ongoing monitoring and updates, we keep your software aligned with your evolving goals, delivering consistent, high-quality results.",
  },
];
const SoftwareDevelopmentAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Our software development services create impactful solutions that  keep your business ahead." />
        <p className="py-4 text-lg">
          &quot;With over a decade of experience in delivering impactful graphic
          design solutions, we have the expertise to elevate your brand. No
          matter the challenge, our team has tackled nearly every facet of
          design and brand management. Leverage our design services to create
          compelling, memorable visuals tailored to your needs. The Anchor
          Design team provides:&quot;
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {softwareServices.map((service, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          Request our Software development services <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentAbout;
