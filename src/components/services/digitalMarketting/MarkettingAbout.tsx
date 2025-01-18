import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
const markettingServices = [
  {
    title: "Adaptive and Responsive Digital Marketing Strategy",
    description:
      "Tailored to your exact business needs, whether it's optimizing your online presence or launching a powerful digital marketing campaign. Optimized for speed, targeting, and scalability, with adaptive strategies that ensure a seamless experience across all digital channels, keeping your marketing efforts aligned with your business goals.",
  },
  {
    title: "E-commerce Marketing Excellence",
    description:
      "From custom e-commerce marketing strategies for B2C and B2B businesses to smooth, engaging shopping experiences, we focus on user-centric design, personalized customer journeys, and smooth integrations with payment systems, promotions, and more to drive conversions and grow your online business.",
  },
  {
    title: "Unique Digital Marketing Campaigns",
    description:
      "Running seamlessly and supporting dynamic features—our marketing campaigns are designed with the right messaging, targeting, and channels for any industry, built on the best-fit platform (Google Ads, Social Media, SEO, etc.) to ensure optimal reach and engagement for your business.",
  },
  {
    title: "Digital Marketing Strategy & Optimization",
    description:
      "Tailored to your specific business needs, whether it's launching a new digital campaign or optimizing an existing one. We focus on driving performance, security, and scalability, ensuring your marketing efforts remain reliable, effective, and adaptable as your business grows.",
  },
  {
    title: "Marketing Campaign Maintenance & Updates",
    description:
      "We manage ongoing campaign adjustments, content updates, data analysis, and optimization to ensure your digital marketing remains fresh, relevant, and high-performing. Regular monitoring and optimization ensure that your marketing strategy stays aligned with your objectives and continues to deliver impactful results.",
  },
];
const MarkettingAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Our digital marketing services empower you to stand out from the competition." />
        <p className="py-4 text-lg" data-aos="fade-up">
          &quot;With over a decade of experience driving successful digital
          marketing campaigns, we have the expertise to deliver exceptional
          results for you. No matter the challenge, there are few aspects of
          digital marketing we haven’t tackled. Leverage our digital marketing
          services to create impactful, engaging campaigns that drive growth.
          The Anchor marketing team provides:&quot;
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {markettingServices?.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4" data-aos="fade-up">
          Request our custom web services <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default MarkettingAbout;
