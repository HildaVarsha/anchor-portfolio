import React from "react";

const technologies = [
  {
    title: "Load Balancing",
    description: "Distributes incoming traffic across multiple servers",
  },
  {
    title: "Content Delivery Network",
    description:
      "Uses a network of servers across locations to deliver content faster to users.",
  },
  {
    title: "Database Optimization",
    description:
      "Regularly maintains and cleans up the database to reduce load time.",
  },
  {
    title: "Automatic Scaling",
    description:
      "Adjusts server resources automatically in response to real-time traffic demands.",
  },
];

const HostingTechnology = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/technology-with.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 lg:px-0 lg:container mx-auto">
          <p
            className="text-5xl mx-auto font-bold max-w-4xl"
            data-aos="fade-up"
          >
            Technologies
          </p>
          <p
            className="text-lime-500 text-5xl mx-auto font-bold max-w-4xl"
            data-aos="fade-up"
          >
            we work with
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 lg:px-0 lg:container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-slate-800">
          {technologies?.map((tech, index) => (
            <div key={index} data-aos="fade-up">
              <p className="text-2xl font-semibold">{tech.title}</p>
              <p className="py-4">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostingTechnology;
