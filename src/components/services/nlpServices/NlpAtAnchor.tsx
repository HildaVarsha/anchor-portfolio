import React from "react";

const NlpAtAnchor = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/choose-nlp.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Why Choose Anchor for
          <span className="text-lime-500">{""} NLP Services</span>
        </p>
      </div>
      <div className="mt-12 p-4 lg:p-12 lg:container mx-auto text-slate-800 bg-amber-100 flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div>
          <p className="" data-aos="fade-up">
            <strong>Our AI expertise</strong> in designing and engineering AI,
            ML, DL, and chatbot solutions makes us your go-to partner for the
            most challenging projects.
          </p>
          <p className="py-4" data-aos="fade-up">
            <strong>Our flexibility and vendor-agnostic approach</strong> ensure
            that we recommend only the best tools and technologies tailored to
            your unique needs.
          </p>
        </div>
        <div>
          <p data-aos="fade-up">
            <strong>Our in-house R&D lab</strong> empowers us to explore
            cutting-edge technologies and create prototypes driven by key
            insights, helping us proactively address your challenges.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>We deliver value from day one,</strong> offering early
            feedback and maintaining full transparency about the effort, tools,
            and technologies needed to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NlpAtAnchor;
