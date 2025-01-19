import React from "react";

const AiDevPartner = () => {
  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center pb-12"
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
          Why Partner with Our
          <span className="text-amber-400">{""} AI Development Company?</span>
        </p>
      </div>
      <div className="mt-12 p-4 md:p-12 md:container mx-auto text-slate-800 bg-blue-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div data-aos="fade-up">
          <p className="">
            <strong>Vendor-Agnostic.</strong> We are independent of any
            particular providers or tools, allowing us to recommend the most
            suitable AI development solutions and technologies based on your
            unique needs.
          </p>
          <p className="pt-4">
            <strong>Top AI Developers.</strong> With a team of over 230 experts,
            we provide senior analysts, AI consultants, highly skilled
            developers, and R&D specialists, as required.
          </p>
        </div>
        <div data-aos="fade-up">
          <p>
            <strong>Diverse Expertise.</strong> Our AI development company has
            successfully completed more than 600 projects across various
            industries, including FinTech, healthcare, and life sciences.
          </p>
          <p className="pt-4">
            <strong>Proven Track Record.</strong> We have successfully delivered
            over 600 projects and partnered with more than 200 clients globally.
            Explore our portfolio or get in touch with the Anchor business
            development team for relevant case studies and client testimonials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiDevPartner;
