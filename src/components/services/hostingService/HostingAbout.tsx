import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const hostingServices = [
  {
    title: "Adaptive and Scalable Hosting Infrastructure",
    description:
      "Built to support your website’s growth, our hosting solutions are optimized for speed, scalability, and reliability, ensuring your site performs smoothly as your business evolves. Our infrastructure adapts to the needs of your business, delivering a seamless experience across all digital channels.",
  },
  {
    title: "E-commerce Hosting Excellence",
    description:
      "Focused on delivering smooth, engaging shopping experiences, we provide hosting solutions for B2C and B2B e-commerce platforms. Our user-centric hosting ensures secure transactions, fast load times, and seamless integrations with payment systems, promotions, and more, helping you drive conversions and grow your online store.",
  },
  {
    title: "Robust Security and Uptime",
    description:
      "Our hosting services are designed to provide top-notch security and reliable uptime, protecting your data and website with the latest security measures. With 24/7 monitoring and regular backups, your site remains secure and resilient, even during high-traffic periods.",
  },
  {
    title: "Customizable Hosting Plans",
    description:
      "Whether you’re launching a new website or optimizing an existing one, we offer flexible hosting plans to match your business’s unique needs. Our hosting is designed to be highly customizable, providing solutions that are reliable, effective, and adaptable as your business",
  },
  {
    title: "Ongoing Maintenance and Support",
    description:
      "From updates and backups to performance optimization, we handle ongoing maintenance to keep your website running at its best. Our regular monitoring and support ensure your hosting solution remains aligned with your goals and continues to deliver a seamless user experience.",
  },
];
const HostingAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Our hosting services empower your website to perform at its best, helping you stand out from the competition." />
        <p className="py-4 text-lg">
          &quot;With over a decade of experience delivering reliable hosting
          solutions, we have the expertise to support and grow your online
          presence. No matter the challenge, our team has navigated nearly every
          aspect of website hosting and management. Leverage our hosting
          services to ensure fast, secure, and scalable solutions tailored to
          your needs. The Anchor Hosting team provides:&quot;
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {hostingServices?.map((service, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          Request our custom web development services <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default HostingAbout;
