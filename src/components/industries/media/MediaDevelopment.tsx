import React from "react";

const services = [
  {
    title: "Discovery",
    description:
      "Diving deep into your business challenges, we define business requirements for your future entertainment and media software solution and draft a high-level project management plan.",
  },
  {
    title: "Design",
    description:
      "We design the architecture of your solution for the media or entertainment industry, followed by crafting an intuitive and engaging look and feel.",
  },
  {
    title: "Development and testing",
    description:
      "Relying on Agile and DevOps best practices, we engineer your media software solution and run thorough testing.",
  },
  {
    title: "Maintenance and support",
    description:
      "We keep an eye on the solution's performance and implement changes to respond to the evolving needs of your users.",
  },
];
const MediaDevelopment = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-partner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          End-to-end media and entertainment
          <span className="text-amber-400"> {""} development services</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Partnering with ITRex, you collaborate with a team of experienced
          media & entertainment software developers who can guide your project
          from ideation to realization. We put field-tested workflows and
          transparent reporting in place to take the burden of managing the
          development process off your shoulders. As soon as we get your
          request, our collaboration unfolds in the following way:
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
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

export default MediaDevelopment;
