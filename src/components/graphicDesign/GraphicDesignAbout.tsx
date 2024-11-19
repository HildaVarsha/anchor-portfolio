import React from "react";
import { PageHeaderText } from "../shared";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

const designServices = [
  {
    title: "Adaptive and Scalable Design Solutions",
    description:
      "Crafted to support your brand’s growth, our design services are tailored for adaptability, scalability, and consistency, ensuring your visuals evolve smoothly as your business does. Our designs adapt to your unique brand, delivering a cohesive experience across all digital and print channels.",
  },
  {
    title: "E-commerce Design Expertise",
    description:
      "We specialize in creating user-centered designs for B2C and B2B e-commerce platforms, focusing on intuitive layouts, product presentation, and visual engagement. Our designs enhance shopping experiences with clear calls to action, seamless integrations, and a strong focus on driving conversions for your online store.",
  },
  {
    title: "Reliable Design with Security and Consistency",
    description:
      "Our design services are dedicated to delivering security and consistency, keeping your brand visuals up-to-date with current standards and practices. From compliance with brand guidelines to visual consistency across materials, we ensure your designs remain relevant and resilient.",
  },
  {
    title: "Customizable Design Packages",
    description:
      "Whether launching a new brand or refreshing an existing one, we offer flexible design packages to meet your unique needs. Our solutions are customizable, adaptable, and designed to be as distinctive as your business.",
  },
  {
    title: "Ongoing Design Support and Maintenance",
    description:
      "From updates to refinements, we handle ongoing design support to keep your visuals polished and on-brand. Our consistent monitoring and support ensure your designs remain aligned with your goals, delivering a strong and cohesive user experience.",
  },
];

const GraphicDesignAbout = () => (
  <div className="bg-white text-slate-800">
    <div className="container py-16 mx-auto">
      <PageHeaderText label="Our design services help your brand make a lasting impression and stand out." />
      <p className="py-4 text-lg">
        &quot;With over a decade of experience in delivering impactful graphic
        design solutions, we have the expertise to elevate your brand. No matter
        the challenge, our team has tackled nearly every facet of design and
        brand management. Leverage our design services to create compelling,
        memorable visuals tailored to your needs. The Anchor Design team
        provides:&quot;
      </p>
      <div className="pt-4 grid grid-cols-3 gap-12">
        {designServices.map((service, index) => (
          <div key={index}>
            <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Button>
        Request our Graphic Designing services <ArrowRight />
      </Button>
    </div>
  </div>
);

export default GraphicDesignAbout;
