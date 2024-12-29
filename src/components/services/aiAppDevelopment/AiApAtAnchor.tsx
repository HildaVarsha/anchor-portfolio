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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          360-degree
          <span className="text-amber-400">Comprehensive AI Expertise</span>
        </p>
      </div>
      <div className="py-12 bg-white text-slate-800">
        <div className="bg-blue-100 p-6 md:p-12 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
          <div>
            <p>
              <strong>Top-notch team.</strong> Expert team. Our AI app
              development services are driven by our broad expertise in .{" "}
            </p>
            <p className="pt-6">
              <strong>100% transparency</strong> TTransparency is at the heart
              of everything we do. We integrate it into every stage of the
              process, keeping our clients informed and engaged throughout the
              project while gathering their feedback. This ensures that everyone
              is aligned and on the same page.
            </p>
          </div>
          <div>
            <p>
              <strong>Full-cycle support.</strong> From ideation and validation
              to implementation, post-deployment support, and strategic
              planning, our AI app development services offer a comprehensive
              solution for all your AI app needs, regardless of your industry.
            </p>
            <p className="pt-6">
              <strong>Innovative ideas.</strong> We are innovators at our core.
              In our R&D lab, we explore new AI concepts and experiment with
              cutting-edge technologies. Leveraging our insights, we develop and
              validate prototypes to introduce groundbreaking innovations to the
              market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiApAtAnchor;
