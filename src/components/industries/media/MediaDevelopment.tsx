import React from "react";

const services = [
  {
    title: "Discovery",
    description:
      "We dive deep into your business challenges to define the key requirements for your future entertainment and media software solution, and develop a high-level project management plan.",
  },
  {
    title: "Design",
    description:
      "We design the architecture of your solution for the media and entertainment sector, followed by creating an intuitive and engaging user interface.",
  },
  {
    title: "Development and testing",
    description:
      "Using Agile and DevOps best practices, we build your media software solution and conduct comprehensive testing to ensure quality and performance.",
  },
  {
    title: "Maintenance and support",
    description:
      "We monitor your solution's performance and make necessary adjustments to meet the evolving needs of your users, ensuring continuous improvement.",
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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          End-to-end media and entertainment
          <span className="text-lime-500"> {""} development services</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          By partnering with ITRex, you work alongside a team of experienced
          media and entertainment software developers who will guide your
          project from concept to completion. We implement proven workflows and
          transparent reporting to relieve you of the complexities of managing
          the development process. Once we receive your request, our
          collaboration will proceed as follows:
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          {services?.map((service, index) => (
            <div
              className="flex gap-4 md:gap-16 border-b border-slate-400 py-12"
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

export default MediaDevelopment;
