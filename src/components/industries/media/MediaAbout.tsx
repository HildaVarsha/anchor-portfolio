import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Broadcasting",
    description:
      "Create personalized experiences at scale, deep dive into your audience’s preferences, and gain more value from your content portfolio",
  },
  {
    title: "Publishing",
    description:
      "Enhance reading experience with tech-powered interactive elements, optimize content creation, proofreading, and translation, and reach more minds with new distribution channels",
  },
  {
    title: "New media",
    description:
      "Get the audience to notice and engage with your content, optimize monetization strategies, and stay ahead of the increasing competition",
  },
  {
    title: "Sports & entertainment",
    description:
      "Deliver content to fans around the world and uncover new opportunities for engagement, insight, and revenue generation",
  },
  {
    title: "Gaming",
    description:
      "Drive game design, engage players, and improve player retention and monetization",
  },
];

const MediaAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText
          label="Become a roaring success with our
media and entertainment solutions company"
        />
        <p>
          Marrying a decade of experience crafting custom software solutions and
          innovative thinking, we help you connect with your audiences, build
          interactive experiences, and boost content production — no matter the
          segment you’re in. We’ve helped a few media and entertainment tycoons
          to win audiences’ hearts and want to help you do just that.
        </p>
        <div className="py-6">
          {services?.map((service, index) => (
            <div
              className="flex gap-4 md:gap-16 border-b border-slate-400 py-12"
              key={index}
            >
              <p className="text-2xl font-semibold w-full">{service?.title}</p>
              <p className="w-full">{service?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaAbout;
