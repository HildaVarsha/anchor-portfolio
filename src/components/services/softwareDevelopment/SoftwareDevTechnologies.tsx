import React from "react";

const technologies = [
  {
    title: "Data Science",
    description:
      "Data Collection,Data Cleaning,Exploratory Data Analysis,Feature Engineering",
  },
  {
    title: "Cloud computing",
    description:
      "Hosting websites and applications,Data backup and disaster recovery,Big data analytics and AI/ML workloads.",
  },
  {
    title: "Machine learning",
    description:
      "Recommendation Systems,Chatbots and Virtual Assistants,Predictive Analytics",
  },
  {
    title: "Block Chain",
    description:
      "Cryptocurrency Payments,Decentralized Applications ,Data Integrity",
  },
];
const SoftwareDevTechnologies = () => {
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
        <div className="container mx-auto">
          <p
            className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold max-w-4xl"
            data-aos="fade-up"
          >
            Technologies
          </p>
          <p
            className="text-green-500 px-4 md:px-0 text-2xl  md:text-5xl mx-auto font-bold max-w-4xl"
            data-aos="fade-up"
          >
            we work with
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-800">
          {technologies.map((tech, index) => (
            <div key={index} data-aos="fade-up">
              <p className="text-2xl font-semibold" data-aos="fade-up">
                {tech.title}
              </p>
              <p className="py-4" data-aos="fade-up">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevTechnologies;
