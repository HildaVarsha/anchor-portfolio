import React from "react";

const MarkettingService = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          &quot;
          <span className="text-lime-500">Digital marketing services</span>
          to elevate your business to the next level.&quot;
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As a leading provider of digital marketing services for enterprises,
          Anchor Informatics Ltd can meet any marketing need, regardless of
          industry. Develop a high-impact, innovative marketing strategy with
          the ideal tools and platforms for fast results. Our digital campaigns
          are crafted for maximum engagement, scalability, and cross-platform
          compatibility, giving you a competitive edge to drive growth.
        </p>
      </div>
    </div>
  );
};

export default MarkettingService;
