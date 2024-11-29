import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const mobileAppServices = [
  {
    title: "Adaptive and Responsive App Design",
    description:
      "Tailored to your exact business needs, whether it's optimizing internal workflows or launching an innovative mobile app. Optimized for speed, security, and scalability. Designed for flexibility and growth, with adaptive and responsive features that deliver a seamless experience across all mobile devices, ensuring your app remains user-friendly and ready for the future.",
  },
  {
    title: "E-commerce ",
    description:
      "From custom e-commerce platforms for B2C and B2B businesses to seamless online shopping experiences, we focus on user-centric design, personalized customer journeys, and smooth integrations with payment gateways, inventory systems, and more, ensuring a streamlined and engaging shopping experience.",
  },
  {
    title: "Truly unique Mobile App",
    description:
      "Running seamlessly and supporting dynamic features — mobile apps designed with the right aesthetics and functionality for any industry, built on the best-fit platform (React Native, Flutter, Swift, or Kotlin) to ensure optimal performance and user experience.",
  },
  {
    title: "App & Restoration",
    description:
      "Tailored to your specific business needs, whether it's developing a cutting-edge mobile app or restoring and optimizing an existing one. Optimized for speed, security, and scalability. Designed for flexibility and growth, ensuring your app remains reliable, user-friendly, and ready to evolve with your business.",
  },
  {
    title: "App Maintenance",
    description:
      "We manage app updates, bug fixes, security patches, and performance optimization to ensure your app stays secure, reliable, and performs at its best.",
  },
];

const MobileAppAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0  md:container py-16 mx-auto">
        <PageHeaderText label="Our Mobile App development services empower you to stand out from the crowd" />
        <p className="py-4 text-lg">
          &quot;With over a decade of experience building successful Mobile
          Apps, we have the expertise to create something remarkable for you. No
          matter the challenge, there are few aspects of App development we
          haven&apos;t encountered. Leverage our App development services to
          craft seamless, captivating web experiences. The Anchor development
          team provides:&quot;
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {mobileAppServices.map((service, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          Request our Graphic Designing services <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default MobileAppAbout;
