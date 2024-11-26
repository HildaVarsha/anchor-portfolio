import React from "react";
const technologies = [
  {
    title: "Front-End",
    description: "React native,Native Cli,Tailwind",
  },
  {
    title: "Back-End",
    description: "Nodejs,Express js and Fastify.",
  },
  {
    title: "Database",
    description: "Relational Database,Postgress Database,Prisma etc.",
  },
  {
    title: "Cloud",
    description:
      "Amazon Web Services | Google Cloud Platform | Microsoft Azure",
  },
];

const MobileAppTechnology = () => {
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
        <div className="px-4 md:px-0 md:container mx-auto">
          <p className="text-2xl md:text-5xl mx-auto font-bold max-w-4xl">
            Technologies
          </p>
          <p className="text-amber-400 text-2xl md:text-5xl mx-auto font-bold max-w-4xl">
            we work with
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-800">
          {technologies?.map((tech, index) => (
            <div key={index}>
              <p className="text-2xl font-semibold">{tech.title}</p>
              <p className="py-4">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppTechnology;
