import React from "react";
import { PageHeaderText } from "../../shared";
import HireButton from "./HireButton";
const ctoServices = [
  {
    title: "CTO consulting",
    description:
      "The virtual CTO will guide you through the discovery phase, helping you select the optimal tech stack, evaluate development costs, and identify the right talent. Additionally, they can assist in addressing specific technical challenges during the later stages of development.",
  },
  {
    title: "Full-time CTO",
    description:
      "As your CTO as a Service provider, we offer the benefit of having an in-house expert who seamlessly integrates with your team, providing ongoing, high-level technical guidance.",
  },
  {
    title: "Fractional CTO",
    description:
      "Our CTO for hire will assist your project on an as-needed basis, conducting an independent audit of your product and processes, offering guidance on product and technology strategy, and overseeing the implementation of required changes.",
  },
  {
    title: "Interim CTO",
    description:
      "We will ensure business continuity by delivering the technical leadership and expertise you need while you search for a permanent CTO.",
  },
];

const CtoServiceAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Flexible, high-level virtual CTO services tailored to your needs." />
        <p className="py-4 text-lg" data-aos="fade-up">
          We assist startups and growing SMEs with technical diligence through
          flexible CTO-as-a-Service engagement models. Whether you need an
          impartial consultation on your solution, seek to fill a technological
          leadership gap, or require ongoing support from a skilled virtual CTO,
          we provide it all while remaining highly responsive to your needs.
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
          {ctoServices?.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="font-semibold text-xl pb-4" data-aos="fade-up">
                {service.title}
              </h3>
              <p data-aos="fade-up">{service.description}</p>
            </div>
          ))}
        </div>
        <HireButton />
      </div>
    </div>
  );
};

export default CtoServiceAbout;
