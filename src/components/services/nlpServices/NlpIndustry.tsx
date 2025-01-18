import React from "react";

const NlpIndustry = () => {
  const sections = [
    {
      title: "Ecommerce",
      content:
        "Enhance search accuracy and recommend products your customers will love, based on their current interests and past actions.",
    },
    {
      title: "Customer support chatbots",
      content:
        "Automate responses to basic questions and forward more complex ones to the appropriate person, reducing support costs.",
    },
    {
      title: "Healthcare",
      content:
        "Enhance patient care by analyzing their records to identify underlying issues and detect potential health problems early.",
    },
    {
      title: "Pharmaceuticals",
      content:
        "Enhance research capabilities by automatically extracting key insights from research reports, clinical trials, and electronic health records (EHRs).",
    },
    {
      title: "Finance",
      content:
        "Leverage automated processing of financial reports and statements to identify risks, fraud, and potential compliance issues.",
    },
    {
      title: "Legal documentation",
      content:
        "Simplify contract management by automatically extracting essential information and identifying potential issues in your documents.",
    },
    {
      title: "Real estate",
      content:
        "Leverage our natural language processing services to analyze real estate listings and preferences, making it easier to find the perfect property.",
    },
    {
      title: "Education",
      content:
        "Automatically assess students' work and provide feedback to enhance learning outcomes while reducing manual effort.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          We create tailored
          <span className="text-amber-400">
            {" "}
            NLP solutions for your industry.
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400 ">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We collaborate closely with you to understand your business challenge
          and provide a natural language processing solution that delivers the
          most efficient results.
        </p>
      </div>
      <div className="mt-12 px-4 md:px-0 md:p-12 md:container mx-auto text-slate-800 bg-white flex flex-col gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col md:flex-row gap-4 md:gap-16 md:justify-between"
          >
            <p className="font-semibold w-full" data-aos="fade-up">
              {section.title}
            </p>
            <p className="w-full" data-aos="fade-up">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NlpIndustry;
