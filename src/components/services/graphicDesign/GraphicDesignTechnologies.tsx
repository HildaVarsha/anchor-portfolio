import React from "react";

const technologies = [
  {
    title: "Adobe Creative Suite",
    description: "Photoshop, Illustrator, InDesign",
  },
  {
    title: "CorelDRAW",
    description:
      "A vector graphic design software commonly used for logo design, illustrations, and print layouts.",
  },
  {
    title: "Figma",
    description:
      "A cloud-based design tool popular for UI/UX design and collaboration in real-time.",
  },
  {
    title: "Canva",
    description:
      "A user-friendly online platform for creating graphics, social media posts, and presentations.",
  },
];

const GraphicDesignTechnologies = () => (
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
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold lg:max-w-4xl"
          data-aos="fade-up"
        >
          Technologies
        </p>
        <p
          className="text-lime-500 px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          we work with
        </p>
      </div>
    </div>
    <div className="py-12 bg-white">
      <div className="px-4 lg:px-0 lg:container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-slate-800">
        {technologies.map((tech, index) => (
          <div key={index} data-aos="fade-up">
            <p className="text-2xl font-semibold">{tech.title}</p>
            <p className="py-4">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GraphicDesignTechnologies;
