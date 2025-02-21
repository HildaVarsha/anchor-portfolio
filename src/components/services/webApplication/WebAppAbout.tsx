import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const webServices = [
  {
    title: "Adaptive and Responsive Website",
    description:
      "Tailored to your exact business needs, whether it's streamlining internal workflows or launching an innovative product online. Optimized for speed, security, and scalability. Designed for flexibility and growth, with adaptive and responsive features that ensure a seamless experience across all devices, keeping your website user-friendly and future-ready.",
  },
  {
    title: "E-commerce ",
    description:
      "From custom e-commerce platforms for B2C and B2B businesses to seamless online shopping experiences, we focus on user-centric design, personalized customer journeys, and smooth integrations with payment gateways, inventory systems, and more, ensuring a streamlined and engaging shopping experience.",
  },
  {
    title: "Truly unique websites",
    description:
      "Running seamlessly and allowing dynamic content management — websites designed with the right aesthetics and functionality for any industry and using the best-fit platform (WordPress, Webflow, Joomla, or Squarespace)",
  },
  {
    title: "Website & Restoration",
    description:
      "Tailored to your specific business needs, whether it's revamping your website or launching a standout online presence. Optimized for speed, security, and scalability. Designed for flexibility and growth, ensuring your digital success.",
  },
  {
    title: "Website Maintenance",
    description:
      "We handle updates, backups, security patches, and performance optimization to keep your site secure and running smoothly.",
  },
];

const WebAppAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 lg:px-0 lg:container py-16 mx-auto">
        <PageHeaderText label="Our custom web development services empower you to stand out from the crowd" />
        <p className="py-4 text-lg" data-aos="fade-up">
          &quot;With over a decade of experience building successful web
          solutions, we have the expertise to create something remarkable for
          you. No matter the challenge, there are few aspects of web development
          we haven&apos;t encountered. Leverage our custom web development
          services to craft seamless, captivating web experiences. The Anchor
          Informatics team provides:&quot;
        </p>
        <div className="py-4 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-4">
          {webServices?.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="font-semibold text-xl pb-4" data-aos="fade-up">
                {service.title}
              </h3>
              <p data-aos="fade-up">{service.description}</p>
            </div>
          ))}
        </div>
        <Link href={"/contact-us"}>
          <Button data-aos="fade-up">
            Request our custom web services <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WebAppAbout;
