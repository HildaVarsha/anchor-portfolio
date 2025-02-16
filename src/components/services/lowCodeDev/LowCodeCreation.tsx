import React from "react";
const services = [
  {
    title:
      "We assess the technical feasibility of your idea and collect initial requirements.",
  },
  {
    title:
      "We implement basic functionality, closely adhering to the requirements list",
  },
  {
    title:
      "We choose the no-code or low-code development solutions that best align with your needs.",
  },
  {
    title: "We move forward by enabling the core features of your application.",
  },
  {
    title:
      "We quickly develop a low-code solution, continuously refining the product through iterative improvements.",
  },
  {
    title:
      "We test the low-code solution with real users and gather feedback to make targeted improvements.",
  },
  {
    title:
      "We design the application's navigation logic and user interface, focusing on usability and efficiency.",
  },
  {
    title:
      "We refine low-code solutions based on feedback from users and stakeholders, delivering a market-ready product.",
  },
];
const LowCodeCreation = () => {
  const ServiceCard = ({ title }: { title: string }) => (
    <li data-aos="fade-up">{title}</li>
  );
  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/low-code-create.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          How we create
          <span className="text-lime-500 px-2">
            {" "}
            low-code & no-code solutions
          </span>
        </p>
      </div>
      <div className="bg-white py-16 text-slate-800">
        <div className="lg:container mx-auto px-4">
          <p data-aos="fade-up">
            The Anchor Informatics Ltd team leverages our deep expertise in
            business analysis and software engineering to provide exceptional
            low-code development services to both innovative startups and
            established enterprises. Here’s how our collaboration process works:
          </p>
          <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 bg-blue-100 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowCodeCreation;
