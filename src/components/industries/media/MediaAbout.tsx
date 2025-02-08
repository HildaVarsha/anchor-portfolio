import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Broadcasting",
    description:
      "Create tailored experiences at scale, dive deep into your audience's preferences, and maximize the value of your content portfolio.",
  },
  {
    title: "Publishing",
    description:
      "Enhance the reading experience with interactive tech, streamline content creation, proofreading, and translation, and expand reach through new distribution channels.",
  },
  {
    title: "New media",
    description:
      "Attract and engage your audience, optimize monetization strategies, and stay ahead of the rising competition in the media landscape.",
  },
  {
    title: "Sports & entertainment",
    description:
      "Deliver captivating content to global fans and uncover new opportunities for engagement, insights, and revenue generation.",
  },
  {
    title: "Gaming",
    description:
      "Enhance game design, boost player engagement, and optimize retention and monetization strategies for a more immersive gaming experience.",
  },
];

const MediaAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText
          label="Become a roaring success with our
media and entertainment solutions company"
        />
        <p data-aos="fade-up">
          With a decade of experience in developing custom software solutions
          and fostering innovative thinking, we help you engage with your
          audience, create interactive experiences, and enhance content
          production — regardless of your industry. We've helped top media and
          entertainment leaders win the hearts of their audiences, and we're
          eager to help you do the same.
        </p>

        <div className="py-6">
          {services?.map((service, index) => (
            <div
              className="flex gap-4 lg:gap-16 border-b border-slate-400 py-12"
              key={index}
              data-aos="fade-up"
            >
              <p className="text-2xl font-semibold w-full" data-aos="fade-up">
                {service?.title}
              </p>
              <p className="w-full" data-aos="fade-up">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaAbout;
