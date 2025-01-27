import React from "react";

const AiApAtAnchor = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-app-anchor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          360-degree
          <span className="text-green-500">Comprehensive AI Expertise</span>
        </p>
      </div>
      <div className="py-12 bg-white text-slate-800">
        <div className="bg-blue-100 p-6 md:p-12 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
          <div data-aos="fade-up">
            <p>
              <strong>Expert team.</strong> Our AI app development services are
              led by a highly skilled team with extensive expertise in the
              field.
            </p>
            <p className="pt-6">
              <strong>100% transparency.</strong> Transparency is central to
              everything we do. We ensure open communication at every stage,
              keeping our clients informed and engaged throughout the process
              while collecting their feedback. This approach guarantees
              alignment and mutual understanding.
            </p>
          </div>
          <div data-aos="fade-up">
            <p>
              <strong>Complete support.</strong> From ideation and validation to
              implementation, post-deployment maintenance, and strategic
              planning, we provide end-to-end AI app development services,
              tailored to meet the needs of any industry.
            </p>
            <p className="pt-6">
              <strong>Innovative solutions.</strong> Innovation is in our DNA.
              In our R&D lab, we explore new AI concepts and experiment with
              cutting-edge technologies. Using our findings, we develop and
              validate prototypes, bringing groundbreaking innovations to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiApAtAnchor;
