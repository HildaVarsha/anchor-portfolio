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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Why Choose Anchor for
          <span className="text-amber-400">{""} NLP Services</span>
        </p>
      </div>
      <div className="mt-12 p-4  md:p-12 md:container mx-auto text-slate-800 bg-amber-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="">
            <strong> Our AI expertise</strong> in designing and engineering AI
            ,ML,DL and chatbot solutions makes us your go-to partner for the
            toughest projects.
          </p>
          <p className="py-4">
            <strong>Our flexibility and vendor-agnostic approach</strong> mean
            we only recommend the best tools and technologies for your unique
            needs.
          </p>
        </div>
        <div>
          <p>
            <strong>Our in-house R&D lab</strong> Enables us to explore the
            latest technologies and create prototypes driven by key insights,
            allowing us to address your challenges proactively.
          </p>
          <p className="pt-4">
            <strong>We deliver value from day one, {""}</strong> Providing early
            feedback and maintaining complete transparency about the effort,
            tools, and technologies required to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NlpAtAnchor;
